import { ReactNode } from 'react';
import styles from './WorkGrid.module.css';

interface Props {
  children: ReactNode;
}

export function WorkGrid({ children }: Props) {
  return <div className={styles.grid}>{children}</div>;
}
