import { useNavigate } from 'react-router-dom';
import { BUTTON_LABELS, YES_PAGE_MESSAGES } from '../../../enterprise_business_rules/value_objects/constants';

export function YesPage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>{YES_PAGE_MESSAGES.title}</h1>
      <p>{YES_PAGE_MESSAGES.message}</p>

      <button
        style={{ marginTop: '2rem' }}
        onClick={() => navigate('/')}
      >
        {BUTTON_LABELS.goBack}
      </button>
    </div>
  );
}
