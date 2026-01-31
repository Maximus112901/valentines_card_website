import { useNavigate } from 'react-router-dom';
import { BUTTON_LABELS, WELCOME_PAGE_MESSAGES } from '../../../enterprise_business_rules/value_objects/constants';

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>{WELCOME_PAGE_MESSAGES.title}</h1>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/yes')}>
          {BUTTON_LABELS.yes}
        </button>

        <button
          onClick={() => navigate('/no')}
          style={{ marginLeft: '1rem' }}
        >
          {BUTTON_LABELS.no}
        </button>
      </div>
    </div>
  );
}
