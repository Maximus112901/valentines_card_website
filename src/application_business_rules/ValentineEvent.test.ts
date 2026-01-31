import { ValentineEvent } from './ValentineEvent';

describe('ValentineEvent', () => {
  const events = [
    'ACCEPT',
    'REJECT',
    'RESET',
  ] as const;

  it.each(events)('creates event %s from string', (value) => {
    const event = ValentineEvent.fromString(value);
    expect(event.toString()).toBe(value);
  });

  it('compares events by value equality', () => {
    expect(
      ValentineEvent.accept().equals(ValentineEvent.accept())
    ).toBe(true);

    expect(
      ValentineEvent.accept().equals(ValentineEvent.reject())
    ).toBe(false);

    expect(
      ValentineEvent.reset().equals(ValentineEvent.reset())
    ).toBe(true);
  });

  it('throws for invalid event strings', () => {
    expect(() =>
      ValentineEvent.fromString('INVALID')
    ).toThrow();
  });
});
