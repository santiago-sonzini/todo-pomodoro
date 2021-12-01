import './App.css';

import { Pomodoro } from './components/pomodoro/Pomodoro';

import TodoPages from './components/todos/TodoPages';



function App() {
  return (
    <div className="App">
      
        <Pomodoro/>
        <TodoPages/>
        
      
    </div>
      
  );
}

export default App;
