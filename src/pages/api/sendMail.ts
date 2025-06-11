'use server';

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { IForm } from '@/components/ContactForm';

type ResponseData = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const reqBody = req.body as IForm; //req.body;

  const firstName = reqBody.firstName;
  const lastName = reqBody.lastName;
  const email = reqBody.email;
  const phone = reqBody.phone;
  const message = reqBody.message;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const response = await transporter.sendMail({
      from: `"Black Powder" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `[Black Powder form] New message from: ${firstName} ${lastName}`,
      html: `
      <body>
      <p>User filled the form:</p>
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email ? `<a href="mailto:${email}">${email}</a>` : '–––'}</p>
      <p><b>Phone Number:</b> ${phone ? `<a href="tel:${phone}">${phone}</a>` : '–––'}</p>
      <p><b>Message:</b> ${message}</p>
      </body>
    `,
    });

    console.log(response);

    console.log('Email sent successfully');
    return res.status(200).json({ success: true, message: 'Email sent successfully', data: req.body });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
