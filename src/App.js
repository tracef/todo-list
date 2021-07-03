import './App.css';
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList';
import { Form } from './components/Form';

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    retrieveToDoList(localStorage.getItem('toDoList'))
  }, [])

  const retrieveToDoList = (listStr) => {
    if (listStr) {
      const list = JSON.parse(listStr);
      if (list.length > 0) {
        setToDoList([...list]);
      }
    }
  }

  const saveToDoList = (list) => {
    setToDoList([...list])

    if (!list || list.length === 0)
      localStorage.removeItem('toDoList', JSON.stringify(list));
    else
      localStorage.setItem('toDoList', JSON.stringify(list));
  }

  const addToDo = (userInput) => {
    let copy = [...toDoList, { id: toDoList.length + 1, task: userInput, complete: false }]
    saveToDoList([...generateNewIDs(copy)])
  }

  const clearCompleted = () => {
    let copy = [...toDoList.filter(x => !x.complete)]
    saveToDoList([...generateNewIDs(copy)])
  }

  const completeToDo = (id) => {
    saveToDoList([...toDoList.map(x => x.id === Number(id) ? { ...x, complete: !x.complete } : { ...x })]);
  }

  const generateNewIDs = (copy) => {
    for (let i = 0; i < copy.length; i++) {
      copy[i].id = i + 1
    }
    return copy;
  }

  return (
    <div id="App" className="flex-auto justify-center h-screen bg-white dark:bg-gray-800 font-mono">
      <div className="container text-center w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <Header />
        <Form addToDo={addToDo} clearCompleted={clearCompleted} />
        <ToDoList toDoList={toDoList} completeToDo={completeToDo} />
      </div>
    </div>
  );
}

export default App;
