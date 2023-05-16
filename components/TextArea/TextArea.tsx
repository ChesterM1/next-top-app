import React from 'react';
import { TextAreaProps } from './TextArea.interface';
import cn from 'classnames';
import styles from './TextArea.module.css';

export const TextArea = ({ className, ...props }: TextAreaProps) => {
  return <textarea className={cn(styles.textarea, className)} {...props}></textarea>;
};
