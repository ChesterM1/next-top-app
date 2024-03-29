import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import { ButtonProps } from './Button.props';

export const Button = ({
  appearance,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => (
        <button
            className={cn(styles.button, className, {
              [styles.primary]: appearance === 'primary',
              [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                      [styles.down]: arrow === 'down',
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
);
