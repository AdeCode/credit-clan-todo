import react, { useState } from 'react';
import './App.css';
// import './style/theme.scss'
// import './style/App.scss'
import TodoList from './components/TodoList';

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={`App ${theme}`}>
      <h2>Credit clan TODO</h2>
      <TodoList/>
    </div>
  );
}

export default App;
