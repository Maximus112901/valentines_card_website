import { useNavigate } from 'react-router-dom';
import { BUTTON_LABELS, NO_PAGE_MESSAGES } from '../../../enterprise_business_rules/value_objects/constants';
import { ROUTES } from './routes';

export function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>{NO_PAGE_MESSAGES.title}</h1>
      <p>{NO_PAGE_MESSAGES.message}</p>

      <button
        style={{ marginTop: '2rem' }}
        onClick={() => navigate(ROUTES.WELCOME)}
      >
        {BUTTON_LABELS.goBack}
      </button>
    </div>
  );
}
