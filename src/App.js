import './App.css';
import TaskItem from './components/TaskItem'
import { list } from './data/tasks'

function App() {
  return (
    <div className="container">
      <section className="left-section">
        <h1 className="main-title">
          Pomodoro Tasks
        </h1>
        <ul>
          {list.map((task, index) => {
            return <TaskItem key={index} task={task} />
          })}
        </ul>
      </section>


      <section className="right-section">
        <p>CURRENT TASK</p>
        <h1>Um titulo qualquer</h1>

      </section>
    </div>
  );
}

export default App;
