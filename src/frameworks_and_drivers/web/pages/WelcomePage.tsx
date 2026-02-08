import { SUITS, WELCOME_PAGE, WINNER_PAGE } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import styles from './Page.module.css'
import { useAppState } from '../context/AppStateContext';

interface PageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function WelcomePage({ onEvent }: PageProps) {
  const { state } = useAppState();

  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.headerContainer}>
        <h1>{state.cards.clubs ? SUITS.CLUBS : '?'}{state.cards.diamonds ? SUITS.DIAMONDS : '?'}{state.cards.hearts ? SUITS.HEARTS : '?'}{state.cards.spades ? SUITS.SPADES : '?'}</h1>
        <span className='title'>{WELCOME_PAGE.JA_TITLE}</span>
        <span className='title'>{WELCOME_PAGE.EN_TITLE}</span>
        <span className='message'>{WELCOME_PAGE.JA_MESSAGE}</span>
        <span className='message'>{WELCOME_PAGE.EN_MESSAGE}</span>
      </div>

      <div className={styles.navigationButtonsContainer}>
        {!state.cards["clubs"] ? <button onClick={() => onEvent(ValentineEvent.clubs())}>{SUITS.CLUBS}</button> : null}
        {!state.cards["diamonds"] ? <button onClick={() => onEvent(ValentineEvent.diamonds())}>{SUITS.DIAMONDS}</button> : null}
        {!state.cards["hearts"] ? <button onClick={() => onEvent(ValentineEvent.hearts())}>{SUITS.HEARTS}</button> : null}
        {!state.cards["spades"] ? <button onClick={() => onEvent(ValentineEvent.spades())}>{SUITS.SPADES}</button> : null}
        <button className={state.winner ? '' : styles.disabled} onClick={() => onEvent(ValentineEvent.win())}>{WINNER_PAGE.ICON}</button>
      </div>
    </div>
  );
}
