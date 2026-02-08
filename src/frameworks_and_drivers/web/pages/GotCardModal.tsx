import Modal from 'react-modal'
import { BUTTON_LABELS, MODAL_MESSAGES } from '../constants'
import styles from './GotCardModal.module.css'

interface GotCardModalProps {
    isOpen: boolean
    onClose: () => void
    suit: {
        ICON: string
        JA_TITLE: string
        EN_TITLE: string
        JA_MESSAGE: string
        EN_MESSAGE: string
    }
}

export function GotCardModal({
    isOpen,
    onClose,
    suit,
}: GotCardModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={styles.overlay}
            className={styles.modal}
            closeTimeoutMS={200}
        >
            <div className={styles.content}>
                <span className={styles.icon}>{suit.ICON}</span>
                <span>{MODAL_MESSAGES.JA_MESSAGE}</span>
                <span>{MODAL_MESSAGES.EN_MESSAGE}</span>

                <div className={styles.actions}>
                    <button onClick={onClose}>{BUTTON_LABELS.GO_BACK ?? 'Close'}</button>
                </div>
            </div>
        </Modal>
    )
}
