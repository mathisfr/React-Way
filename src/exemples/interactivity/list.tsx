import { useState } from "react"
import { User, UserSelected } from "../../types/userType.tsx"
import EditList from "./editList.tsx"

import "./list.css"

export default function List() {
    const [list, setList] = useState<Array<User>>([])
    const [userSelected, setUserSelected] = useState<UserSelected>(
        {
            selected: false,
            user: 
                {
                    id:"",
                    username:"",
                    age:0
                }
        }
            
    )
    function isSelected(id: string): boolean{
        if(!userSelected.selected) return false
        return id === userSelected.user.id ? true : false
    }
    function setUserSelectedWrapper(user: User): void{
        const newUser: User = {...user}
        const newUserSelected: UserSelected = {
            user: newUser,
            selected: true,
        }
        setUserSelected(newUserSelected)
    }
    return (
        <div className="list">
            <table className="list-table">
                <caption>
                        Users List
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Age</th>
                            <th scope="col">Select</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    list.map(user => {
                        return (
                            <tr key={user.id} className={isSelected(user.id) ? "list-selected" : ""}>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    <button onClick={()=>setUserSelectedWrapper(user)}></button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <EditList setList={setList} list={list} userSelected={userSelected} setUserSelected={setUserSelected}/>
        </div>
    )
}