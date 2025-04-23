import { useState } from 'react';
import { addToArray } from '../helpers/AddToArray';

export const InputArea = ({ setTodos }) => {
    const [addText, setAddText] = useState('');

    const handleAddTodo = () => {
        addToArray(setTodos, addText);
        setAddText('');
    }

    return(
        <div className="input-area">
            <input 
                type="text" 
                placeholder="TODOを入力" 
                value={addText} 
                onChange={(e) => setAddText(e.target.value)} 
            />
            <button onClick={handleAddTodo}>追加</button>
        </div>
    );
}