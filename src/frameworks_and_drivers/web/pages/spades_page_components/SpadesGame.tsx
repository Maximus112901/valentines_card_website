import { useState, useEffect } from 'react';
import styles from './SpadesGame.module.css'
import { BUTTON_LABELS, SPADES_PAGE } from '../../constants';
import { useAppState } from '../../context/AppStateContext';

function generateUniqueRandomNumbers(count: number, min: number, max: number) {
    const numbers = new Set<number>();

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
    const [maxNumber, setMaxNumber] = useState(gridSizes[0] ** 2);
    const [numbers, setNumbers] = useState(generateUniqueRandomNumbers(maxNumber, 1, maxNumber))

    // Timer
    const [time, setTime] = useState(gridSizes[0] ** 2);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(interval);

                    // Fail level when timer reaches 0
                    setIsRunning(false);
                    setLevel(0);
                    setExpectedNumber(1);
                    setPressedNumbers([]);

                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

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

    // Update board state
    useEffect(() => {
        // add handler for player failing at level 1
        if (level === 0){
            setLevel(1);
            return;
        }

        if (level <= gridSizes.length) {
            const newMax = gridSizes[level - 1] ** 2;
            setMaxNumber(newMax);
            setNumbers(generateUniqueRandomNumbers(newMax, 1, newMax));

            // reset board
            setExpectedNumber(1);
            setPressedNumbers([]);

            // reset & start timer
            setTime(newMax);
            setIsRunning(true);

        } else {
            setIsRunning(false);
            dispatch({ suit: "spades", payload: true });
        }
    }, [level]);

    return (
        <div className={styles.gameContainer}>
            <div className={styles.timer}>
                <span className={styles.largeText}>Level: {level}/{gridSizes.length}</span>
                <br />
                <span className={styles.largeText}>Time: {time}s</span>
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
