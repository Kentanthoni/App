import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deleted = await prisma.recipient.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deleted);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting recipient' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
