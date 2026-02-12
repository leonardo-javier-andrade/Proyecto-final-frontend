import { useEffect, useState } from "react"
// import {users} from "../services/mockApi.js"

const Aside = () => {

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

const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(search.toLocaleLowerCase()) || user.lastName.toLowerCase().includes(search.toLocaleLowerCase()))
console.log (filteredUsers) 




  return (
    <aside>
        <h1>Chat de UTN</h1>
        <input className="seach" type="search" placeholder="Buscar usuario" onChange={handleChange}/>
        {filteredUsers.length === 0 && <p>No se encontraron contactos</p>}
        <ul>
            {
            filteredUsers.map((user)=>(
                <li key= {user.id}>
                  <img src={user.image} alt="" />
                  <div>
                    {user.firstName} {user.lastName}
                  
                  <span>{user.address.country}</span>
                  </div>
                </li>
       
            ))
            }
        </ul>

    </aside>
  )
}

export {Aside}