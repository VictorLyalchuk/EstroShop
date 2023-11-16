import { useReducer } from "react";
import './Task.css'

const initialTasks = [
    {
        id: 1,
        title: "Get Up",
        complete: false,
    },
    {
        id: 2,
        title: "Drink cofee",
        complete: false,
    },
    {
        id: 3,
        title: "Play game",
        complete: false,
    },
    {
        id: 4,
        title: "Go to sleep",
        complete: false,
    },
    {
        id: 5,
        title: "Go to store",
        complete: false,
    },
    {
        id: 6,
        title: "Eat pizza",
        complete: false,
    },
    {
        id: 7,
        title: "Get money",
        complete: false,
    },
]


const TASK_ACTIONS = {
    COMPLETE: "COMPLETE",
    ADD: "ADD",
    REMOVE: "REMOVE"
}

const taskReducer = (state, action) => {
    const { type, id } = action;
    switch (type) {
        case TASK_ACTIONS.COMPLETE:
            return state.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        complete: !task.complete
                    }
                }
                else {
                    return task
                }
            });
        case TASK_ACTIONS.REMOVE:
            return state.filter((task) => task.id !== id);
        default:
            return state;
    }
}

export function Task() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    const handleComplete = (task) => {
        dispatch({ type: TASK_ACTIONS.COMPLETE, id: task.id })
    }
    const handleRemove = (task) => {
        dispatch({ type: TASK_ACTIONS.REMOVE, id: task.id })
    }
    return (
        <>
            <div className="table-container">

                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Task Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={task.complete}
                                            onChange={() => handleComplete(task)}
                                        />
                                    </label>
                                </td>
                                <td>{task.title}</td>
                                <td>
                                    <label>
                                        <input
                                            type="button"
                                            value="REMOVE"
                                            onClick={() => handleRemove(task)}
                                        />
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}