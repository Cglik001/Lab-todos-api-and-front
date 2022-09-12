import TodoForm from './TodoForm';
import TodosList from './TodosList';
import axios from 'axios';
import {useState, useEffect} from 'react';

const client = axios.create({
   baseURL: process.env.REACT_APP_API_URL + '/todos'
})


const Todos = () => {



  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])
  const [refresh, setRefresh] = useState(true)

  const createTodo = (todo) => {
    client.post('/', todo)
    .then (response => {
      setRefresh(!refresh)


    })
    .catch(error => {
      console.log(error)
    })

  }

  const deleteTodo = id => {
    client.delete(`/${id}`)
      .then(response => {
        setRefresh(!refresh)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const updateTodo = (id, completed) => {
    client.put(`/${id}`, {completed: completed})
      .then(result => {
        setRefresh(!refresh)
      })
  }

  useEffect( () => {
    client.get('/')
        .then((response) => {
          setTodos(response.data)
          console.log(response.data, "response data: Check")
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
  }, [refresh])


  return (
    <div>
      <TodoForm createTodo={createTodo}/>
      {loading && 'Loading ...'}
      {!loading && <TodosList deleteTodo={deleteTodo} updateTodo={updateTodo} todos={todos}/> }
    </div>

  )
}

export default Todos
