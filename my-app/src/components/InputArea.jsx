import { useState, useEffect } from 'react';
import { arrayHelper } from '../helpers/processToArray';

export const InputArea = ({ setTodos }) => {
    const [addText, setAddText] = useState('');
    const [isDisabled, setDisabled] = useState(true);

    const { addToArray } = arrayHelper();

    const handleAddTodo = () => {
        if (addText === '') return;
        addToArray(setTodos, addText);
        setAddText('');
    }

    useEffect(() => {
        addText === "" ? setDisabled(true) : setDisabled(false);
    }, [addText])

    return(
        <div className="input-area">
            <input 
                type="text" 
                placeholder="TODOを入力" 
                value={addText} 
                onChange={(e) => setAddText(e.target.value)} 
            />
            <button 
                onClick={handleAddTodo} 
                disabled={isDisabled}
            >
                追加
            </button>
        </div>
    );
}