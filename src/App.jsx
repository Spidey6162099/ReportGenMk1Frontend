import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import QueryForm from './components/QueryForm'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div class="flex flex-col align-stretch bg-gray-700 gap-5 min-h-full">
 
      <Nav></Nav>
      <QueryForm></QueryForm>
       <ToastContainer />
      </div>
      
 
  )
}

export default App
