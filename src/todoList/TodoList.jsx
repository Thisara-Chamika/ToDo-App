import React, {useState} from 'react'

function TodoList() {

    const [tasks, setTasks] = useState(["Create a linked post", "Complete task"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }
    
    function moveTaskDown(index){
        
    }

  return (
    <>
    <div className='to-do-list'>
          <h1>To-Do-List</h1>

          <div>
            <input type="text" placeholder='Add a task...'
            value={newTask}
            onChange={handleInputChange}
            />
            <button type="button" className='add-button' onClick={addTask}>
              Add
            </button>
          </div>

          <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span className='text'>{task}</span>
                <button type="button" className='delete-button' onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button type="button" className='move-button' onClick={() => moveTaskUp(index)}>
                  👆
                </button>
                <button type="button" className='move-button' onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </li>
            )}
          </ol>

    </div>

    </>
  )
}

export default TodoList