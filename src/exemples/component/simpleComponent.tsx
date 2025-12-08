import SyntaxHighlighter from 'react-syntax-highlighter';
import  {docco}  from 'react-syntax-highlighter/dist/esm/styles/hljs';
import UserCard from './userCard.tsx';

export default function SimpleComponent(){

    const codeString = `
        let name: string = "Mathis"
    `;
    return(
        <div id='notes-template'>
            <div id='notes-template-box'>
                <div>
                    <h1>Composant</h1>
                    <p>Cette page a pour objectif de démontrer ma maîtrise des composants.</p>
                    <p>Vous aurez également accès au code de ce composant.</p>
                </div>
                <UserCard></UserCard>
            </div>
        </div>
    )

    /*
                <div className="exemples">
                <SyntaxHighlighter language="tsx" style={docco}>
                {codeString}
                </SyntaxHighlighter>
            </div>
    */
}