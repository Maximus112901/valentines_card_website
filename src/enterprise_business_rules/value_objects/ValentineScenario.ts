export type ValentineScenarioType =
  | 'WELCOME'
  | 'ACCEPTED'
  | 'REJECTED';

export class ValentineScenario {
  public readonly value: ValentineScenarioType;

  private constructor(value: ValentineScenarioType) {
    this.value = value;
    Object.freeze(this);
  }

  // Factory methods (explicit, intention-revealing)
  static welcome(): ValentineScenario {
    return new ValentineScenario('WELCOME');
  }

  static accepted(): ValentineScenario {
    return new ValentineScenario('ACCEPTED');
  }

  static rejected(): ValentineScenario {
    return new ValentineScenario('REJECTED');
  }

  equals(other: ValentineScenario): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
