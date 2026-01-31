import { ValentineScenario } from '../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from './ValentineEvent';

type ScenarioKey = ReturnType<typeof ValentineScenario.prototype.toString>;
type EventKey = ReturnType<typeof ValentineEvent.prototype.toString>;

const transitions: Record<ScenarioKey, Partial<Record<EventKey, ScenarioKey>>> = {
  WELCOME: {
    ACCEPT: 'ACCEPTED',
    REJECT: 'REJECTED',
  },
  ACCEPTED: {
    RESET: 'WELCOME',
  },
  REJECTED: {
    RESET: 'WELCOME',
  },
};

export function decideNextScenario(
  current: ValentineScenario,
  event: ValentineEvent
): ValentineScenario {
  const from = current.toString();
  const by = event.toString();
  
  const next = transitions[from]?.[by];

  if (!next) {
    throw new Error(`Invalid transition from ${from} using event ${by}`);
  }

  return ValentineScenario.fromString(next);
}

