import { useRef } from "react";
import { BiSolidCheckCircle, BiSolidPencil, BiSolidTrash} from "react-icons/bi";
import { motion, useIsPresent} from "framer-motion";
   /* eslint-disable react/prop-types */

const Todo = ({todo, onEdit , onDelete, todos , onUpdate}) => {

    const todoContainer = useRef()

    const isPresent = useIsPresent()
    const animations = {
       
      style: {
        position: isPresent ? 'static' : 'absolute'
      },
        initial: {scale: 0, opacity:0},
        animate: {scale: 1, opacity:1},
        exit: {scale: 0, opacity:0},
        transition: {type: 'spring', stiffness: 500, damping: 50, mass: 1 }
        // transition: {type: 'spring',stiffness:'110', duration:4}

    }

    return (  
        <motion.section {...animations} layout ref={todoContainer} 
            className=' border-2 border-primary ring-2 ring-offset-2 ring-primary flex items-center p-2 justify-between w-[90%] break-all bg-[#fdba74] shadow-lg rounded-md'>
           
            <span className="mr-3 w-6 h-6 text-sm flex items-center justify-center text-[#ffedd5] border-2 border-[#ffedd5] rounded-full">{todos.indexOf(todo) + 1}</span>
            <p className="flex-1"><span className={todo.isCompleted ? 'line-through text-gray-600 text-lg' : " font-bold text-lg"}>{todo.title}</span></p>
            <div className="flex gap-x-4">
                <motion.span 
                    whileHover = {{
                        scale: 1.3,
                        originX:0
                    }}
                    transition = {{
                        type:'spring',
                        stiffness:'300'
                    }}
                    title="Completed / Not Completed"
                    onClick={onEdit}
                    className="cursor-pointer text-lg text-[#15803d]"><BiSolidCheckCircle/>
                </motion.span>

                {todo.isCompleted ? null :
                    (
                        <motion.span 
                            whileHover = {{
                                scale: 1.3,
                                originX:0
                            }}
                            transition = {{
                                type:'spring',
                                stiffness:'300'
                            }}

                            title="Edit"
                            onClick={onUpdate}
                            className=" cursor-pointer text- text-[#4f46e5]"><BiSolidPencil/>
                        </motion.span>
                    )
                }
                
                <motion.span 
                    whileHover = {{
                        scale: 1.3,
                        originX:0
                    }}
                    transition = {{
                        type:'spring',
                        stiffness:'300'
                    }}

                    title="Delete"
                    onClick={onDelete }
                    className="cursor-pointer text-lg text-[#e11d48]"><BiSolidTrash/>
                </motion.span>
            </div>
        </motion.section>
    );
}

export default Todo;