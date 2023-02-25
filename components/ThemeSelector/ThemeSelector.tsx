import React from 'react';
import styles from './ThemeSelector.module.css';

import Theme from '../Theme/Theme';
import { themes } from '@/data/Themes';

export default function ThemeSelector() {

  return (
    <section className={styles.ThemeSelector}>
      {themes.map((item, index) => (
        <Theme theme={item} key={index} />
      ))}
    </section>
  );
}
