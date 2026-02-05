 import { useState } from "react" 


 const Form =() => {
  const  [email , setEmail] = useState ("")
  const [password, setPassword] = useState("")  


  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("enviando formulario")
    console.log({email, password})
    setEmail("")
    setPassword("")
    
  }

  const handleChange = (event) =>{
    if (event.target.name === "password"){
    setPassword(event.target.value)}
    else {
      setEmail(event.target.value)
    }
  }
 

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <input onChange={handleChange} type="email" required placeholder="Ingrese su email" name="email" value={email}/>
        <input onChange={handleChange}  type="password" required placeholder="ingrese su contraseña" name="password" value={password}/>
        <button>Enviar</button>
      </form>
      <p>Email ingresado: {email}</p>
    </>
  )
}

export {Form}
