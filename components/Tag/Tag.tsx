import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
    children,
    size = "S",
    className,
    color = "ghost",
    href,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.red]: color === "red",
                [styles.green]: color === "green",
                [styles.grey]: color === "grey",
                [styles.primary]: color === "primary",
                [styles.ghost]: color === "ghost",
                [styles.s]: size === "S",
                [styles.m]: size === "M",
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
