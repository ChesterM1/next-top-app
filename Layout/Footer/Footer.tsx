import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={cn(className, styles.footer)}>
            <div className={styles.privacy}>
                <a href="#" target="_blank">
                    OwlTop © 2022 - {format(new Date(), "yyyy")} Все права
                    защищены
                </a>
            </div>
            <div className={styles.confirm}>
                <a href="#" target="_blank">
                    Пользовательское соглашение
                </a>
            </div>
            <div className={styles.confident}>
                <a href="#" target="_blank">
                    Политика конфиденциальности
                </a>
            </div>
        </footer>
    );
};
