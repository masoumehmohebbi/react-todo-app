import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

   /* eslint-disable react/prop-types */
const TodoUpate = ({cancelUpdateHandler , updateData , setUpdateData , updateDataHandler}) => {
   const changeTodoHandler = (e) =>{
    const newEntry = {
        id: updateData.id, 
        title:e.target.value , 
        isCompleted:updateData.isCompleted ? true : false
    }
    setUpdateData(newEntry)
   }
    const inputRef= useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return ( 
        <form action="#" className="flex items-center w-11/12 my-6 -xs:flex-col -xs:gap-y-3 -xs:w-full">
            <input ref={inputRef} 
                value={updateData && updateData.title}  
                onChange={changeTodoHandler}
                type="text" placeholder="Update todo..."
            className="-xs:w-[90%] rounded-md flex-1 p-1 outline-none focus:ring-1 shadow-lg
            focus:ring-primary focus:border-primary border-primary border bg-[#fff7ed]" />
        

            <span>
                <motion.button 
                    whileHover = {{
                        scale: 1.1,
                        boxShadow : '0px 0px 7px #fff7ed',
                        transition: {delay:0.2,  type:'tween', duration:0.5}
                    }}
                    className="bg-primary text-white p-1 px-2 ml-3 rounded-md shadow-lg" 
                    onClick={updateDataHandler}
                    type="submit">Update
                </motion.button>

                <motion.button 
                    whileHover = {{
                        scale: 1.1,
                        boxShadow : '0px 0px 7px #fff7ed',
                        transition: {delay:0.2,  type:'tween', duration:0.5}
                    }}

                    onClick={cancelUpdateHandler} className="bg-primary text-white p-1 px-2 ml-3 rounded-md shadow-lg" type="submit">Cancle</motion.button>
            </span>
        </form>
     );
}

export default TodoUpate;