import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { name } = req.body;

  const existingUser = await client.user.findFirst({
    where: {
      ...(name && { name }),
    },
  });

  if (existingUser) {
    req.session.user = {
      id: existingUser.id,
    };
    await req.session.save();

    return res.json({
      ok: true,
      message: "Logged in",
    });
  } else {
    const createUser = await client.user.create({
      data: {
        name,
      },
    });

    req.session.user = {
      id: createUser.id,
    };
    await req.session.save();

    return res.json({
      ok: true,
      message: "User created and logged in",
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
