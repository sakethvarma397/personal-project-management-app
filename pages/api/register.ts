// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createJWT, hashPassword} from "@/lib/auth";
import {serialize} from "cookie";
import {db} from "@/lib/db";


export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }
    })

    const jwt =  await createJWT(user);

    res.setHeader(
        'Set-Cookie',
        // @ts-ignore
        serialize(process.env.COOKIE_NAME, jwt, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
    );
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}
