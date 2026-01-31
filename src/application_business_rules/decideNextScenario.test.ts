import { decideNextScenario } from './decideNextScenario';
import { ValentineScenario } from '../enterprise_business_rules/value_objects/ValentineScenario';
import { ValentineEvent } from './ValentineEvent';

describe('decideNextScenario', () => {
  const validTransitions = [
    ['WELCOME', 'ACCEPT', 'ACCEPTED'],
    ['WELCOME', 'REJECT', 'REJECTED'],
    ['ACCEPTED', 'RESET', 'WELCOME'],
    ['REJECTED', 'RESET', 'WELCOME'],
  ] as const;

  it.each(validTransitions)(
    '%s + %s → %s',
    (from, event, to) => {
      const next = decideNextScenario(
        ValentineScenario.fromString(from),
        ValentineEvent.fromString(event)
      );

      expect(next.toString()).toBe(to);
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

  it('test', () => {
    const current = ValentineScenario.fromString('nonExistentScenario');
    const event = ValentineEvent.fromString('someEvent');

    // Assuming transitions is imported or accessible and you can mock it
    // Otherwise, you may need to mock the module or redefine transitions here

    expect(() => {
      decideNextScenario(current, event);
    }).toThrow();
  })

});
