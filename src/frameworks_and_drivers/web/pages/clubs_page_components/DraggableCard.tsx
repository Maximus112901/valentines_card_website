import React, { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';

interface DraggableCardProps {
  suit: string;
}

export function DraggableCard({ suit }: DraggableCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { suit },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        border: '1px solid white',
        padding: '8px',
        margin: '4px',
        display: 'inline-block',
        userSelect: 'none',
        backgroundColor: '#222',
        color: 'white',
        borderRadius: '8px',
      }}
    >
      {suit}
    </div>
  );
}
