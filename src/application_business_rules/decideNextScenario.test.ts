import { decideNextScenario } from './decideNextScenario';
import { ValentineScenario } from '../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from './ValentineEvent';
import { transitions } from './decideNextScenario';

describe('decideNextScenario', () => {
  const validTransitions = Object.entries(transitions).flatMap(
    ([currentScenario, events]) =>
      Object.entries(events || {}).map(([event, nextScenario]) => [
        currentScenario,
        event,
        nextScenario,
      ])
  );

  it.each(validTransitions)(
    '%s + %s → %s',
    (from, event, to) => {
      if(from != undefined && event != undefined && to!= undefined) {
      const next = decideNextScenario(
        ValentineScenario.fromString(from),
        ValentineEvent.fromString(event)
      );
      
      expect(next.toString()).toBe(to);
      }
    }
  );

  it('throws for invalid transitions', () => {
    const scenarios = ['WELCOME', 'ACCEPTED', 'REJECTED'] as const;
    const events = ['ACCEPT', 'REJECT', 'RESET'] as const;

    const validSet = new Set(validTransitions.map(([s, e]) => `${s}:${e}`));

    for (const s of scenarios) {
      for (const e of events) {
        if (!validSet.has(`${s}:${e}`)) {
          expect(() =>
            decideNextScenario(
              ValentineScenario.fromString(s),
              ValentineEvent.fromString(e)
            )
          ).toThrow();
        }
      }
    }
  });
});
