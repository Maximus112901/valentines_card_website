import { ValentineScenario } from "../../../enterprise_business_rules/value_objects/ValentineScenario";

export const ROUTES = {
  [ValentineScenario.welcome().toString()]: '/',
  [ValentineScenario.clubs().toString()]: '/clubs',
  [ValentineScenario.diamonds().toString()]: '/diamonds',
  [ValentineScenario.hearts().toString()]: '/hearts',
  [ValentineScenario.spades().toString()]: '/spades',
  [ValentineScenario.win().toString()]: '/win',
} as const;

// Reverse mapping: route string -> scenario factory
export const ROUTE_TO_SCENARIO: Record<string, ValentineScenario> = {
  '/': ValentineScenario.welcome(),
  '/clubs': ValentineScenario.clubs(),
  '/diamonds': ValentineScenario.diamonds(),
  '/hearts': ValentineScenario.hearts(),
  '/spades': ValentineScenario.spades(),
  '/win': ValentineScenario.win(),
};
