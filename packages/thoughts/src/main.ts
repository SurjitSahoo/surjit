import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

payload.init({
  secret: process.env['PAYLOAD_SECRET'],
  mongoURL: process.env['MONGODB_URI'],
  express: app,
});

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const port = process.env['PORT'] || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
