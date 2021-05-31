import style from './App.module.scss'
import PlusTaskBtn from "./Components/Button/PlusTaskBtn";


function App() {
  return (
    <div className={style.app}>
      <h1>TODO list</h1>
        <PlusTaskBtn/>
    </div>
  );
}

export default App;
