import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const TodoForm = (props) => {
    const [input , setInput] = useState("")

    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const changeHandler = (e) =>{
        setInput(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault();
        if (!input) {
            Swal.fire({
                text : "Enter Todo Please!",
                confirmButtonText: "OK",
                
                buttonsStyling: false,
                customClass: {
                    confirmButton: "outline-none bg-primary text-white px-4 py-2 rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-primary",
                    htmlContainer: "text-2xl text-slate-800"

                },
            })
            return
        }
        // eslint-disable-next-line react/prop-types
        props.submitHandler(input)
        setInput("")

    }
    return ( 
        <form onSubmit={submitForm} action="#" className=" flex -xs:flex-col -xs:gap-y-3 -xs:w-full items-center w-11/12 my-6">
            <input ref={inputRef} value={input} onChange={changeHandler} type="text" placeholder="Add new todo..." 
            className="-xs:w-[90%] rounded-md flex-1 p-1 outline-none focus:ring-1 shadow-lg
            focus:ring-primary focus:border-primary border-primary border bg-[#fff7ed]" />
        
            <motion.button 
                whileHover = {{
                    scale: 1.1,
                    boxShadow : '0px 0px 7px #fff7ed',
                    transition: {delay:0.2,  type:'tween', duration:0.5}
                }}
                
                className="bg-primary text-white p-1 px-2 ml-3 rounded-md shadow-lg" type="submit">
                Add Task
            </motion.button>
          
        </form>
     );
}

export default TodoForm;