
import {BsFillXCircleFill} from "react-icons/bs";


const OneTodo = (props) => {
  const {
      _id,
       title,
       completed,
       deleteTodo,
       updateTodo
      } = props


  return (
      <li>
          <div className='OneTodoBorders'>
            <div className="form-check" style={{display: "flex", justifyContent: 'space-between'}}>
              <input className="form-check-input" type="checkbox"  onChange={() => updateTodo(_id, !completed )} checked={completed} id={_id}></input>
              <label className={completed ?  "todoCompleted" : ""}  htmlFor="flexCheckDefault"> {title}</label>
              <button className='buttonClean' onClick={() => deleteTodo(_id)}><BsFillXCircleFill className='deleteButton'/></button>
            </div>
          </div>
      </li>
  )
}

export default OneTodo
