import React from "react";

declare const BigText: React.FC<{
  text: string;
  font?:
    | "block"
    | "slick"
    | "tiny"
    | "grid"
    | "pallet"
    | "shade"
    | "simple"
    | "simpleBlock"
    | "3d"
    | "simple3d"
    | "chrome"
    | "huge";
  align?: "left" | "center" | "right";
  colors?: string[];
  backgroundColor?: "transparent" | "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";
  letterSpacing?: number;
  lineHeight?: number;
  space?: boolean;
  maxLength?: number;
}>;

export default BigText;
