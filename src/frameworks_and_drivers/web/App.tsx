import React, { useState } from 'react';
import { ValentineCard } from './components/ValentineCard';
import { HeartAnimation } from './components/HeartAnimation';
import { ValentinePresenter } from '../../interface_adapters/presenters/ValentinePresenter';
import { ValentineMessage } from '../../enterprise_business_rules/entities/ValentineMessage';

export function App() {
  // Create an initial ValentineMessage entity with default content
  const [messageEntity] = useState(() => new ValentineMessage('Happy Valentine’s Day! ❤️'));

  // Use presenter to format message for UI
  const presenter = new ValentinePresenter();
  const presentedMessage = presenter.present(messageEntity);

  return (
    <div className="app-container">
      <HeartAnimation />
      <ValentineCard message={presentedMessage} />
    </div>
  );
}
