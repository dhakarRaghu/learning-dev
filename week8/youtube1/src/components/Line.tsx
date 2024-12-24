import { useRouter } from "next/router";
import { Line } from "../components/Line";

// Define the Video type
interface Video {
  thumbnail: string;
  title: string;
  description: string;
  viewCount: string;
  timestamp: string;
}

export const VideoCardHorizontal = ({ video }: { video: Video }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer grid grid-cols-12"
      onClick={() => {
        router.push("/video/1");
      }}
    >
      <div className="rounded-xl overflow-hidden col-span-5">
        <div>
          <img src={video.thumbnail} alt="Video Thumbnail" />
          <Line progress={10} />
        </div>
      </div>
      <div className="col-span-7 pl-2">
        <div className="text-gray-800 text-sm font-medium pb-2">
          {video.title}
        </div>
        <div className="text-gray-400 text-xs font-normal pb-1">
          {video.description}
        </div>
        <div className="flex">
          <div className="text-gray-400 text-xs font-normal pr-2">
            {video.viewCount}
          </div>
          <div className="text-gray-400 text-xs font-normal">
            • {video.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};