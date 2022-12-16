import styles from "./P.module.css";
import { ParagraphProps } from "./P.props";
import cn from "classnames";

export const P = ({
    size = "M",
    children,
    className,
    ...props
}: ParagraphProps) => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === "S",
                [styles.m]: size === "M",
                [styles.l]: size === "L",
            })}
            {...props}
        >
            {children}
        </p>
    );
};
