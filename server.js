const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const Document = require('./models/Document');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect('mongodb://localhost:27017/editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"));

app.use(express.static(path.join(__dirname, 'public')));

const activeUsers = {};

async function findOrCreateDoc(docId) {
  if (!docId) return;
  let doc = await Document.findOne({ docId });
  if (!doc) doc = await Document.create({ docId, content: '' });
  return doc;
}

io.on('connection', socket => {
  socket.on('get-document', async ({ docId, username }) => {
    const doc = await findOrCreateDoc(docId);
    socket.join(docId);
    socket.docId = docId;
    socket.username = username;

    if (!activeUsers[docId]) activeUsers[docId] = [];
    if (!activeUsers[docId].includes(username)) {
      activeUsers[docId].push(username);
    }

    socket.emit('load-document', doc.content);
    io.to(docId).emit('users-in-doc', activeUsers[docId]);

    socket.on('send-changes', data => {
      socket.to(docId).emit('receive-changes', data);
    });

    socket.on('save-document', async data => {
      await Document.findOneAndUpdate({ docId }, { content: data });
    });

    socket.on('disconnect', () => {
      const users = activeUsers[socket.docId] || [];
      activeUsers[socket.docId] = users.filter(name => name !== socket.username);
      io.to(socket.docId).emit('users-in-doc', activeUsers[socket.docId]);
    });
  });
});

server.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
