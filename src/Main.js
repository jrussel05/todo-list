import React, { useState } from 'react'

function Main() {

    const [taskname, setTaskname] = useState('')
    const [tasklist, setTasklist] = useState([])

    const addTask = () => {
        setTasklist([...tasklist , taskname])
        setTaskname('')

        console.log(taskname)
    }

    const taskListContent = tasklist.map((task , index)=> {
        return(
            <div>
                <p>{task}</p>
                <i class="fa fa-trash" aria-hidden="true" onClick={()=>deleteTask(index)}></i>
            </div>
        )
    })

    const deleteTask = (index) => {
        
        const duparray = [...tasklist]
        duparray.splice(index, 1)
        setTasklist(duparray)
    }

  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Todo List</h1>
                <input type='text' placeholder='Enter Task' className='form-control' value={taskname} onChange={(e)=>{setTaskname(e.target.value)}}></input>
                <button className='btn btn-success' onClick={addTask}>ADD</button>

                <br/>

                {taskListContent}
            </div>
        </div>
    </div>
  )
}

export default Main