import React from 'react';
import styles from './Theme.module.css';
import { theme } from '@/types/types';

import { useContext } from 'react';
import { ThemeContext } from '@/Context/ThemeContext';

export default function Theme(props: { theme: theme }) {
  const { theme, updateTheme } = useContext(ThemeContext);

  const editTheme = () => {
    updateTheme(props.theme.name)
  }

  return (
    <div className={theme === props.theme.name ? `${styles.Theme} ${styles.SelectedTheme}` : `${styles.Theme}`} onClick={editTheme}>
      <div
        className={styles.ThemeColor}
        style={{ background: props.theme.primary }}></div>
      <div
        className={styles.ThemeColor}
        style={{ background: props.theme.secondary }}></div>
      <div
        className={styles.ThemeColor}
        style={{ background: props.theme.tertiary }}></div>
    </div>
  );
}
