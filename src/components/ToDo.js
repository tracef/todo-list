export const ToDo = ({ todo, completeToDo }) => {
    const handleClick = (e) => {
        e.preventDefault();
        completeToDo(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} onClick={handleClick} className={todo.complete ? "line-through text-gray-500 dark:text-red-500 cursor-pointer my-1" : "text-black dark:text-white cursor-pointer my-1"}>
            {todo.task}
        </div>
    )
}