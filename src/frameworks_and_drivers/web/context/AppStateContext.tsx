import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

// Define the shape of your app state
interface AppState {
  noPressCount: number;
}

// Define the actions your state can handle
type Action =
  | { type: 'INCREMENT_NO_PRESS' }
  | { type: 'RESET_NO_PRESS' };

// Initial state
const initialState: AppState = {
  noPressCount: 0,
};

// Reducer to handle state changes
function appStateReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT_NO_PRESS':
      return { ...state, noPressCount: state.noPressCount + 1 };
    case 'RESET_NO_PRESS':
      return { ...state, noPressCount: 0 };
    default:
      return state;
  }
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
