import { User, UserSelected } from "../../types/userType.tsx"
import { useState } from "react"
export default function EditList({list, setList, userSelected, setUserSelected}:
    {
        setList:  React.Dispatch<React.SetStateAction<User[]>>,
        list:User[],
        userSelected: UserSelected,
        setUserSelected: React.Dispatch<React.SetStateAction<UserSelected>>
    }
){
    const [user, setUser] = useState<User>(
        {
            id: "",
            username: "username",
            age: 0,
        }
    )

    function editUser(event: React.ChangeEvent<HTMLInputElement>){
        event.stopPropagation()
        const newUser : User = {...user};
        const valueNumber: number = Number(event.target.value)
        const value: string | number = isNaN(valueNumber) ? event.target.value : valueNumber
        newUser[event.target.name] = value
        setUser(newUser)
    }

    function editUserSelected(event: React.ChangeEvent<HTMLInputElement>){
        event.stopPropagation()
        const newUser : User = {...userSelected.user};
        const valueNumber: number = Number(event.target.value)
        const value: string | number = isNaN(valueNumber) ? event.target.value : valueNumber
        newUser[event.target.name] = value
        const newUserSelected: UserSelected = {...userSelected, user: newUser}
        setUserSelected(newUserSelected)
    }

    function appendList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.stopPropagation()
        const newUser : User = {...user};
        newUser.id = self.crypto.randomUUID()
        const newList: Array<User> = [...list, newUser]
        setList(newList)
    }

    function updateList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.stopPropagation()
        if (!userSelected.selected) return;
        const indexOfUser: number = list.findIndex((user)=> user.id === userSelected.user.id)
        setList([
                ...list.slice(0, indexOfUser),
                {...userSelected.user},
                ...list.slice(indexOfUser + 1),
        ])
    }

    function deleteList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.stopPropagation()
        if (!userSelected.selected) return;
        const newList: Array<User> = list.filter((user:User) =>{
            return !(user.id == userSelected.user.id);
        })
        setUserSelected(
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
        setList(newList)
    }

    return(
        <div className="list-editor">
            <div className="list-editor-new">
                <input type="text" placeholder={user.username} onChange={(event)=>editUser(event)} name="username" id="list-editor-username" />
                <input type="number" name="age" value={user.age} onChange={(event)=>editUser(event)} id="list-editor-age" />
                <button onClick={(event)=>{appendList(event)}}>Add</button>
            </div>
            {userSelected.selected &&
                <div className="list-editor-selected">
                    <input type="text" value={userSelected.user.username} onChange={(event)=>editUserSelected(event)} name="username" id="list-editor-username-selected" />
                    <input type="number" value={userSelected.user.age} name="age" onChange={(event)=>editUserSelected(event)} id="list-editor-age-selected" />
                    <button onClick={(event)=>{updateList(event)}}>Update</button>
                    <button onClick={(event)=>{deleteList(event)}}>Delete</button>
                </div>
            }
        </div>
    )
}