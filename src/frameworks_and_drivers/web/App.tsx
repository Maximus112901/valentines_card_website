import { HashRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './pages/routes';

import { WelcomePage } from './pages/WelcomePage';
import { YesPage } from './pages/YesPage';
import { NoPage } from './pages/NoPage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.WELCOME} element={<WelcomePage />} />
        <Route path={ROUTES.YES} element={<YesPage />} />
        <Route path={ROUTES.NO} element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}
