import React from 'react';
import styles from './ThemeSelector.module.css';

import Theme from '../Theme/Theme';
import { themes } from '@/data/Themes';

import { useContext } from 'react';
import { ThemeContext } from '@/Context/ThemeContext';

export default function ThemeSelector() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <section className={styles.ThemeSelector}>
      {themes.map((item, index) => (
        <Theme theme={item} key={index} />
      ))}
    </section>
  );
}
