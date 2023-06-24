/* eslint-disable no-unexpected-multiline */
import { useState , useEffect } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoUpate from "./TodoUpdate";
import Swal from 'sweetalert2'

const TodoApp = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")))
    const [updateData , setUpdateData] = useState('')
    const [selectedOption , setSelectedOption] = useState('All')
    const [filteredTodo , setFilteredTodo] = useState([])

    const selectHandler = (e) =>{
        setSelectedOption(e)
        filterTodosHandler(e.value)
    }

    const filterTodosHandler = (status) =>{
        switch (status){
            case "Completed":
                setFilteredTodo(todos.filter(t=> t.isCompleted))
                break;
            case "Uncompleted":
                setFilteredTodo(todos.filter(t=> !t.isCompleted))
                break;
            default:
                setFilteredTodo(todos)
        }
    }
    useEffect(() => {  
        filterTodosHandler(selectedOption.value)
    }, [todos , selectedOption ]);

    useEffect(() => {  
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    const cancelUpdateHandler = () =>{
        setUpdateData('')
    }
    const updateDataHandler = () =>{
        const filteredTodo = [...todos].filter(t => t.id !== updateData.id)
        const updatedTodo = [...filteredTodo , updateData]
        setTodos(updatedTodo)
        setUpdateData('')
    }

    const submitHandler = (inputTodo) =>{
        
        const newTodo = {id:Math.floor(Math.random()*1000), title:inputTodo  , isCompleted:false}

        const index = todos.findIndex(t => t.title === inputTodo)
        if (index) {
            console.log(index);
            
            (index === -1) ? setTodos([...todos,newTodo]) : Swal.fire({
                text : "This Todo Is Already Exist!!",
                confirmButtonText: "OK",
                icon: "warning",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "outline-none bg-[#f97316] text-white px-4 py-2 rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#f97316]",
                    htmlContainer: "text-2xl text-slate-800",

                },
            })
        }
    }
    const editHandler = (id) =>{
        const index = todos.findIndex(t => t.id === id )
        const selectedTodo = {...todos[index]}
        selectedTodo.isCompleted = !selectedTodo.isCompleted
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo
        setTodos(updatedTodos)
    }
    const deleteHandler = (id) =>{
        const filteredTodo = todos.filter(t => t.id !== id)
        setTodos(filteredTodo)
    }
    const updateHandler = (id , newTitle) =>{
        const index = todos.findIndex(t => t.id === id )
        const selectedTodo = {...todos[index]}
        selectedTodo.title = newTitle
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo
        setTodos(updatedTodos)
    }

    return ( 
        <section className=" container md:max-w-[40rem] p-4 
                rounded-md  flex flex-col items-center gap-y-4">
            <NavBar 
            unCompletedTodo = {todos.filter(t=> !t.isCompleted).length}
            selectedOption={selectedOption}
            onChange={selectHandler}/>

            {updateData ? 
           ( <TodoUpate cancelUpdateHandler = {cancelUpdateHandler} 
                setUpdateData = {setUpdateData}
                updateDataHandler = {updateDataHandler}
                updateData = {updateData}/> ) 
           :
         (  <TodoForm submitHandler={submitHandler}
           updateHandler = {updateHandler}/>)
            }

            <TodoList editHandler = {editHandler} 
                deleteHandler = {deleteHandler} 
                todos = {filteredTodo}
                setUpdateData = {setUpdateData}
                />
        </section>
     );
}
 
export default TodoApp;