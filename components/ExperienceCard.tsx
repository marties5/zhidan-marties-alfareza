import { ToolsCard } from "./ToolsCard";
import { Typography } from "./Typography";
export const ExperienceCard = ({ data }: { data: any }) => {
  return (
    <div className="hover:border-slate-200  border border-transparent p-2 mt-10 rounded-md">
      <div className=" lg:flex lg:space-x-2">
        <Typography variant="overline">{data.time_range}</Typography>
        <div className="w-full max-w-lg lg:mt-0 mt-4">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mb-2">
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="overline" className="text-slate-300">
              {data.company}
            </Typography>
          </div>
          {data.description.map((text: string, index: number) => (
            <Typography key={index} variant="caption">
              {text}
            </Typography>
          ))}
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tools.lenght !== 0 &&
              data.tools.map((tool: any) => (
                <ToolsCard key={tool} tool={tool} />
              ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
            {data.projects.lenght !== 0 &&
              data.projects.map((project: any) => (
                <div key={project}>
                  <Typography
                    variant="body2"
                    className="hover:text-slate-500 text-slate-400"
                  >
                    {project}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
