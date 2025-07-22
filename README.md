# Real-Time-Collaborative-Document-Editor

COMPANY: CODTECH IT SOLUTIONS

NAME: KATHEEJA ATHIFA S A

INTERN ID: CT04DG3279

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR :NEELA SANTOSH

DESCRIPTION:

     The project titled "Real-Time Collaborative Document Editor" is a comprehensive web-based tool designed to enable multiple users to edit the same document simultaneously from different locations in real time. This system replicates functionality similar to Google Docs, where users can 
collaboratively create, edit, and format documents together, with all changes being instantly visible to every participant. The main objective of 
this project is to build a responsive, secure, and feature-rich collaborative platform that supports text formatting, image embedding, undo/redo
capabilities, password protection, and document management — all within a real-time editing environment.

The backend of this application is developed using Node.js, a fast and lightweight JavaScript runtime, which is highly suitable for real-time 
applications due to its non-blocking event-driven architecture. Socket.IO, a library for real-time web socket communication, is integrated with
Node.js to manage the live data exchange between multiple connected clients and the server. This enables real-time synchronization of document
content — any change made by one user is immediately broadcasted to others editing the same document. MongoDB, a NoSQL database, is used as the 
primary storage system, where each document is stored with a unique identifier (docId), its content (formatted as a Quill Delta string), and
additional metadata such as the associated password. The database schema is simple and scalable, allowing for the potential integration of 
versioning, user roles, and audit logs in the future.

On the frontend, modern web development technologies are used. HTML and CSS form the structure and style of the application, while JavaScript 
handles interactivity and socket communication. The Quill.js rich text editor is embedded in the editor page to provide advanced editing features
such as text formatting (bold, italic, underline, colored text), heading levels, image embedding, and more. Quill also supports its own undo/redo
history stack, which we leverage for local editing convenience. Users can insert and manipulate images, change text colors, apply different heading
levels, and maintain formatting consistency across the document. The use of Quill.js greatly enhances the user experience by offering a flexible 
and powerful editing interface.

To ensure document confidentiality and access control, a password protection mechanism is incorporated. When a user attempts to open a document,
they are prompted to enter a password. If the document is new, the entered password is saved along with it. If the document already exists, the
password is validated on the server before granting access. This prevents unauthorized users from viewing or editing protected content. Moreover, a
recent documents feature is in progress, which will allow users to quickly access previously edited documents by storing references linked to their
usernames.

The development of this application was carried out using Visual Studio Code (VS Code), a lightweight yet powerful source-code editor preferred for
its rich extension ecosystem and integrated terminal. The platform used for running and testing the application includes Node.js (v18+), MongoDB
Community Server, and modern web browsers like Google Chrome. All code was written in JavaScript (both frontend and backend), with project 
dependencies managed via npm (Node Package Manager).

This real-time collaborative document editor can be deployed on any Node-compatible cloud environment or local server and is suitable for 
educational, professional, or personal productivity use cases. The task not only involves implementing real-time synchronization but also creating
an intuitive user interface, managing secure access, and ensuring data consistency. Through this project, essential concepts like real-time
programming, full-stack web development, socket communication, and secure document handling are successfully demonstrated in a practical, usable 
form.

OUTPUT:

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/e0724a06-ed82-4db3-9464-d1ed40a45168" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/a8a2661f-30da-4bc5-a25f-02e49a4fa0c0" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/89a83cf8-c1bb-4ef7-b63d-992751e766cf" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/55c42d58-a4a2-478c-ae9a-07c15408de12" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/9d198288-51ff-4aa3-ae45-7f2fe779b631" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/66383f01-3e5c-4f99-a7b0-feb0351fa882" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/d292a748-9631-40c0-8423-ca6ebd6a08ab" />
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/73caceec-b75b-4c74-a885-9f21df9f50fc" />
