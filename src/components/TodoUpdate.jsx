import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

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
            focus:ring-[#f97316] focus:border-[#f97316] border-[#f97316] border bg-[#fff7ed]" />
        

            <span>
                <button 
                    className="bg-[#f97316] text-white p-1 px-2 ml-3 rounded-md shadow-lg" 
                    onClick={updateDataHandler}
                    type="submit">Update</button>
                <button onClick={cancelUpdateHandler} className="bg-[#f97316] text-white p-1 px-2 ml-3 rounded-md shadow-lg" type="submit">Cancle</button>
            </span>
        </form>
     );
}

TodoUpate.propTypes = {
    cancelUpdateHandler: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    setUpdateData: PropTypes.func.isRequired,
    updateDataHandler: PropTypes.func.isRequired
};

export default TodoUpate;