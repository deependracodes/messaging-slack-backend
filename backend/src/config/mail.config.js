import nodemailer from 'nodemailer';

import { MAIL_PASS, MAIL_USER } from './server.config.js';

export default nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS
  }
});
