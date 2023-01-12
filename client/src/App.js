import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Firstname,setFirstName]=useState('');
  async function registerUser(event){
    event.preventDefault()
    const response=await fetch('http://localhost:3002/api/register',{
      method:"POST",
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify({
        
        email,
        password,
        Firstname
      }),
    })
    const data=await response.json()
   console.log(data)
  }

  
  return (
    <div>
      <h1> Register</h1>
      <form onSubmit={registerUser}>
        <input value={Firstname} 
        onChange={(e)=>setFirstName(e.target.Firstname)}
        type="text"
        placeholder="Name"/><br/>
        <input value={email} 
        onChange={(e)=>setEmail(e.target.email)}
        type="email"
        placeholder="Email"/><br/>
        <input value={password} 
        onChange={(e)=>setPassword(e.target.password)}
        type="password"
        placeholder="Password"/><br/>
        <input type="submit" value ="Register"/>
      </form>
    </div>)
}

export default App;
