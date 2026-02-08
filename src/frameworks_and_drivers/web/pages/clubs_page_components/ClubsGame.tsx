import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import { DraggableCard } from './DraggableCard';
import { SeeSawSide } from './SeeSawSide';
import { useAppState } from '../../context/AppStateContext';
import { CLUBS_PAGE, SUITS } from '../../constants';
import middleScaleImg from '../../assets/middle_scale.png'
import seeSawImg from '../../assets/seesaw.png'
import plateImg from '../../assets/plate.png'
import styles from './ClubsGame.module.css'
import { DragPreview } from './DragPreview';

export function ClubsGame() {
    const { state, dispatch } = useAppState();

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
            setLeftSideCards((prev) => prev.includes(suit) ? prev : [...prev, suit]);
            setRightSideCards((prev) => prev.filter(item => item !== suit))
            setOwnedCards((prev) => prev.filter(item => item !== suit))
        } else if (side === 'right') {
            setLeftSideCards((prev) => prev.filter(item => item !== suit));
            setRightSideCards((prev) => prev.includes(suit) ? prev : [...prev, suit])
            setOwnedCards((prev) => prev.filter(item => item !== suit))
        } else if (side === 'bottom') {
            setLeftSideCards((prev) => prev.filter(item => item !== suit));
            setRightSideCards((prev) => prev.filter(item => item !== suit))
            setOwnedCards((prev) => prev.includes(suit) ? prev : [...prev, suit])
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

    // Check if player won
    useEffect(() => {
        if (ownedCards.length === 0 && leftWeight === rightWeight) {
            dispatch({ suit: "clubs", payload: true })
        }
    }, [leftSideCards, rightSideCards])


    return (
        <DndProvider options={HTML5toTouch}>
            <DragPreview
                renderItem={(item) => <DraggableCard suit={item.suit} divClassName={styles.draggableCard} />}
            />
            <span className='message'>{CLUBS_PAGE.GAME_DESCRIPTION}</span>

            <div className={styles.scaleArea}>
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
                        <SeeSawSide side="left" onDrop={handleDrop} divClassName={styles.droppedCardsArea}>
                            {leftSideCards.map((suit) => (
                                <DraggableCard key={suit} suit={suit} divClassName={styles.draggableCard} />
                            ))}
                        </SeeSawSide>
                        <img src={plateImg} />
                    </div>
                    <div className={styles.plateImgRight}
                        style={{
                            transform: `translate(105%, ${plateYOffset}px)`,
                            transition: 'transform 0.3s ease',
                        }}>
                        <SeeSawSide side="right" onDrop={handleDrop} divClassName={styles.droppedCardsArea}>
                            {rightSideCards.map((suit) => (
                                <DraggableCard key={suit} suit={suit} divClassName={styles.draggableCard} />
                            ))}
                        </SeeSawSide>
                        <img src={plateImg} />
                    </div>
                </div>
            </div>

            <SeeSawSide side="bottom" onDrop={handleDrop} divClassName={styles.ownedCardsArea}>
                {ownedCards.map((suit) => (
                    <DraggableCard key={suit} suit={suit} divClassName={styles.draggableCard} />
                ))}
            </SeeSawSide>

        </DndProvider>
    );
}
