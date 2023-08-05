import './App.css';
import Timer from './timer/Timer';

function App() {

  const onTimeStart = ()=>{
    console.log("Таймер запущено")
  }
  const onTimeEnd = ()=>{
    console.log("Час вийшов")
  }
  const onTimePause = ()=>{
    console.log("Таймер зупинено")
  }


  return (
    <div className="App">
      <Timer onTimeEnd={onTimeEnd} onTimePause={onTimePause}
       onTimeStart={onTimeStart} time={15000}  step={1000} />
    </div>
  );
}

export default App;
