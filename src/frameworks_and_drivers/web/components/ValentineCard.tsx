import React from 'react';
import type { PresentedMessage } from '../../../interface_adapters/presenters/ValentinePresenter';

interface ValentineCardProps {
  message: PresentedMessage;
}

export function ValentineCard({ message }: ValentineCardProps) {
  return (
    <div className="valentine-card">
      <p>{message.content}</p>
      <small>Sent at: {message.createdAt}</small>
    </div>
  );
}
