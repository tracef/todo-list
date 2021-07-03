import './ToDoList.css'
import { ToDo } from './ToDo'

export const ToDoList = ({ toDoList, completeToDo }) => {
    return (
        <div className="grid grid-cols-1 place-items-center mt-5">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} completeToDo={completeToDo} />
                )
            })}
        </div>
    )
}