import Image from "next/image";
import { ToolsCard } from "./ToolsCard";
import { Typography } from "./Typography";

export const ProjectCard = ({ project }: any) => {
  return (
    <div className="hover:border-slate-200  border border-transparent p-2 mt-10 rounded-md group">
      <Typography variant="h6">{project.project_name}</Typography>
      <Typography variant="body1" className="text-slate-400 capitalize">
        {project.role}
      </Typography>
      <div className="mt-3">
        <div className="flex lg:flex-row flex-col lg:pr-20 gap-8 mb-4">
          <Image
            className="aspect-video object-cover lg:h-20 h-full w-fit group-hover:border-slate-300 border border-slate-200 hover:bg-slate-50 rounded-md"
            src={project.image}
            width={1000}
            height={700}
            alt={project.project_name}
          />
          <Typography
            variant="caption"
            className="text-slate-400 group-hover:text-slate-500 underline-offset-2 group-hover:underline"
          >
            {project.description}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-3 mt-2 gap">
          {project.tools.map((tool: any) => (
            <ToolsCard tool={tool} key={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
