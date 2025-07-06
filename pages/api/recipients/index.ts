import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const recipients = await prisma.recipient.findMany();
    res.status(200).json(recipients);
  } else if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    try {
      const newRecipient = await prisma.recipient.create({ data: { email } });
      res.status(201).json(newRecipient);
    } catch (error) {
      res.status(500).json({ error: 'Error creating recipient' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
