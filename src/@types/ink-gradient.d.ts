import { ReactNode } from "react";

declare const Gradient: React.FC<{
  children: ReactNode[] | ReactNode;
  name?:
    | "cristal"
    | "teen"
    | "mind"
    | "morning"
    | "vice"
    | "passion"
    | "fruit"
    | "instagram"
    | "atlas"
    | "retro"
    | "summer"
    | "pastel"
    | "rainbow";
  colors?: string[] | object[];
}>;

export default Gradient;
