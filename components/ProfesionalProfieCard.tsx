import { Typography } from "./Typography";

export const ProfesionalProfileCard = ({ content }: any) => {
  return (
    <div className="space-y-4">
      <Typography variant="h5">{content.title}</Typography>
      
      <div className="space-y-4">
        {content.value.map((text: string, index: number) => (
          <Typography
            variant="body2"
            key={index}
            className="w-full text-pretty"
          >
            {text}
          </Typography>
        ))}
      </div>
    </div>
  );
};
