import { Link } from 'react-router-dom';
import globalTaskData from './globalTaskData';

const TaskList = function() {
    return (
      <div className='page-layout'>

        <h1>Tasks:</h1>

        <ul>
          {globalTaskData.map(task => (
            <li key={task.id}>
                <Link to={`/task/${task.id}`}>{task.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TaskList;