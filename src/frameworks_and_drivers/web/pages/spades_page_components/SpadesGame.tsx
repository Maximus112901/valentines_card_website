import { useState, useEffect } from 'react';
import styles from './SpadesGame.module.css'
import { BUTTON_LABELS, SPADES_PAGE } from '../../constants';
import { useAppState } from '../../context/AppStateContext';

function generateUniqueRandomNumbers(count: number, min: number, max: number) {
    const numbers = new Set();

    while (numbers.size < count) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(rand);
    }

    return Array.from(numbers);
}

export function SpadesGame() {
    const { dispatch } = useAppState()

    // Keep track of level and randomly generate numbers
    const gridSizes = [2, 3, 4]
    const [level, setLevel] = useState(1);
    const [maxNumber, setMaxNumber] = useState(gridSizes[level - 1] ** 2);
    const [numbers, setNumbers] = useState(generateUniqueRandomNumbers(maxNumber, 1, maxNumber))

    useEffect(() => {
        // if not yet last level
        if (level <= gridSizes.length) {
            const newMax = gridSizes[level - 1] ** 2;
            setMaxNumber(newMax);
            setNumbers(generateUniqueRandomNumbers(newMax, 1, newMax));

            // reset board
            setExpectedNumber(1);
            setPressedNumbers([]);
        }
        // if player cleared previous level, they won
        else {
            dispatch({ suit: "spades", payload: true })
        }
    }, [level]);

    // Keep pressed and next numbers
    const [expectedNumber, setExpectedNumber] = useState(1);
    const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);

    const handleTileClick = (num: number) => {
        // if correct
        if (num === expectedNumber) {
            setExpectedNumber(expectedNumber + 1);
            setPressedNumbers([...pressedNumbers, num]);

            // check last number was pressed correctly
            if (num === maxNumber) {
                setLevel(prev => prev + 1)
            }
        // if wrong
        } else {
            setLevel(1);
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
                    gridTemplateColumns: `repeat(${gridSizes[level - 1]}, 1fr)`,
                }}
            >
                {numbers.map((num) => (
                    <div
                        key={num}
                        onClick={() => handleTileClick(num)}
                        className={pressedNumbers.includes(num) ? styles.pressedGridItem : styles.gridItem}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}
