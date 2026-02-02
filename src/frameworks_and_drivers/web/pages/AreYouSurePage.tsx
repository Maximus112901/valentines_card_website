import { BUTTON_LABELS, ARE_YOU_SURE_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';

interface AreYouSurePageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function AreYouSurePage({ onEvent }: AreYouSurePageProps) {
  return (
    <div className="page-content-container">
      <h1>{ARE_YOU_SURE_PAGE_MESSAGES.title}</h1>
      <p>{ARE_YOU_SURE_PAGE_MESSAGES.message}</p>
      <button onClick={() => onEvent(ValentineEvent.accept())}>{BUTTON_LABELS.yes}</button>
      <button onClick={() => onEvent(ValentineEvent.reject())}>{BUTTON_LABELS.no}</button>
    </div>
  );
}
