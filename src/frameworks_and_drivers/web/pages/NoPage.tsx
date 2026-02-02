import { BUTTON_LABELS, NO_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import { useAppState } from '../context/AppStateContext';

interface NoPageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function NoPage({ onEvent }: NoPageProps) {
  const { dispatch } = useAppState(); 

  function handleReset() {
    dispatch({ type: 'RESET_NO_PRESS' });  
    onEvent(ValentineEvent.reset());        
  }

  return (
    <div className="page-content-container">
      <h1>{NO_PAGE_MESSAGES.title}</h1>
      <p>{NO_PAGE_MESSAGES.message}</p>
      <button onClick={handleReset}>{BUTTON_LABELS.goBack}</button>
    </div>
  );
}
