import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ message: 'Unauthorized.' });
    }
    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { listedHomes: true },
    });
    // Check if authenticated user is the owner of this home
    const { id } = req.query;
    if (!user?.listedHomes?.find(home => home.id === id)) {
        return res.status(401).json({ message: 'Unauthorized.' });
    }

    if (req.method === 'PATCH') {
        try {
            const home = await prisma.home.update({where: { id },data: req.body,});
            res.status(200).json(home);
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
    else {
        res.setHeader('Allow', ['PATCH']);
        res
        .status(405)
        .json({ message: `HTTP method ${req.method} is not supported.` });
    }
}