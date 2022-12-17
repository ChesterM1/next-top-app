import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps) => {
    return <div {...props}>Sidebar</div>;
};
