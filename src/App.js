import './App.css';
import TaskItem from './components/TaskItem'
import { list } from './data/tasks'

function App() {

  function formatTimeLeft(time) {

    const minutes = Math.floor(time / 60)

    let seconds = time % 60

    if (seconds < 10) {

      seconds = `0${seconds}`

      // the output is MM:SS format
      return `${minutes}:${seconds}`
    }
  }

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

        <div className="info-container">
          <p>CURRENT TASK</p>
          <h1>Um titulo qualquer</h1>
          <div className="timer">
            <div className="base-timer">
              <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                  <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                </g>
              </svg>
              <span id="base-timer-label" className="base-timer__inside-text">
                {/* ${formatTime(timeLeft)} */}
                <p className="base-timer__inside-label"><b>06:30</b></p>
                <p className="base-timer__inside-description">6 of 10 sessions</p>
              </span>
            </div>
          </div>
          <p>Stay focused for 25 minutes</p>
        </div>
        <div className="buttons-container">

          <div className="">

          </div>
          {/* <svg className="" viewBox="0 0 100 100">
            <g className="button-rewind">
              <circle className="" cx="10" cy="10" r="45" />
            </g>
            <g className="button-rewind">
              <circle className="" cx="10" cy="10" r="45" />
            </g>
          </svg> */}

        </div>

      </section>
    </div>
  );
}

export default App;
