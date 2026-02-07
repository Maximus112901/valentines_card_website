// ClubsGame.tsx
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableCard } from './DraggableCard';
import { SeeSawSide } from './SeeSawSide';

interface PageProps {
  onEvent?: (event: any) => void; // adjust as needed
}

export function ClubsGame({ onEvent }: PageProps) {
  const ownedCards = ['♣️', '♦️', '♥️', '♠️']; // example owned suits

  const [leftSideCards, setLeftSideCards] = useState<string[]>([]);
  const [rightSideCards, setRightSideCards] = useState<string[]>([]);

  const handleDrop = (suit: string, side: 'left' | 'right') => {
    // Avoid duplicates on the same side
    if (side === 'left' && leftSideCards.includes(suit)) return;
    if (side === 'right' && rightSideCards.includes(suit)) return;

    // Remove from opposite side if present
    if (side === 'left') {
      setRightSideCards(rightSideCards.filter((card) => card !== suit));
      setLeftSideCards([...leftSideCards, suit]);
    } else {
      setLeftSideCards(leftSideCards.filter((card) => card !== suit));
      setRightSideCards([...rightSideCards, suit]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {/* You can add any other page content here */}

      <div className="game-area" style={{ display: 'flex', gap: 16 }}>
        <SeeSawSide side="left" onDrop={handleDrop}>
          {leftSideCards.map((suit, i) => (
            <div
              key={i}
              style={{
                padding: '8px',
                backgroundColor: '#555',
                borderRadius: '6px',
                margin: '0 4px',
                color: 'white',
                fontSize: '24px',
                userSelect: 'none',
              }}
            >
              {suit}
            </div>
          ))}
        </SeeSawSide>

        <div
          style={{
            width: '200px',
            height: '20px',
            backgroundColor: '#654321',
            alignSelf: 'center',
            borderRadius: '10px',
            transform: 'rotate(5deg)',
            margin: '0 16px',
          }}
        ></div>

        <SeeSawSide side="right" onDrop={handleDrop}>
          {rightSideCards.map((suit, i) => (
            <div
              key={i}
              style={{
                padding: '8px',
                backgroundColor: '#555',
                borderRadius: '6px',
                margin: '0 4px',
                color: 'white',
                fontSize: '24px',
                userSelect: 'none',
              }}
            >
              {suit}
            </div>
          ))}
        </SeeSawSide>
      </div>

      <div style={{ marginTop: 24 }}>
        {ownedCards.map((suit) => (
          <DraggableCard key={suit} suit={suit} />
        ))}
      </div>

      {/* Optional: Add finish button or other UI here */}
      {onEvent && (
        <button
          style={{ marginTop: 24, padding: '8px 16px' }}
          onClick={() => onEvent('finish')} // Replace with actual event
        >
          Finish
        </button>
      )}
    </DndProvider>
  );
}
