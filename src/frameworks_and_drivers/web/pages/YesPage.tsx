import { BUTTON_LABELS, YES_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';

interface YesPageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function YesPage({ onEvent }: YesPageProps) {
  return (
    <div className="page-content-container">
      <h1>{YES_PAGE_MESSAGES.title}</h1>
      <p>{YES_PAGE_MESSAGES.message}</p>
      <button onClick={() => onEvent(ValentineEvent.reset())}>{BUTTON_LABELS.goBack}</button>
    </div>
  );
}
