import { useState } from 'react';
import styles from './SpadesGame.module.css'
import { BUTTON_LABELS, SPADES_PAGE } from '../../constants';

export function SpadesGame() {
    const gridSizes = [2, 3, 4]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Keep track of next number that should be pressed
    const [expectedNumber, setExpectedNumber] = useState(1);

    const handleTileClick = (num: number) => {
        if (num === expectedNumber) {
            console.log(`Correct! You tapped ${num}`);
            setExpectedNumber(expectedNumber + 1);
        } else {
            console.log(`Wrong! You tapped ${num}, expected ${expectedNumber}`);
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
                        className={styles.gridItem}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}
