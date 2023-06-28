import Select from 'react-select';
import { motion } from 'framer-motion';

const options = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Uncompleted', label: 'Uncompleted' },
];
   /* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const NavBar = ({selectedOption , onChange , unCompletedTodo}) => {

    const selectStyles = {
        control: (base) => ({
          ...base,
          width:'13rem',
          borderRadius: '8px',
          border: '2px solid #fdba74 !important',
          boxShadow: 'none',
          '&:focus': {
              border: '0 !important',
             
          },
      }),
      multiValue: (base) => ({
          ...base,
          backgroundColor: '#fed7aa !important',
          color: 'white',
          
          '&:hover':{
            backgroundColor:'#fed7aa !important',
          }
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#fed7aa" : "white",
        color: state.isFocused ? "#111827" : "#374151",
        "&:hover": {
          backgroundColor: "#fed7aa",
        },
      }),
    }
    if (!unCompletedTodo) return <motion.nav 
                                    initial = {{x: '-50px'}}
                                    animate = {{x: '0'}}
                                    transition = {{ duration: 1 , type:'spring' , stiffness:120}}

                                    className="text-slate-800 font-bold text-xl drop-shadow-lg mt-6">
                                      Set your Today's Todo!
                                  </motion.nav>

    return ( 
       <header className='flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row items-center sm:items-start text-sm sm:text-base justify-between w-11/12'>
            <motion.div 
                
                initial = {{y: '50px'}}
                animate = {{y: '0'}}
                transition = {{ duration: 0.9}}

                className='flex gap-x-2 flex-1 items-center'>
                <span className='w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-slate-800'>{unCompletedTodo}</span>
                <span className='text-slate-800 text-sm font-bold'>Todos are not completed!</span>
            </motion.div>
            <Select
                styles={selectStyles}
                value={selectedOption}
                onChange={onChange}
                options={options}
                classNamePrefix="select"
            />
       </header>
        
     );
}

export default NavBar;