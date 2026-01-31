import { ValentineScenario } from '../../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from '../../application_business_rules/ValentineEvent';
import { decideNextScenario } from '../../application_business_rules/decideNextScenario';
import { useScenarioRouting } from './hooks/useScenarioRouting';

import { WelcomePage } from './pages/WelcomePage';
import { YesPage } from './pages/YesPage';
import { NoPage } from './pages/NoPage';

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

  switch (scenario.toString()) {
    case 'WELCOME':
      return <WelcomePage onEvent={handleEvent} />;
    case 'ACCEPTED':
      return <YesPage onEvent={handleEvent} />;
    case 'REJECTED':
      return <NoPage onEvent={handleEvent} />;
    default:
      return <div>Unknown scenario</div>;
  }
}
