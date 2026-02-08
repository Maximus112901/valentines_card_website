import { useDragLayer } from 'react-dnd'
import { DraggableCard } from './DraggableCard'

interface DragPreviewProps {
  renderItem: (item: any) => React.ReactNode
}

export function DragPreview({ renderItem }: DragPreviewProps) {
  const { isDragging, item, offset } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    offset: monitor.getClientOffset(),
  }))

  if (!isDragging || !offset) return null

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        zIndex: 1000,
      }}
    >
      {renderItem(item)}
    </div>
  )
}
