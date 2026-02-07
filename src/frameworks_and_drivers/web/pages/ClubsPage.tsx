import { BUTTON_LABELS, CLUBS_PAGE } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';

interface PageProps {
    onEvent: (event: ValentineEvent) => void;
}

export function ClubsPage({ onEvent }: PageProps) {
    return (
        <div className="page-content-container">
            <h1>{CLUBS_PAGE.ICON}</h1>
            <h2>{CLUBS_PAGE.JA_TITLE}</h2>
            <h3>{CLUBS_PAGE.EN_TITLE}</h3>
            <p>{CLUBS_PAGE.JA_MESSAGE}</p>
            <p>{CLUBS_PAGE.EN_MESSAGE}</p>

            <div>Game Area</div>

            <button onClick={() => onEvent(ValentineEvent.goBack())}>{BUTTON_LABELS.GO_BACK}</button>
        </div>
    );
}
