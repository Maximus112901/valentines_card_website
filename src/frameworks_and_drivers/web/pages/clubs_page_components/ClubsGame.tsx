import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableCard } from './DraggableCard';
import { SeeSawSide } from './SeeSawSide';
import { useAppState } from '../../context/AppStateContext';
import { SUITS } from '../../constants';
import middleScaleImg from '../../assets/middle_scale.png'
import seeSawImg from '../../assets/seesaw.png'
import plateImg from '../../assets/plate.png'
import styles from './ClubsGame.module.css'

export function ClubsGame() {
    const { state } = useAppState();

    // Drag and Drop Cards
    const [ownedCards, setOwnedCards] = useState([
        ...([SUITS.CLUBS]),
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

    // Rotate seesaw
    const cardWeights: Record<string, number> = {
        [SUITS.CLUBS]: 1,
        [SUITS.DIAMONDS]: 2,
        [SUITS.HEARTS]: 3,
        [SUITS.SPADES]: 4,
    };

    const leftWeight = leftSideCards.reduce((acc, suit) => acc + (cardWeights[suit] || 0), 0);
    const rightWeight = rightSideCards.reduce((acc, suit) => acc + (cardWeights[suit] || 0), 0);

    const totalWeight = leftWeight + rightWeight;
    const balanceRatio = totalWeight === 0 ? 0 : (rightWeight - leftWeight) / totalWeight;

    const maxAngle = 15; // max degrees tilt
    const angle = maxAngle * balanceRatio; // e.g. -15 to +15 degrees

    // Move plates based on see saw
    const radians = (angle * Math.PI) / 180;
    const plateDistance = 180; // distance from pivot (px)
    const plateYOffset = Math.sin(radians) * plateDistance;

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.scaleArea}>
                <SeeSawSide side="left" onDrop={handleDrop}>
                    {leftSideCards.map((suit) => (
                        <DraggableCard key={suit} suit={suit} />
                    ))}
                </SeeSawSide>

                <div className={styles.scale}>
                    <div className={styles.middleScaleImg}>
                        <img src={middleScaleImg} />
                    </div>
                    <div
                        className={styles.seeSawImg}
                        style={{
                            transform: `translate(0, -250%) rotate(${angle}deg)`,
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        <img src={seeSawImg} />
                    </div>
                    <div className={styles.plateImgLeft}
                        style={{
                            transform: `translate(-105%, ${-plateYOffset}px)`,
                            transition: 'transform 0.3s ease',
                        }}>
                        <img src={plateImg} />
                    </div>
                    <div className={styles.plateImgRight}
                        style={{
                            transform: `translate(105%, ${plateYOffset}px)`,
                            transition: 'transform 0.3s ease',
                        }}>
                        <img src={plateImg} />
                    </div>
                </div>

                <SeeSawSide side="right" onDrop={handleDrop}>
                    {rightSideCards.map((suit) => (
                        <DraggableCard key={suit} suit={suit} />
                    ))}
                </SeeSawSide>
            </div>

            <div className={styles.ownedCardsArea}>
                <SeeSawSide side="bottom" onDrop={handleDrop}>
                    {ownedCards.map((suit) => (
                        <DraggableCard key={suit} suit={suit} />
                    ))}
                </SeeSawSide>
            </div>
        </DndProvider>
    );
}
