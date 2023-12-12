import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";
import prisma from "@/libs/client/prisma";

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

    const roomWithUserCount = await client.room.findMany({
      include: {
        _count: {
          select: {
            users: true, // 사용자(User) 수 가져오기
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // 사용자(User) 수 출력
    roomWithUserCount.forEach((room) => {
      console.log(`Room ID: ${room.id}, User Count: ${room._count.users}`);
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
