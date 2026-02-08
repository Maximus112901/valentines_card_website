import { useAppState } from '../../context/AppStateContext';
import styles from './DiamondsGame.module.css'
import { BUTTON_LABELS, DIAMONDS_PAGE } from '../../constants';
import { useState } from 'react';

type AnswerKey = Extract<keyof typeof DIAMONDS_PAGE, `ANSWER_${number}`>;

export function DiamondsGame() {
    const { state, dispatch } = useAppState();

    // Text Input
    const answers = {
        "ANSWER_1": "",
        "ANSWER_2": "",
        "ANSWER_3": "",
    }
    const [answersState, setAnswersState] = useState<Record<AnswerKey, string>>(answers)

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setAnswersState(prev => ({
            ...prev,
            [name]: value.trim().toLowerCase()
        }));
    };

    // Check if player won
    const checkAnswers = () => {
        let allCorrect = true; 
        const answersStateKeys = Object.keys(answersState) as AnswerKey[]        
        for (const key of answersStateKeys) {
            if (answersState[key] != DIAMONDS_PAGE[key]) {
                // If answer is wrong, erase it, otherwise, keep it
                setAnswersState(prev => ({
                    ...prev,
                    [key]: ''
                }));

                allCorrect = allCorrect && false;
            }
        }

        if (allCorrect){
            dispatch({ suit: "diamonds", payload: true })
        }
    }

    return (
        <div className={styles.gameContainer}>
            <div className={styles.riddleContainer}>
                <span className='message'>{DIAMONDS_PAGE.RIDDLE}</span>
            </div>

            <div className={styles.questionsContainer}>
                <div className={styles.questionAnswerPair}>
                    <label>
                        <span className='message'>{DIAMONDS_PAGE.QUESTION_1}:</span>
                        <br />
                        <input
                            name="ANSWER_1"
                            value={answersState.ANSWER_1}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className={styles.questionAnswerPair}>
                    <label>
                        <span className='message'>{DIAMONDS_PAGE.QUESTION_2}:</span>
                        <br />
                        <input
                            name="ANSWER_2"
                            value={answersState.ANSWER_2}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className={styles.questionAnswerPair}>
                    <label>
                        <span className='message'>{DIAMONDS_PAGE.QUESTION_3}:</span>
                        <br />
                        <input
                            name="ANSWER_3"
                            value={answersState.ANSWER_3}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </div>

            <button className={styles.submitButton} onClick={checkAnswers}>{BUTTON_LABELS.SUBMIT}</button>
        </div>
    );
}
