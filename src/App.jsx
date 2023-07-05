import { useState, useContext } from 'react'
import { UserContext } from './context/userContext';
import Head from './components/Head/Head'
import Form from './components/Form/Form'
import Card from './components/Card/Card'
import './App.css'

function App() {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    url: '',
    age: ''
  })
  
  const updateUserData = (newUserData)=> {
    setUserData(newUserData)
  }

  const data = {
    userData,
    updateUserData 
  }

  return (
    <>
      <header>
        <UserContext.Provider value={data}>
          <Head />
        </UserContext.Provider>
      </header>
      <main>
        <Form updateUserData={updateUserData}/>
        <Card userData={userData}/>
      </main>
    </>
  )
}

export default App;
