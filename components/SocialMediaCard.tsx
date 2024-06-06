import { SocialMediaInterface } from "@/lib/interface";
import { Tooltip } from "./Tooltip";

export const SocialMediaCard = (mediadata: SocialMediaInterface) => {
  return (
    <Tooltip text={mediadata.username}>
      <div className="border p-2 rounded-md text-2xl duration-200 ease-in-out">
        <div className=" hover:scale-150 duration-300 ease-out ">
          <a href={mediadata.url} target="_blank">
            {mediadata.icon}
          </a>
        </div>
      </div>
    </Tooltip>
  );
};
