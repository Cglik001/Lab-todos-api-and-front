import OneTodo from './OneTodo'

const  TodosList = (props) => {
  const {todos, deleteTodo, updateTodo} = props




     return (

            <>
              <div style={{marginTop: "80px", overflow: "scroll", height: "80vh" }} className="list-container">
                <ul className="listofTodos">
                        { todos.map ( todo => {
                            return  (
                                <OneTodo
                                  key={todo._id}
                                  _id={todo._id}
                                  title={todo.title}
                                  completed={todo.completed}
                                  deleteTodo={deleteTodo}
                                  updateTodo={updateTodo}
                                />
                            )
            })

            }

                </ul>
              </div>
            </>
      )

  }



export default TodosList



/*


                                 <div className="form-check" style={{display: "flex", justifyContent: 'space-between'}}>
                                    <input className="form-check-input" type="checkbox"  onChange={(e) => setCompleteClicked(e.target.value)} value={false} id={todo._id}></input>
                                    <label className={completeClicked ?  "todoClicked" : "form-check-label" } htmlFor="flexCheckDefault"> {todo.title}</label>
                                    <button onClick={(handleDelete(todo._id))}>Delete</button>
                                  </div>




*/
