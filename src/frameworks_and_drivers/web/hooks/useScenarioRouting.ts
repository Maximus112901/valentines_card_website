import { useState, useEffect } from 'react';
import { ValentineScenario } from '../../../enterprise_business_rules/value_objects/ValentineScenario';
import { ROUTES, ROUTE_TO_SCENARIO } from '../pages/routes';

function getScenarioFromHash(): ValentineScenario {
  const hash = window.location.hash.replace(/^#/, '');
  return ROUTE_TO_SCENARIO[hash] ?? ValentineScenario.welcome();
}

function getHashFromScenario(scenario: ValentineScenario): string {
  return ROUTES[scenario.toString()] || '/';
}

export function useScenarioRouting(initialScenario: ValentineScenario) {
  const [scenario, setScenario] = useState(initialScenario);

  // Update URL hash when scenario changes
  useEffect(() => {
    const newHash = getHashFromScenario(scenario);
    if (window.location.hash !== `#${newHash}`) {
      window.history.pushState(null, '', `#${newHash}`);
    }
  }, [scenario]);

  // Listen for browser back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      const newScenario = getScenarioFromHash();
      setScenario(newScenario);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return [scenario, setScenario] as const;
}
