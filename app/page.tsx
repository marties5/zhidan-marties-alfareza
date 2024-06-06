import { ExperienceCard } from "@/components/ExperienceCard";
import { ProfesionalProfileCard } from "@/components/ProfesionalProfieCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialMediaCard } from "@/components/SocialMediaCard";
import { Typography } from "@/components/Typography";
import { data } from "@/data";
import { SocialMediaInterface } from "@/lib/interface";
export default function Home() {
  return (
    <div className="h-full grid lg:grid-cols-5 grid-cols-2 flex-col max-w-7xl mx-auto md:h-screen">
      <div className="w-full flex flex-col col-span-2 space-y-4 justify-between py-10 lg:h-screen lg:px-10 px-4 h-96">
        <div className="space-y-8 ">
          <div>
            <Typography variant="h3">{data.user.name}</Typography>
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
        <div className="flex space-x-11 w-fit">
          {data.user.social_media.map((media: SocialMediaInterface) => (
            <SocialMediaCard {...media} key={media.name} />
          ))}
        </div>
      </div>
      <div className="w-full h-full col-span-3 space-y-4 px-10 lg:pt-10 lg:overflow-y-auto pb-10">
        {data.user.profile_contents.map((content: any, index: number) => (
          <ProfesionalProfileCard content={content} key={index} />
        ))}
        <Typography variant="h5">Experience</Typography>
        {[...data.user.experience_content]
          .reverse()
          .map((exp: any, index: any) => (
            <ExperienceCard data={exp} key={index} />
          ))}
        <Typography variant="h5">Our Project</Typography>
        {data.user.projects.map((project: any, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
