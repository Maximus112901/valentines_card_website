import { ValentineScenario } from "../../../enterprise_business_rules/value_objects/ValentineScenario";

export const ROUTES = {
  [ValentineScenario.welcome().toString()]: '/',
  [ValentineScenario.accepted().toString()]: '/yes',
  [ValentineScenario.areYouSure().toString()]: '/sure',
  [ValentineScenario.rejected().toString()]: '/no',
} as const;

// Reverse mapping: route string -> scenario factory
export const ROUTE_TO_SCENARIO: Record<string, ValentineScenario> = {
  '/': ValentineScenario.welcome(),
  '/yes': ValentineScenario.accepted(),
  '/sure': ValentineScenario.areYouSure(),
  '/no': ValentineScenario.rejected(),
};
