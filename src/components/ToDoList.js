import './ToDoList.css'
import { ToDo } from './ToDo'

export const ToDoList = ({ toDoList, completeToDo }) => {
    return (
        <div className="grid grid-cols-1 place-items-center mt-5 print">
            {toDoList.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} completeToDo={completeToDo} />
                )
            })}
        </div>
    )
}