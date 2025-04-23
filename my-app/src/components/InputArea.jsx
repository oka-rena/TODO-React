import { useState } from 'react';
import { arrayHelper } from '../helpers/processToArray';

export const InputArea = ({ setTodos }) => {
    const [addText, setAddText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const { addToArray } = arrayHelper();

    const handleChangeText = (value) => {
        setAddText(value);
        value === '' ? setIsDisabled(true) : setIsDisabled(false);
    }

    const handleAddTodo = () => {
        if (addText === '') return;
        addToArray(setTodos, addText);
        setAddText('');
    }

    return(
        <div className="input-area">
            <input 
                type="text" 
                placeholder="TODOを入力" 
                value={addText} 
                onChange={(e) => handleChangeText(e.target.value)} 
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