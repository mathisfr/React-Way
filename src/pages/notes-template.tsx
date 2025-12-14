import Markdown from 'react-markdown'
import { useParams } from "react-router";
import './notes-template.css'

import mdConfiguration from '../notes/1-la-configuration.md'
import mdRepriseCss from '../notes/2-reprise-du-css.md'
import mdComponent from '../notes/3-component.md'

export default function NotesTemplate(){
    let params = parseInt(useParams().noteid);

    const markdowns: string[] = [
        mdConfiguration,
        mdRepriseCss,
        mdComponent
    ]

    return(
        <div id='notes-template'>
            <div id='notes-template-box'>
                <Markdown>{markdowns[params]}</Markdown>
            </div>
        </div>
    )
}