import "./userCard.css"
import UserCardHeader from "./userCardHeader.tsx"
import UserCardFooter from "./userCardFooter.tsx"
import { JSX } from "react"

export default function UserCard({children, username, signature}:{
    children : JSX.Element,
    username : string,
    signature: string
}){
    return (
        <div className="userCard">
            <UserCardHeader username={username}/>
            <p className="userCardContent">{children}</p>
            <UserCardFooter signature={signature}/>
        </div>
    )
}