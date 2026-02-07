import { useState } from 'react';
import { BUTTON_LABELS, CLUBS_PAGE } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import { useAppState } from '../context/AppStateContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableCard } from './clubs_page_components/DraggableCard';
import { SeeSawSide } from './clubs_page_components/SeeSawSide';

interface PageProps {
    onEvent: (event: ValentineEvent) => void;
}

export function ClubsPage({ onEvent }: PageProps) {
    const { state, dispatch } = useAppState()

    const ownedCards = ['♣️', '♦️', '♥️', '♠️']; // example owned suits
    const [leftSideCards, setLeftSideCards] = useState<string[]>([]);
    const [rightSideCards, setRightSideCards] = useState<string[]>([]);

    const handleDrop = (suit: string, side: 'left' | 'right') => {
        if (side === 'left') setLeftSideCards([...leftSideCards, suit]);
        else setRightSideCards([...rightSideCards, suit]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="page-content-container">
                <h1>{CLUBS_PAGE.ICON}</h1>
                <h2>{CLUBS_PAGE.JA_TITLE}</h2>
                <h3>{CLUBS_PAGE.EN_TITLE}</h3>
                <p>{CLUBS_PAGE.JA_MESSAGE}</p>
                <p>{CLUBS_PAGE.EN_MESSAGE}</p>

                <div className="game-area" style={{ display: 'flex', gap: 16 }}>
                    <SeeSawSide side="left" onDrop={handleDrop}>
                        {leftSideCards.map((suit, i) => (
                            <div key={i}>{suit}</div>
                        ))}
                    </SeeSawSide>

                    <div
                        style={{
                            width: '200px',
                            height: '20px',
                            backgroundColor: '#654321',
                            alignSelf: 'center',
                            borderRadius: '10px',
                            transform: 'rotate(5deg)',
                            margin: '0 16px',
                        }}
                    ></div>

                    <SeeSawSide side="right" onDrop={handleDrop}>
                        {rightSideCards.map((suit, i) => (
                            <div key={i}>{suit}</div>
                        ))}
                    </SeeSawSide>
                </div>

                <div style={{ marginTop: 24 }}>
                    {ownedCards.map((suit) => (
                        <DraggableCard key={suit} suit={suit} />
                    ))}
                </div>

                <button onClick={() => onEvent(ValentineEvent.goBack())}>{BUTTON_LABELS.GO_BACK}</button>
            </div>
        </DndProvider>
    );
}
