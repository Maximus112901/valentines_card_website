import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

// Define the shape of your app state
export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

interface AppState {
  cards: Record<Suit, boolean>;
  winner: Boolean;
}

// Define the actions your state can handle
type Action =
  | { suit: 'clubs', payload: Boolean }
  | { suit: 'diamonds', payload: Boolean }
  | { suit: 'hearts', payload: Boolean }
  | { suit: 'spades', payload: Boolean }

// Initial state
const initialState: AppState = {
  cards: {
    clubs: false,
    diamonds: false,
    hearts: false,
    spades: false,
  },
  winner: false,
};

// Reducer to handle state changes
function appStateReducer(state: AppState, action: Action): AppState {
  return {
    ...state,
    cards: {
      ...state.cards,
      [action.suit]: action.payload,
    },
  };
}

// Context value type
interface AppStateContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

// Create context
const AppStateContext = createContext<AppStateContextValue | undefined>(undefined);

// Context Provider component
export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to consume the context easily
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
