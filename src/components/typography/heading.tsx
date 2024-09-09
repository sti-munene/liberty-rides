import clsx from "clsx";
import { HTMLAttributes, ElementType, ReactNode } from "react";
import {
  fontStyles,
  headingSizeStyles,
  WeightOpts,
  weightStyles,
} from "./utils";

type SizeOpts =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "subtitle1"
  | "subtitle2";

type FontOpts = "sans" | "display";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  children: ReactNode;
  size?: SizeOpts;
  weight?: WeightOpts;
  className?: string;
  font?: FontOpts;
}

const Heading = ({
  as: Component = "h3",
  children,
  className = "",
  size = "heading1",
  weight = "normal",
  font = "sans",
  ...props
}: HeadingProps) => {
  const styles = clsx(
    headingSizeStyles[size],
    weightStyles[weight],
    fontStyles[font],
    className
  );

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
};

Heading.displayName = "Heading";

export { Heading };
