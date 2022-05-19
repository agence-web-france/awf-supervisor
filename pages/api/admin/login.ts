import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body.data
    if (
      email === process.env.NEXT_PUBLIC_BASIC_AUTH_USER_EMAIL &&
      password === process.env.BASIC_AUTH_PASSWORD
    ) {
      const token = process.env.BASIC_AUTH_TOKEN
      res.status(200).json({ email, token })
    }
    res.status(401)
  }
  res.status(404)
}