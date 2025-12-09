export default function UserCardFooter({signature}:{signature:string}){
    return(
    <div className="userCardFooter">
        <p>"{signature.toLowerCase()}"</p>
    </div>
    )
}