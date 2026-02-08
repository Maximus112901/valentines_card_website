import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';

interface SeeSawSideProps {
  side: 'left' | 'right' | 'bottom';
  onDrop: (suit: string, side: 'left' | 'right' | 'bottom') => void;
  children?: React.ReactNode;
  divClassName? : string
}

export function SeeSawSide({ side, onDrop, children, divClassName }: SeeSawSideProps) {
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
      className={divClassName} >
      {children || (side === 'left' ? 'Left Side' : (side === 'right' ? 'Right Side' : 'Bottom'))}
    </div>
  );
}
