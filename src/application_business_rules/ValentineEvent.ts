export type ValentineEventType =
  | 'ACCEPT'
  | 'REJECT'
  | 'RESET';

export class ValentineEvent {
  public readonly type: ValentineEventType;

  private constructor(type: ValentineEventType) {
    this.type = type;
    Object.freeze(this);
  }

  // Factory methods
  static accept(): ValentineEvent {
    return new ValentineEvent('ACCEPT');
  }

  static reject(): ValentineEvent {
    return new ValentineEvent('REJECT');
  }

  static reset(): ValentineEvent {
    return new ValentineEvent('RESET');
  }

  equals(other: ValentineEvent): boolean {
    return this.type === other.type;
  }

  toString(): string {
    return this.type;
  }
}
