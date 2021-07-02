import './App.css';
import { DarkMode } from './components/DarkMode';

function App() {
  return (
    <div id="App" className="flex-auto justify-center h-screen bg-white dark:bg-gray-800 font-mono">
      <div className="container text-center w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <div className="grid grid-cols-3 place-items-center py-5">
          <div></div>
          <div className="place-self-center flex items-center text-black dark:text-white">todo list</div>
          <div className="place-self-stretch ml-auto flex items-center">
            <DarkMode/>
          </div>
        </div>
        <textarea className="mt-5 p-1 w-full border border-gray-800 resize-none rounded-sm" type="text" placeholder="enter a task" rows="3"/>
        <button className="mt-1 bg-red-500 hover:bg-red-600 dark:bg-green-700 dark:hover:bg-green-600 p-1 text-white rounded-sm float-right" type="button">+ add todo</button>
      </div>

    </div>
  );
}

export default App;
