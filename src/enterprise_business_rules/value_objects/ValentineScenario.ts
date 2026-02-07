const VALENTINE_SCENARIOS = [
  'WELCOME',
  'CLUBS',
  'DIAMONDS',
  'HEARTS',
  'SPADES',
  'WINNER',
  'LOSER',
] as const;

export type ValentineScenarioType = typeof VALENTINE_SCENARIOS[number];

function isScenarioType(
  value: string
): value is ValentineScenarioType {
  return (VALENTINE_SCENARIOS as readonly string[]).includes(value);
}

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

  static clubs(): ValentineScenario {
    return new ValentineScenario('CLUBS');
  }

  static diamonds(): ValentineScenario {
    return new ValentineScenario('DIAMONDS');
  }

  static hearts(): ValentineScenario {
    return new ValentineScenario('HEARTS');
  }

  static spades(): ValentineScenario {
    return new ValentineScenario('SPADES');
  }

  static winner(): ValentineScenario {
    return new ValentineScenario('WINNER');
  }

  static loser(): ValentineScenario {
    return new ValentineScenario('LOSER');
  }

  static fromString(value: string): ValentineScenario {
    if (!isScenarioType(value)) {
      throw new Error(`Invalid ValentineScenario: ${value}`);
    }
    return new ValentineScenario(value);
  }

  equals(other: ValentineScenario): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}