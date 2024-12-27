import { useState } from 'react'
import Todo from './components/Home/Todo'
//importing mobile nav
import HeadNav from './components/navigation/HeadNav'
//import the head nav 
import MobileNav from './components/navigation/mobileNav'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeadNav></HeadNav>
      <Todo></Todo>
      <MobileNav></MobileNav>

    </>
  )
}

export default App
