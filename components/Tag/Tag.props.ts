import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: "red" | "ghost" | "grey" | "green" | "primary";
    size?: "S" | "M";
    href?: string;
}
