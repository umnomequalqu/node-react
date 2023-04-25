import logo from './logo.svg';
import './App.css';
import { TextSpace, Names, Aquele } from './components/styles/styles';
import Titulo from './components/Titulo';
import { useState } from 'react';
function App() {
  const [tarefas,setTarefas] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTarefa=()=>{
    let newTarefa = newTask;
    setTarefas([...tarefas, newTarefa])
    setNewTask('');
  }

  return (
    <div className="App">
    <Titulo/><br/>
    <TextSpace
    value={newTask}
    onChange={(e)=>setNewTask(e.target.value)}
    /><br/><br/>
    <Aquele onClick={addTarefa}>Cadastrar</Aquele>
    <Names>{
      tarefas.map(t=><p key={t}> {t} </p>)
    }</Names>
    </div>
  );
}

export default App;
