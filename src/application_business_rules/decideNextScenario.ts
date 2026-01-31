import { ValentineScenario } from '../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from './ValentineEvent';

export function decideNextScenario(
  current: ValentineScenario,
  event: ValentineEvent
): ValentineScenario {
  switch (current.toString()) {
    case 'WELCOME':
      switch (event.toString()) {
        case 'ACCEPT':
          return ValentineScenario.accepted();
        case 'REJECT':
          return ValentineScenario.rejected();
        case 'RESET':
          return ValentineScenario.welcome();
        default:
          throw new Error(`Invalid event ${event} in WELCOME state`);
      }

    case 'ACCEPTED':
      switch (event.toString()) {
        case 'RESET':
          return ValentineScenario.welcome();
        default:
          throw new Error(`Invalid event ${event} in ACCEPTED state`);
      }

    case 'REJECTED':
      switch (event.toString()) {
        case 'RESET':
          return ValentineScenario.welcome();
        default:
          throw new Error(`Invalid event ${event} in REJECTED state`);
      }

    default:
      throw new Error(`Unknown scenario ${current}`);
  }
}
