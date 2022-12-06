import React from 'react';
import {CKEditor} from "ckeditor4-react";

const textContent =
    '<h2>Awesome Rich Content</h2>\n' +
    '<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n' +
    '\n' +
    '<ul>\n' +
    '        <li>ullamcorper ligula</li>\n' +
    '        <li>Duis vel neque</li>\n' +
    '</ul>\n' +
    '\n' +
    '<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n';
;

const CkEditorExample = () => {
    return (
        <CKEditor
            initData={textContent}
            config={{
                contentsCss: [`${process.env.PUBLIC_URL}/fonts/noir-pro/styles.css`,
                    `${process.env.PUBLIC_URL}/vendors/ck-editor/style.css`],
            }}
        />
    );
};

export default CkEditorExample;
