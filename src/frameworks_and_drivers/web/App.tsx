import { ValentineCard } from './components/ValentineCard';
import { HeartAnimation } from './components/HeartAnimation';

export function App() {
  return (
    <div className="app-container">
      <HeartAnimation />
      <ValentineCard message={"Hello World!"} />
    </div>
  );
}
