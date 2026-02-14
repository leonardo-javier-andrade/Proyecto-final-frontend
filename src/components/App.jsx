import { useState } from "react"
import { Aside } from "./Aside"
import { Chat } from "./Chat"


const App =() => {
// Agregando funcion en el main para renderizar los componentes Aside y Chat dentro de un main con clase app, y envolviendo todo en StrictMode para evitar errores en el futuro.

const[activeUser, setActiveUser] = useState(null)


const handleActiveUser = async(id) => {
     try {
    const response = await fetch ( `https://dummyjson.com/users/${id}`) 
     if (!response.ok) {
      alert("No se pudo cargar el usuario:(")
     return
      } 
    const data = await response.json()
    setActiveUser(data)
  } catch (error){
    console.log(error)
  }
}

  return (
     <main className="app">
      <Aside 
      onActiveUser={handleActiveUser}
      mensajePrueba="¡Conexión de props activa!" />
      <Chat activeUser = {activeUser}/>
    </main>)
}

export {App}