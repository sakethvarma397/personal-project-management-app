import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

// @ts-ignore
export default async function handler(req, res) {
    // @ts-ignore
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

    await db.project.create({
        data: {
            name: req.body.name,
            ownerId: user.id,
        },
    });

    // NOTE: We are not using the response and instead relying on refresh
    res.json({ data: { message: "ok" } });
}
