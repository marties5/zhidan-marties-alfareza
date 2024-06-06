import { Typography } from "./Typography";

export const ToolsCard = ({ tool }: any) => {
  return (
    <div key={tool} className="border border-neutral-300 px-2 py-1 rounded-md ">
      <Typography
        variant="caption"
        className="hover:text-slate-500 text-slate-400"
      >
        {tool}
      </Typography>
    </div>
  );
};
