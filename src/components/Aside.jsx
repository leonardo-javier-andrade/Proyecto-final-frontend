import { useEffect, useState } from "react"
// import {users} from "../services/mockApi.js"

const Aside = ({onActiveUser , mensajePrueba}) => {
console.log("Validación de props:", mensajePrueba);
const [search, setSearch] = useState("")
const [users, setUsers] = useState([])


const fechingData = async ()=> {
  try {
    const response = await fetch ( "https://dummyjson.com/users")
    console.log(response)
    if (!response.ok) {
      alert("La pagina no se pudo cargar:(")
    return
    }
    const data = await response.json()
    console.log (data.users)
    setUsers(data.users)

  }
  catch (error) {
    console.log(error.message)

  }
}

useEffect(() => {fechingData ()}, [])

const handleChange = (event)=>{
setSearch(event.target.value)}

const filteredUsers = users.filter((user) => {
  const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
  return fullName.includes(search.toLowerCase())
})
console.log (filteredUsers) 

const handleClick =(id)=>{
  onActiveUser(id)
}


  return (
    <aside>
        <h1>Chat de UTN</h1>
        <input className="seach" type="search" placeholder="Buscar usuario" onChange={handleChange}/>
        {filteredUsers.length === 0 && <p>No se encontraron contactos</p>}
        <ul>
            {
            filteredUsers.map((user)=>(
                <li key= {user.id} onClick= {()=>handleClick(user.id)}>
                  <img src={user.image} alt="" />
                  <div>
                    {user.firstName} {user.lastName}
                  
                  <span>{user.address.city}</span>
                  </div>
                </li>
       
            ))
            }
        </ul>

    </aside>
  )
}

export {Aside}