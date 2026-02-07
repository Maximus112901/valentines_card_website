import { ValentineScenario } from '../../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from '../../application_business_rules/ValentineEvent';
import { decideNextScenario } from '../../application_business_rules/decideNextScenario';
import { useScenarioRouting } from './hooks/useScenarioRouting';

import { WelcomePage } from './pages/WelcomePage';
import { SuitPage } from './pages/SuitPage';
import { CLUBS_PAGE } from './constants';


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
      {scenario.toString() === 'CLUBS' && <SuitPage suit={CLUBS_PAGE} onEvent={handleEvent} />}
    </div>
  );
}
