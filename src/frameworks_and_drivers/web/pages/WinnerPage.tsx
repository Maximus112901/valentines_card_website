import { WINNER_PAGE } from '../constants';
import styles from './Page.module.css'

export function WinnerPage() {

  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.headerContainer}>
        <span>{WINNER_PAGE.ICON}</span>
        <span>{WINNER_PAGE.JA_TITLE}</span>
        <span>{WINNER_PAGE.EN_TITLE}</span>
      </div>
    </div>
  );
}
