export type WeightOpts =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export const headingSizeStyles = {
  heading1: "text-6xl md:text-7xl lg:text-8xl",
  heading2: "text-4xl md:text-5xl lg:text-6xl",
  heading3: "text-3xl md:text-4xl lg:text-5xl",
  heading4: "text-2xl md:text-3xl lg:text-4xl",
  heading5: "text-xl md:text-2xl lg:text-3xl",
  heading6: "text-xl lg:text-2xl",
  subtitle1: "text-xl md:text-lg",
  subtitle2: "text-lg",
};

export const weightStyles = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export const fontStyles = {
  display: "font-display",
  sans: "font-sans",
};
