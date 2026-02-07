import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

interface SeeSawSideProps {
  side: 'left' | 'right' | 'bottom';
  onDrop: (suit: string, side: 'left' | 'right' | 'bottom') => void;
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
        width: '100px',
        height: '100px',
        outline: '1px solid red',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children || (side === 'left' ? 'Left Side' : (side === 'right' ? 'Right Side' : 'Bottom'))}
    </div>
  );
}
