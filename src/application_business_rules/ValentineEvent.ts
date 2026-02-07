const VALENTINE_EVENTS = [
  'WIN',
  'LOSE',
  'GO_BACK',
] as const;

export type ValentineEventType = typeof VALENTINE_EVENTS[number];

  function isEventType(
  value: string
): value is ValentineEventType {
  return (VALENTINE_EVENTS as readonly string[]).includes(value);
}
export class ValentineEvent {
  public readonly type: ValentineEventType;

  private constructor(type: ValentineEventType) {
    this.type = type;
    Object.freeze(this);
  }

  // Factory methods
  static accept(): ValentineEvent {
    return new ValentineEvent('WIN');
  }

  static reject(): ValentineEvent {
    return new ValentineEvent('LOSE');
  }

  static reset(): ValentineEvent {
    return new ValentineEvent('GO_BACK');
  }

  static fromString(value: string): ValentineEvent {
    if (!isEventType(value)) {
      throw new Error(`Invalid ValentineEvent: ${value}`);
    }
    return new ValentineEvent(value);
  }

  equals(other: ValentineEvent): boolean {
    return this.type === other.type;
  }

  toString(): string {
    return this.type;
  }
}
