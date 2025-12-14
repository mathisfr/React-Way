import UserCard from './userCard.tsx';
import SyntaxComponent from '../../componants/syntaxComponent.tsx';
import { SyntaxComponentType } from '../../types/syntaxComponentType.tsx';

export default function SimpleComponent(){

    const userCardText: SyntaxComponentType = {
        title: "Racine",
        content:
        `
            <UserCard username='mathisfr' signature='Je signe MathisFr'>
                <p>Voici ma carte utilisateur !</p>
            </UserCard>
        `
    };

    const userCardComponentText: SyntaxComponentType = {
        title: "Component UserCard",
        content:
        `
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
        `
    }

    const userCardHeaderComponentText: SyntaxComponentType = {
        title:"Component UserCardHeader",
        content:
        `
            export default function UserCardHeader({username}:{username:string}){
                return(
                <div className="userCardHeader">
                    <h2>{username.toUpperCase()}</h2>
                </div>
                )
            }
        `
    }  

    const userCardFooterComponentText: SyntaxComponentType = {
        title: "Component UserCardFooter",
        content:
        `
            export default function UserCardFooter({signature}:{signature:string}){
                return(
                <div className="userCardFooter">
                    <p>"{signature.toLowerCase()}"</p>
                </div>
                )
            }
        `
}

    return(
        <div id='notes-template'>
            <div id='notes-template-box'>
                <div>
                    <h1>Composant</h1>
                    <p>Cette page a pour objectif de démontrer ma maîtrise des composants.</p>
                    <p>Vous aurez également accès au code de ce composant.</p>
                </div>

                <UserCard username='mathisfr' signature='Je signe MathisFr'>
                    <p>Voici ma carte utilisateur !</p>
                </UserCard>

                <div>
                    <h3>Voici le code utilisé</h3>

                    <SyntaxComponent syntaxComponent={userCardText}/>
                    <SyntaxComponent syntaxComponent={userCardComponentText}/>
                    <SyntaxComponent syntaxComponent={userCardHeaderComponentText}/>
                    <SyntaxComponent syntaxComponent={userCardFooterComponentText}/>
                </div>
            </div>
        </div>
    )
}