{
  "name": "shaban-ticket-system",
  "version": "1.0.0",
  "description": "Shaban.Dev ticket system with email login codes, admin dashboard, tickets, claims, and chat.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.18.3",
    "express-rate-limit": "^7.4.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "nodemailer": "^6.9.15",
    "uuid": "^9.0.1"
  }
}
