import { BUTTON_LABELS, ARE_YOU_SURE_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import { useAppState } from '../context/AppStateContext';

interface AreYouSurePageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function AreYouSurePage({ onEvent }: AreYouSurePageProps) {
  const { state, dispatch } = useAppState(); 

  function handleReject() {
    dispatch({ type: 'INCREMENT_NO_PRESS' });  
    onEvent(ValentineEvent.reject());        
  }

  return (
    <div className="page-content-container">
      <h1>{ARE_YOU_SURE_PAGE_MESSAGES.title}</h1>
      <p>{ARE_YOU_SURE_PAGE_MESSAGES.message}</p>
      <button onClick={() => onEvent(ValentineEvent.accept())}>{BUTTON_LABELS.yes}</button>
      <button onClick={handleReject}>{BUTTON_LABELS.no} = {state.noPressCount}</button>
    </div>
  );
}
