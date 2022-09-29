import { useState } from "react";
import FormList from "./components/FormList";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])

  const addPost = (obj) => {
    setTodos([...todos, obj])
  }

  const clearList = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center justify-content-md-between gy-4">
            <div className="col-md-6 ">
              <FormList addPost = {addPost} clearList ={clearList}/>
            </div>

            <div className="col-md-6">
              <TodoList todos = {todos}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
