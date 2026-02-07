import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

interface SeeSawSideProps {
  side: 'left' | 'right';
  onDrop: (suit: string, side: 'left' | 'right') => void;
  children?: React.ReactNode;
}

export function SeeSawSide({ side, onDrop, children }: SeeSawSideProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: { suit: string }) => onDrop(item.suit, side),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        height: '150px',
        margin: '8px',
        border: '2px dashed white',
        borderRadius: '12px',
        backgroundColor: isOver ? (canDrop ? 'green' : 'red') : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
      }}
    >
      {children || (side === 'left' ? 'Left Side' : 'Right Side')}
    </div>
  );
}
