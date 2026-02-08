import { DndProvider } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import { useAppState } from '../../context/AppStateContext';

export function DiamondsGame() {
    const { state, dispatch } = useAppState();

    return (
        <DndProvider options={HTML5toTouch}>
            <h1>Diamonds Game</h1>
        </DndProvider>
    );
}
