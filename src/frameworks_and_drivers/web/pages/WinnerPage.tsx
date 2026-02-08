import { useState } from 'react';
import { WINNER_PAGE } from '../constants';
import styles from './Page.module.css'

export function WinnerPage() {
  const [now, setNow] = useState(new Date());

  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.headerContainer}>
        <h1>{WINNER_PAGE.ICON}</h1>
        <span className='title'>{WINNER_PAGE.JA_TITLE}</span>
        <span className='title'>{WINNER_PAGE.EN_TITLE}</span>
      </div>
      <span className='message'>{WINNER_PAGE.EN_MESSAGE}</span>
      <span className='message'> {now.toLocaleDateString()} - {now.toLocaleTimeString()}</span>
    </div>
  );
}
