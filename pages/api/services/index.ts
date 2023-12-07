import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { title, content, maxNum, category },
    session: { user },
  } = req;

  const userID = await client.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (req.method === "GET") {
    const services = await client.service.findMany({
      include: {
        _count: {
          select: {
            liked: true,
            room: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      ok: true,
      message: "모든 리스트를 가져왔습니다.",
      services,
    });
  }
  if (req.method === "POST") {
    const createService = await client.service.create({
      data: {
        title,
        content,
        maxNum: +maxNum,
        category,
        readerName: userID?.name ?? "",
        status: "Ing",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      service: createService,
      message: "good",
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
