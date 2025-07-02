import type { NextApiRequest, NextApiResponse } from 'next';'

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // This is a stub. In production, proxy to backend or handle file upload here.
  res.status(200).json({ message: 'Document uploaded (stub)' });
}
