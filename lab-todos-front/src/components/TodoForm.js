import { useState } from "react";


const TodoForm = (props) => {
  const [title, setTitle] = useState('')
  const {createTodo} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo({title})
    setTitle('')
  }

  return (
    <div className="FormStyle">
      <form onSubmit={handleSubmit}>
        <div className="FormCreate" >
          <div>
              <input className="createInput"
                placeholder = "Add Task"
                type="text"
                name="TaskAdd"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <button className='addBtn' type="submit">Add</button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default TodoForm
