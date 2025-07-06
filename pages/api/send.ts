import { sendEmail } from '../../lib/brevo';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { subject, content } = req.body;
  const senderEmail = process.env.SENDER_EMAIL;

  if (!subject || !content || !senderEmail) {
    return res.status(400).json({ error: 'Subject, content and senderEmail are required' });
  }

  try {
    const recipients = await prisma.recipient.findMany();

    for (const recipient of recipients) {
      await sendEmail(recipient.email, subject, content, senderEmail);
    }

    return res.status(200).json({ message: 'Correos enviados' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ error: 'Error sending emails' });
  }
}
