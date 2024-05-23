import { TypographyVariant } from "./type";
export interface TextFormaterProps {
    text: string;
  }

export interface TypographyInterface {
    children: string;
    className?: string;
    variant?: TypographyVariant;
    italic?: boolean;
}
 
export interface SocialMediaInterface {
  name: string;
  username: string;
  url: string;
  icon: JSX.Element
}