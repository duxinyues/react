import { UnControlled as CodeMirror } from 'react-codemirror2';
import "./index.scss";
import { observer } from "mobx-react"


function Editor(props) {
    console.log("props", props)
    return <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
        }}
        onChange={(editor, data, value) => {
        }}
    />
}
export default observer(Editor)