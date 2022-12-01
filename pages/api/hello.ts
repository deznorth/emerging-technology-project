// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PocketBase, { Record } from 'pocketbase';

// DB Client
const pb = new PocketBase(process.env.API_BASE_URL);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record[]>
) {
  const list = await pb.collection('users').getFullList();
  res.status(200).json(list);
}
