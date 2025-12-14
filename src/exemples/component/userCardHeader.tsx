export default function UserCardHeader({username}:{username:string}){
    return(
    <div className="userCardHeader">
        <h2>{username.toUpperCase()}</h2>
    </div>
    )
}