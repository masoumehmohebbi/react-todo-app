/* eslint-disable react/no-unescaped-entities */
import TodoApp from './components/TodoApp'
import { motion } from 'framer-motion'

function App() {

  return (
    <section className=' flex flex-col items-center bg-[#fff7ed] h-screen w-fullnpm gap-y-8'>
      <motion.h1 
        initial = {{backgroundColor: '#fff7ed', color: '#fff7ed'}}
        animate ={{backgroundColor:'#ffedd5' , color:'#1E293B'}}
        transition = {{delay:0.1 , duration:2}}

        className="font-black  text-2xl text-slate-800 bg-[#ffedd5] w-full text-center py-3">
        Masoume's Todo App
      </motion.h1>
      <TodoApp/>
    </section>
  )
}

export default App
