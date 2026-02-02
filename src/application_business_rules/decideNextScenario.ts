import { ValentineScenario } from '../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from './ValentineEvent';

type ScenarioKey = ReturnType<typeof ValentineScenario.prototype.toString>;
type EventKey = ReturnType<typeof ValentineEvent.prototype.toString>;

export const transitions: Record<ScenarioKey, Partial<Record<EventKey, ScenarioKey>>> = {
  WELCOME: {
    ACCEPT: 'ACCEPTED',
    REJECT: 'ARE_YOU_SURE',
  },
  ACCEPTED: {
    RESET: 'WELCOME',
  },
  ARE_YOU_SURE: {
    ACCEPT: 'ACCEPTED',
    REJECT: 'ARE_YOU_SURE'
  },
  REJECTED: {
    RESET: 'WELCOME',
  }
};

export function decideNextScenario(
  current: ValentineScenario,
  event: ValentineEvent,
  context?: {noPressCount: number}
): ValentineScenario {
  const from = current.toString();
  const by = event.toString();
  
  // special case (noPressCount > 10):
   if (from === 'ARE_YOU_SURE' && by === 'REJECT') {
    if ((context?.noPressCount ?? 0) >= 10) {
      // Override transition to a special scenario after X NO presses
      return ValentineScenario.fromString('REJECTED');
    }
  }

  // normal transitions
  const next = transitions[from]?.[by];

  if (!next) {
    throw new Error(`Invalid transition from ${from} using event ${by}`);
  }

  return ValentineScenario.fromString(next);
}

