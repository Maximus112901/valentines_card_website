import { BUTTON_LABELS, NO_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';

interface NoPageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function NoPage({ onEvent }: NoPageProps) {
  return (
    <div className="page-content-container">
      <h1>{NO_PAGE_MESSAGES.title}</h1>
      <p>{NO_PAGE_MESSAGES.message}</p>
      <button onClick={() => onEvent(ValentineEvent.reset())}>{BUTTON_LABELS.goBack}</button>
    </div>
  );
}
