import React, { useState } from 'react';
import { ValentineCard } from './components/ValentineCard';
import { HeartAnimation } from './components/HeartAnimation';
import { ValentinePresenter } from '../../interface_adapters/presenters/ValentinePresenter';

export function App() {
  const [message, setMessage] = useState({
    content: 'Happy Valentine’s Day! ❤️',
    createdAt: new Date().toLocaleString(),
  });

  const presenter = new ValentinePresenter();
  const presentedMessage = presenter.present(message);

  return (
    <div className="app-container">
      <HeartAnimation />
      <ValentineCard message={presentedMessage} />
    </div>
  );
}
