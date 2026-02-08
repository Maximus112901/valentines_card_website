import React, { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';

interface DraggableCardProps {
  suit: string;
  divClassName: string;
}

export function DraggableCard({ suit, divClassName }: DraggableCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'CARD',
    item: { suit },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref.current)
    }

    preview(null)
  }, [drag, preview])

  return (
    <div
      ref={ref}
      className={divClassName}
    >
      {suit}
    </div>
  );
}
