import Link from "next/link";
import { Typography } from "./Typography";
export const Footer = () => {
  return (
    <div className="border-t border-purple-200 pt-4">
      <Typography variant="h6">Colaborate With Me..?</Typography>
      <div className="flex gap-4"></div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Typography variant="caption">Contact</Typography>
        <Link
          className="hover:underline underline-offset-4"
          target="_blank"
          href={`https://wa.me/${+6281515254030}?text=hai marties,can i calaborate with u`}
        >
          <Typography variant="caption">+62 8151-5254-030 </Typography>
        </Link>
        <Typography variant="caption">Email</Typography>
        <Typography variant="caption">zhidamarties@gmail.com </Typography>
      </div>
      <Typography className="text-center mt-10 text-slate-400 font-thin">
        Build with Love for life
      </Typography>
    </div>
  );
};
