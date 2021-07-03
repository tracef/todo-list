import { useState } from 'react'

export const Form = ({ addToDo, clearCompleted }) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = () => {
        if (userInput !== '') {
            addToDo(userInput)
            setUserInput('');
        }
    }

    const handleKeyUp = (e) => {
        e.preventDefault();
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleClear = () => {
        clearCompleted();
    }

    return (
        <div className="grid grid-cols-3 no-print">
            <div className="col-span-3">
                <textarea value={userInput} onChange={handleChange} onKeyUp={handleKeyUp} className="p-1 w-full border border-gray-800 resize-none rounded-sm focus:outline-none" type="text" placeholder="enter a task" rows="3" />
            </div>
            <div className="col-span-1 col-start-1">
                <button onClick={handleClear} className="mt-1 bg-red-500 hover:bg-red-600 p-1 text-white rounded-sm float-left" type="button">x clear</button>
            </div>
            <div className="col-start-3 col-span-1">
                <button onClick={handleSubmit} className="mt-1 bg-green-500 hover:bg-green-600 p-1 text-white rounded-sm float-right w-50" type="button">+ add</button>
            </div>
        </div>
    )
}