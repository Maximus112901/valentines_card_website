import { BUTTON_LABELS, WELCOME_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';

interface PageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function WinnerPage({ onEvent }: PageProps) {
  return (
    <div className="page-content-container">
      <h1>{WELCOME_PAGE_MESSAGES.title}</h1>

      <button onClick={() => onEvent(ValentineEvent.accept())}>{BUTTON_LABELS.yes}</button>
      <button onClick={() => onEvent(ValentineEvent.reject())}>{BUTTON_LABELS.no}</button>
    </div>
  );
}
