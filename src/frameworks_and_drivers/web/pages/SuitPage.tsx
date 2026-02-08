import { useEffect, useState } from 'react';
import { BUTTON_LABELS } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import styles from './Page.module.css'
import { GotCardModal } from './GotCardModal';
import { useAppState } from '../context/AppStateContext';
import type { Suit } from '../context/AppStateContext';

interface SuitConstants {
    SUIT_NAME: string,
    ICON: string;
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
    const { state } = useAppState();

    const [showModal, setShowModal] = useState(false)
    const SuitGame = suit_game;

    useEffect(() => {
        if (state.cards[suit.SUIT_NAME as Suit]) {
            setShowModal(true)
        }
    }, [state.cards])

    return (
        <div className={styles.pageContentContainer}>
            <GotCardModal
                isOpen={showModal}
                onClose={() => onEvent(ValentineEvent.goBack())}
                suit={suit}
            />

            <div className={styles.headerContainer}>
                <span className={styles.icon}>{suit.ICON}</span>
                <span className='title'>{suit.JA_TITLE}</span>
                <span className='title'>{suit.EN_TITLE}</span>
                <span className='message'>{suit.JA_MESSAGE}</span>
                <span className='message'>{suit.EN_MESSAGE}</span>
            </div>

            <div className={styles.gameContainer}>
                <SuitGame />
            </div>

            <div className={styles.navigationButtonsContainer}>
                <button onClick={() => onEvent(ValentineEvent.goBack())}>{BUTTON_LABELS.GO_BACK}</button>
            </div>
        </div>
    );
}
