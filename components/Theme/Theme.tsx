import React from 'react'
import styles from './Theme.module.css'
import { theme } from '@/types/types'

export default function Theme(props: {theme:theme}) {
  return (
    <div className={styles.Theme}>
        <div className={styles.ThemeColor} style={{"background": props.theme.primary}}></div>
        <div className={styles.ThemeColor} style={{"background": props.theme.secondary}}></div>
        <div className={styles.ThemeColor} style={{"background": props.theme.tertiary}}></div>
    </div>
  )
}
