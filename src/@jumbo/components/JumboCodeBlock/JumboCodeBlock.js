import React from "react";
import PropTypes from 'prop-types';
import {CopyBlock, a11yDark} from "react-code-blocks";

const JumboCodeBlock = ({text, language}) => {

    return (
        <CopyBlock
            text={text}
            language={language}
            wrapLines
            theme={a11yDark}
            showLineNumbers={false}
        />
    );
};

JumboCodeBlock.defaultProps = {
    language: "jsx"
};

JumboCodeBlock.propTypes = {
    file: PropTypes.string,
    language: PropTypes.string,
};

export default JumboCodeBlock;
