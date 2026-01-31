import { useNavigate } from 'react-router-dom';
import { BUTTON_LABELS, WELCOME_PAGE_MESSAGES } from '../constants';
import { ROUTES } from './routes';

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>{WELCOME_PAGE_MESSAGES.title}</h1>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate(ROUTES.YES)}>
          {BUTTON_LABELS.yes}
        </button>

        <button
          onClick={() => navigate(ROUTES.NO)}
          style={{ marginLeft: '1rem' }}
        >
          {BUTTON_LABELS.no}
        </button>
      </div>
    </div>
  );
}
