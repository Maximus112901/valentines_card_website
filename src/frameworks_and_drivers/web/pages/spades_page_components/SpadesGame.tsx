import { useState } from 'react';
import styles from './SpadesGame.module.css'
import { BUTTON_LABELS, SPADES_PAGE } from '../../constants';

export function SpadesGame() {
    const gridSizes = [2, 3, 4]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Keep pressed and next numbers
    const [expectedNumber, setExpectedNumber] = useState(1);
    const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);

    const handleTileClick = (num: number) => {
        if (num === expectedNumber) {
            setExpectedNumber(expectedNumber + 1);
            setPressedNumbers([...pressedNumbers, num]);
        } else {
            setPressedNumbers([]);
            setExpectedNumber(1);
        }
    };

    return (
        <div className={styles.gameContainer}>
            <div className={styles.timer}>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridSizes[1]}, 1fr)`,
                }}
            >
                {numbers.map((num) => (
                    <div
                        key={num}
                        onClick={() =>handleTileClick(num)}
                        className={pressedNumbers.includes(num) ? styles.pressedGridItem : styles.gridItem}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}
