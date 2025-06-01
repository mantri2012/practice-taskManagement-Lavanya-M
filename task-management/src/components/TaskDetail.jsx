import { useParams } from "react-router-dom";

const TaskDetail = ({ data }) => {

    const { id } = useParams();
    const taskId = parseInt(id);

    const task = data.find(t => t.id === taskId);


    return (
        <div className="detail">
            <h3>Task #{id}</h3>
            <p>Title: {task.name}</p>
            <p>Details: {task.details}</p>
        </div>
    );
}
 


export default TaskDetail;