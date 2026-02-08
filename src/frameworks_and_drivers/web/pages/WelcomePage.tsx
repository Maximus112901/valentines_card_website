import { SUITS, WELCOME_PAGE } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import styles from './Page.module.css'

interface PageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function WelcomePage({ onEvent }: PageProps) {
  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.headerContainer}>
        <h1>{WELCOME_PAGE.ICON}</h1>
        <h2>{WELCOME_PAGE.JA_TITLE}</h2>
        <h3>{WELCOME_PAGE.EN_TITLE}</h3>
        <p>{WELCOME_PAGE.JA_MESSAGE}</p>
        <p>{WELCOME_PAGE.EN_MESSAGE}</p>
      </div>

      <div className={styles.navigationButtonsContainer}>
        <button onClick={() => onEvent(ValentineEvent.clubs())}>{SUITS.CLUBS}</button>
        <button onClick={() => onEvent(ValentineEvent.diamonds())}>{SUITS.DIAMONDS}</button>
        <button onClick={() => onEvent(ValentineEvent.hearts())}>{SUITS.HEARTS}</button>
        <button onClick={() => onEvent(ValentineEvent.spades())}>{SUITS.SPADES}</button>
      </div>
    </div>
  );
}
