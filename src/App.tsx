import './global.css'
import style from './App.module.css'
import {Header} from "./Components/Header.tsx";
import {CreateTaskForm} from "./Components/CreateTaskForm.tsx";

function App() {

  return (
    <div>
      <Header />

      <div className={style.container}>
        <CreateTaskForm />

        <p>task list</p>
      </div>
    </div>
  )
}

export default App
