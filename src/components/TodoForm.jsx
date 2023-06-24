import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

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
                    confirmButton: "outline-none bg-[#f97316] text-white px-4 py-2 rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#f97316]",
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
            focus:ring-[#f97316] focus:border-[#f97316] border-[#f97316] border bg-[#fff7ed]" />
        
            <button className="bg-[#f97316] text-white p-1 px-2 ml-3 rounded-md shadow-lg" type="submit">Add Task</button>
          
        </form>
     );
}

export default TodoForm;