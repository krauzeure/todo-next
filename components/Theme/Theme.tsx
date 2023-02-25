import React from 'react';
import styles from './Theme.module.css';
import { theme } from '../../types/types'

import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext'
import { GlobalListContext } from '../../Context/ListContext';

export default function Theme(props: { theme: theme }) {
  const { theme, updateTheme } = useContext(ThemeContext);
  const { list } = useContext(GlobalListContext);

  const editTheme = () => {
    updateTheme(props.theme.name)
    window.localStorage.setItem(
        'todoList',
        JSON.stringify({ theme: props.theme.name, list: list })
      );
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
