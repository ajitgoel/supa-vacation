import { getSession } from 'next-auth/react';
import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  // TODO: Check if user is authenticated

  // TODO: Retrieve home ID from request
  const { id } = req.query;

  // TODO: Add home to favorite
  if (req.method === 'PUT') {
    //...
  }
  // TODO: Remove home from favorite
  else if (req.method === 'DELETE') {
    //...
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}