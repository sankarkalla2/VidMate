import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { videoId: string } }
) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("You are not unauthrized", { status: 401 });
    }

    const response = await db?.video.findUnique({
      where: {
        id: params.videoId,
      },
    });
    if (!response) {
      return new NextResponse("Not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.log("Error", err);
    return new NextResponse("Internel server error", { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { videoId: string } }
) => {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();
    if (!userId) {
      return new NextResponse("You are not unauthrized", { status: 401 });
    }

    const channel = await db?.channel.findUnique({
      where: {
        userId,
      },
    });
    if (!channel) {
      return new NextResponse("channel not found", { status: 404 });
    }

    const isVideoOwner = await db?.video.findUnique({
      where: {
        id: params.videoId,
        channleId: channel.id,
      },
    });
    if (!isVideoOwner) {
      return new NextResponse("You are not Allowed", { status: 401 });
    }

    const response = await db?.video.update({
      where: {
        id: params.videoId,
      },
      data: {
        ...values,
      },
    });
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.log("Error", err);
    return new NextResponse("Internel Server Error", { status: 500 });
  }
};
