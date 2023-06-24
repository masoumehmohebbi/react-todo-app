/* eslint-disable react/no-unescaped-entities */
import TodoApp from './components/TodoApp'

function App() {

  return (
    <section className=' flex flex-col items-center bg-[#fff7ed] h-screen w-fullnpm gap-y-8'>
      <h1 className="font-black  text-2xl text-slate-800 bg-[#ffedd5] w-full text-center py-3">
        Masoume's Todo App
      </h1>
      <TodoApp/>
    </section>
  )
}

export default App
