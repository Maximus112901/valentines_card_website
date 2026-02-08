import { BUTTON_LABELS } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import styles from './Page.module.css'

interface SuitConstants {
    ICON: string;      // or the type of SUITS.CLUBS if it's an enum
    JA_TITLE: string;
    EN_TITLE: string;
    JA_MESSAGE: string;
    EN_MESSAGE: string;
}

interface SuitPageProps {
    onEvent: (event: ValentineEvent) => void;
    suit: SuitConstants,
    suit_game: React.ComponentType<any>,
}

export function SuitPage({ onEvent, suit, suit_game }: SuitPageProps) {
    const SuitGame = suit_game;

    return (
        <div className={styles.pageContentContainer}>
            <div className={styles.headerContainer}>
                <h1>{suit.ICON}</h1>
                <h2>{suit.JA_TITLE}</h2>
                <h3>{suit.EN_TITLE}</h3>
                <p>{suit.JA_MESSAGE}</p>
                <p>{suit.EN_MESSAGE}</p>
            </div>

            <div className={styles.gameContainer}>
                <SuitGame />
            </div>

            <button onClick={() => onEvent(ValentineEvent.goBack())}>{BUTTON_LABELS.GO_BACK}</button>
        </div>
    );
}
