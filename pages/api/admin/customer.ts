import { prisma } from "services/PrismaClient.service"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.customer.findMany()
  res.json(posts)
}