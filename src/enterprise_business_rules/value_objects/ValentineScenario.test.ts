import { ValentineScenario } from './ValentineScenario';

describe('ValentineScenario', () => {
  const scenarios = [
    'WELCOME',
    'ACCEPTED',
    'REJECTED',
  ] as const;

  it.each(scenarios)('creates scenario %s from string', (value) => {
    const scenario = ValentineScenario.fromString(value);
    expect(scenario.toString()).toBe(value);
  });

  it('compares scenarios by value equality', () => {
    expect(
      ValentineScenario.welcome().equals(ValentineScenario.welcome())
    ).toBe(true);

    expect(
      ValentineScenario.welcome().equals(ValentineScenario.accepted())
    ).toBe(false);

    expect(
      ValentineScenario.welcome().equals(ValentineScenario.rejected())
    ).toBe(false);
  });

  it('throws for invalid scenario strings', () => {
    expect(() =>
      ValentineScenario.fromString('INVALID')
    ).toThrow();
  });
});
