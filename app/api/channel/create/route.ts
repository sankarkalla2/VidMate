import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const user = await currentUser();
    if (!userId || !user) {
      console.log(userId);
      console.log(user);
      return new NextResponse("You are unauthrized", { status: 401 });
    }

    const { isPublished, ...values } = await req.json();
    let channel = await db.channel.findUnique({
      where: {
        userId,
      },
    });

    if (!channel) {
      channel = await db.channel.create({
        data: {
          userId,
          name: user?.username!,
        },
      });
    }

    const newChannel = await db.channel.findUnique({
      where: {
        userId,
      },
    });

    if (!newChannel)
      return new NextResponse("you are not unauthrized", { status: 401 });

    const response = await db.video.create({
      data: {
        channleId: newChannel.id,
        ...values,
      },
    });

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (err: any) {
    console.log("Error White creating Title", err);
    return new NextResponse("Internel server error", { status: 500 });
  }
};
