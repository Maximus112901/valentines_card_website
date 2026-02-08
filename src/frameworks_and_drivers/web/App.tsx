import { ValentineScenario } from '../../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from '../../application_business_rules/ValentineEvent';
import { decideNextScenario } from '../../application_business_rules/decideNextScenario';
import { useScenarioRouting } from './hooks/useScenarioRouting';

import { WelcomePage } from './pages/WelcomePage';
import { SuitPage } from './pages/SuitPage';
import { CLUBS_PAGE, DIAMONDS_PAGE, HEARTS_PAGE } from './constants';
import { ClubsGame } from './pages/clubs_page_components/ClubsGame';
import { WinnerPage } from './pages/WinnerPage';
import { DiamondsGame } from './pages/diamonds_page_components/DiamondsGame';

export function App() {
  const [scenario, setScenario] = useScenarioRouting(ValentineScenario.welcome());

  function handleEvent(event: ValentineEvent) {
    try {
      const nextScenario = decideNextScenario(scenario, event);
      setScenario(nextScenario);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page-container">
      {scenario.toString() === 'WELCOME' && <WelcomePage onEvent={handleEvent} />}
      {scenario.toString() === 'CLUBS' && <SuitPage onEvent={handleEvent} suit={CLUBS_PAGE} suit_game={ClubsGame} />}
      {scenario.toString() === 'DIAMONDS' && <SuitPage onEvent={handleEvent} suit={DIAMONDS_PAGE} suit_game={DiamondsGame} />}
      {scenario.toString() === 'HEARTS' && <SuitPage onEvent={handleEvent} suit={HEARTS_PAGE} suit_game={DiamondsGame} />}
      {scenario.toString() === 'WIN' && <WinnerPage />}
    </div>
  );
}
