export default function TaskItem({ task }) {
    return (
        <li className="task-container">
            <div className="task-text">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-timeCap">
                <p>{task.time}</p>
            </div>
        </li>
    )
}