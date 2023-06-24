import { useRef } from "react";
import { BiSolidCheckCircle, BiSolidPencil, BiSolidTrash} from "react-icons/bi";

const Todo = ({todo, onEdit , onDelete, onUpdate, todos}) => {
    const todoContainer = useRef()
    
    return (  
        <section ref={todoContainer} className="border border-[#f97316] ring-1 ring-[#f97316] flex items-center p-2 justify-between w-[90%] break-all bg-[#fdba74] shadow-lg rounded-md">
            <span className="mr-3 w-6 h-6 text-sm flex items-center justify-center text-[#ffedd5] border-2 border-[#ffedd5] rounded-full">{todos.indexOf(todo) + 1}</span>
            <p className="flex-1"><span className={todo.isCompleted ? 'line-through text-gray-600 text-lg' : " font-bold text-lg"}>{todo.title}</span></p>
            <div className="flex gap-x-4">
                <span 
                    title="Completed / Not Completed"
                    onClick={onEdit}
                    className="cursor-pointer text-lg text-[#15803d]"><BiSolidCheckCircle/>
                </span>

                {todo.isCompleted ? null :
                    (
                        <span 
                            title="Edit"
                            onClick={onUpdate}
                            className=" cursor-pointer text- text-[#4f46e5]"><BiSolidPencil/>
                        </span>
                    )
                }
                
                <span 
                    title="Delete"
                    onClick={onDelete }
                    className="cursor-pointer text-lg text-[#e11d48]"><BiSolidTrash/>
                </span>
            </div>
        </section>
    );
}
 
export default Todo;