import SyntaxHighlighter from 'react-syntax-highlighter';
import  {docco}  from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SimpleComposant(){
    const codeString = `
        let name: string = "Mathis"
    `;
    return(
        <div className="exemples">
            <SyntaxHighlighter language="tsx" style={docco}>
            {codeString}
            </SyntaxHighlighter>
        </div>
    )
}