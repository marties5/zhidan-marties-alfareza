import { SocialMediaCard } from "@/components/SocialMediaCard";
import { Typography } from "@/components/Typography";
import { data } from "@/data";
import { SocialMediaInterface } from "@/lib/interface";
export default function Home() {
  return (
    <div className="h-full grid lg:grid-cols-5 flex-col">
      <div className="w-full flex flex-col col-span-2 justify-between my-14">
        <div className="space-y-8 ">
          <div>
            <Typography variant="h2">{data.user.name}</Typography>
            <Typography variant="h5" className="text-slate-600">
              {data.user.title}
            </Typography>
          </div>
          <Typography
            variant="subtitle2"
            italic
            className="max-w-xl text-slate-400"
          >
            {data.user.motivation}
          </Typography>
        </div>
        <div className="bottom-0 flex space-x-11 w-fit">
          {data.user.social_media.map((media: SocialMediaInterface) => (
            <SocialMediaCard {...media} key={media.name} />
          ))}
        </div>
      </div>
      <div className="w-full h-full col-span-3  space-y-4 px-10 lg:pt-10 overflow-y-auto">
        {data.user.profile_contents.map((content: any, index: number) => (
          <div key={index} className="space-y-4">
            <Typography key={index} variant="h6">
              {content.title}
            </Typography>
            <div key={index} className="space-y-4">
              {content.value.map((text: string, index: number) => (
                <Typography
                  key={index}
                  variant="body2"
                  className="w-full text-pretty"
                >
                  {text}
                </Typography>
              ))}
            </div>
          </div>
        ))}
        {[...data.user.experience_content]
          .reverse()
          .map((exp: any, index: any) => (
            <div key={index} className="space-y-2 space-x-2 flex">
              <Typography variant="overline">{exp.time_range}</Typography>
              <div className="w-full max-w-lg">
                <div className="flex space-x-4 mb-2">
                  <Typography variant="button">{exp.title}</Typography>
                  <Typography variant="overline">{exp.company}</Typography>
                </div>
                {exp.description.map((text: string, index: number) => (
                  <Typography key={index} variant="caption">
                    {text}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
