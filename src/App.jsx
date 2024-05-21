import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom'
import Write from './companents/Write'
import Read from './companents/Read'
import Update from './companents/Update'
import Delete from './companents/Delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Write/>}></Route>
          <Route path='/Write' element={<Write/>}></Route>
          <Route path='/Read' element={<Read/>}></Route>
          <Route path='/Update' element={<Update/>}></Route>
          <Route path='/Delete' element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
