import { NextApiRequest, NextApiResponse } from "next";

// client
import client from "@/libs/server/client";

// helper function
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { method } = req;
  const userId = +req.session.user?.id!;

  try {
    const exUser = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    // 내 정보 요청
    if (method === "GET") {
      return res.status(200).json({
        ok: true,
        message: "로그인된 유저의 정보입니다.",
        user: exUser,
      });
    }
    if (method === "POST") {
      const {
        session: { user },
        body: { name },
      } = req;
      const checkUser = await client.user.findUnique({
        where: {
          id: user?.id,
        },
      });

      if (name && name !== checkUser?.name) {
        const Exit = Boolean(
          await client.user.findUnique({
            where: {
              name,
            },
            select: {
              id: true,
            },
          })
        );
        if (Exit) {
          return res.json({
            ok: false,
            message: "name alreay",
            error: "name alreay",
          });
        }
        await client.user.update({
          where: {
            id: user?.id,
          },
          data: {
            name,
          },
        });
        res.json({
          ok: true,
          message: "name update",
        });
      }
    }

    // 로그아웃
    else if (method === "PATCH") {
      req.session.destroy();

      return res.status(200).json({
        ok: true,
        message: "로그아웃에 성공했습니다.",
      });
    }
  } catch (error) {
    console.error("/api/users/me error >> ", error);

    res.status(500).json({
      ok: false,
      message: "서버측 에러입니다.\n잠시후에 다시 시도해주세요",
      error,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST", "DELETE"], handler })
);
