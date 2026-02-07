// ClubsGame.tsx
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableCard } from './DraggableCard';
import { SeeSawSide } from './SeeSawSide';
import { useAppState } from '../../context/AppStateContext';
import { SUITS } from '../../constants';

export function ClubsGame() {
    const { state } = useAppState();
    const [ownedCards, setOwnedCards] = useState([
        ...(state.cards.clubs ? [SUITS.CLUBS] : []),
        ...(state.cards.diamonds ? [SUITS.DIAMONDS] : []),
        ...(state.cards.hearts ? [SUITS.HEARTS] : []),
        ...(state.cards.spades ? [SUITS.SPADES] : []),
    ]);

    const [leftSideCards, setLeftSideCards] = useState<string[]>([]);
    const [rightSideCards, setRightSideCards] = useState<string[]>([]);

    const handleDrop = (suit: string, side: 'left' | 'right' | 'bottom') => {
        if (side === 'left') {
            setLeftSideCards((prev) => [...prev, suit]);
            setRightSideCards((prev) => prev.filter(item => item !== suit))
            setOwnedCards((prev) => prev.filter(item => item !== suit))
        } else if (side === 'right') {
            setLeftSideCards((prev) => prev.filter(item => item !== suit));
            setRightSideCards((prev) => [...prev, suit])
            setOwnedCards((prev) => prev.filter(item => item !== suit))
        } else if (side === 'bottom') {
            setLeftSideCards((prev) => prev.filter(item => item !== suit));
            setRightSideCards((prev) => prev.filter(item => item !== suit))
            setOwnedCards((prev) => [...prev, suit])
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="game-area" style={{ display: 'flex', gap: 16 }}>
                <SeeSawSide side="left" onDrop={handleDrop}>
                    {leftSideCards.map((suit, i) => (
                        <DraggableCard key={suit} suit={suit} />
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
                        <DraggableCard key={suit} suit={suit} />
                    ))}
                </SeeSawSide>
            </div>

            <SeeSawSide side="bottom" onDrop={handleDrop}>
                {ownedCards.map((suit) => (
                    <DraggableCard key={suit} suit={suit} />
                ))}
            </SeeSawSide>

        </DndProvider>
    );
}
