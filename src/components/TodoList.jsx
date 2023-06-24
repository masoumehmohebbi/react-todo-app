
import Todo from "./Todo"
const TodoList = ( {todos, editHandler, deleteHandler , setUpdateData}) => {

    const renderTodo = () =>{
        if (todos.length === 0) return <p className="text-slate-800 font-bold">No Tasks...</p>
        // todos.sort((a,b) => a.id > b.id ? 1 : -1)
        return todos.map(todo =>{
            return <Todo todo={todo} key={todo.id} 
                todos = {todos}
                onDelete = {() => deleteHandler(todo.id)}
                onUpdate = {() => setUpdateData({
                    id: todo.id,
                    title: todo.title,
                    isCompleted: todo.isCompleted ? true : false
                })}
                onEdit= {()=>editHandler(todo.id)}/>
                
        })
        
    }
    return ( 
        
        renderTodo()
     );
}
 
export default TodoList;