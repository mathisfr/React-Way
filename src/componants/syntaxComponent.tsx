import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid as theme} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SyntaxComponentType } from '../types/syntaxComponentType';

export default function SyntaxComponent({syntaxComponent}:{syntaxComponent:SyntaxComponentType}){
    return(
        <>
            <h4>{syntaxComponent.title}</h4>
            <div className="exemples">
                <SyntaxHighlighter language="tsx" style={theme}>
                    {syntaxComponent.content}
                </SyntaxHighlighter>
            </div>
        </>
    )
}