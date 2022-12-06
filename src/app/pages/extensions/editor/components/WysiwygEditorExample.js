import React from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/wysiwyg-editor.txt";
import Div from "@jumbo/shared/Div";

let Editor = () => <React.Fragment/>;

const WysiwygEditorExample = () => {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    React.useEffect(() => {
        Editor = require('react-draft-wysiwyg').Editor;
        setEditorState(EditorState.createEmpty());
    }, []);

    return (
        <JumboDemoCard
            title={"WYSIWYG"}
            demoCode={code}
            wrapperSx={{
                pt: 0,
                backgroundColor: 'background.paper'
            }}
        >
            <Div sx={{flex: 1}}>
                <Editor
                    editorStyle={{
                        width: '100%',
                        minHeight: 100,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'lightgray',
                    }}
                    editorState={editorState}
                    onEditorStateChange={editorState => setEditorState(editorState)}
                />
                <textarea
                    style={{width: '100%', height: 200}}
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default WysiwygEditorExample;
