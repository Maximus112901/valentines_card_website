import { useAppState } from '../../context/AppStateContext';
import styles from './HeartsGame.module.css'
import { BUTTON_LABELS, HEARTS_PAGE } from '../../constants';
import { useState } from 'react';
import video from '../../assets/hearts_game_video.mp4'

export function HeartsGame() {
    const { state, dispatch } = useAppState();

    // Text Input
    const [pin, setPin] = useState("")

    const handleChange = (e: any) => {
        const { value } = e.target;
        setPin(value);
    };

    // Check if player won
    const checkPin = () => {
        if (pin === HEARTS_PAGE.PIN) {
            dispatch({ suit: "hearts", payload: true })
        } else {
            setPin("")
        }
    }

    return (
        <div className={styles.gameContainer}>
            <div className={styles.videoPlayer}>
                <span>{HEARTS_PAGE.VIDEO_DESCRIPTION}</span>
                <br />
                <video className={styles.videoContainer} autoPlay>
                    <source src={video} type='video/mp4' />
                </video>
            </div>

            <div className={styles.pinContainer}>
                <label>
                    <span>{HEARTS_PAGE.PIN_MESSAGE}</span>
                    <br />
                    <input
                        name="PIN"
                        value={pin}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button className={styles.submitButton} onClick={checkPin}>{BUTTON_LABELS.SUBMIT}</button>
        </div>
    );
}
