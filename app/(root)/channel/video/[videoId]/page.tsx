import axios from "axios";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Publish from "./_components/publish-button";
import { Delete } from "lucide-react";
import DeleteButton from "./_components/delete-button";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
const VideoPage = async ({ params }: { params: { videoId: string } }) => {
  const { userId } = auth();
  const video = await db?.video.findUnique({
    where: {
      id: params.videoId,
    },
  });

  if (!video) redirect("/");
  if (!userId) redirect("/");

  const requiredFields = [
    video?.title,
    video?.description,
    video?.categoryId,
    video?.imgUrl,
    video?.vidUrl,
  ];

  const completedFields = requiredFields.filter((field) => field !== null);
  const completedText = `Completed fields ${completedFields.length}/${requiredFields.length}`;

  return (
    <div>
      <div className="flex items-center w-full justify-between mb-7">
        <div className="truncate text-muted-foreground">{completedText}</div>
        <div className="flex items-center gap-x-2">
          <Publish />
          <DeleteButton />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-8 md:p-0 md:gap-x-2">
        <TitleForm title={video.title} videoId={params.videoId} />
        <DescriptionForm description={video.description} videoId={params.videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
