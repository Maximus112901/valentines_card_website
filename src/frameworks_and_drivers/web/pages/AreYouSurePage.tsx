import { BUTTON_LABELS, ARE_YOU_SURE_PAGE_MESSAGES } from '../constants';
import { ValentineEvent } from '../../../application_business_rules/ValentineEvent';
import { useAppState } from '../context/AppStateContext';

interface AreYouSurePageProps {
  onEvent: (event: ValentineEvent) => void;
}

export function AreYouSurePage({ onEvent }: AreYouSurePageProps) {
  const { state, dispatch } = useAppState(); 

  function handleAccept() {
    dispatch({ type: 'RESET_NO_PRESS' });  
    onEvent(ValentineEvent.accept());        
  }

  function handleReject() {
    dispatch({ type: 'INCREMENT_NO_PRESS' });  
    onEvent(ValentineEvent.reject());        
  }

  // Manipulate yes button size
  const yesButtonScale = 1 + state.noPressCount * 0.2;
  const yesButtonStyle = {
    transform: `scale(${yesButtonScale})`,
    transition: 'transform 0.3s ease',
  };

  // Manipulate no button size
  const noButtonScale = Math.max(0.1, 1 - state.noPressCount * 0.1);
  const noButtonStyle = {
    transform: `scale(${noButtonScale})`,
    transition: 'transform 0.3s ease',
  };

  return (
    <div className="page-content-container">
      <h1>{ARE_YOU_SURE_PAGE_MESSAGES.title}</h1>
      <p>{ARE_YOU_SURE_PAGE_MESSAGES.message}</p>
      <button onClick={handleAccept} style={yesButtonStyle}>{BUTTON_LABELS.yes}</button>
      <button onClick={handleReject} style={noButtonStyle}>{BUTTON_LABELS.no}</button>
    </div>
  );
}
