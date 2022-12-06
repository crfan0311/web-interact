export const getColorObject = (color) => {

    if (typeof color === "string") {
        return {
            type: "color",
            value: color
        }
    }

    if (color.length === 1) {
        return {
            type: "color",
            value: color
        }
    }

    return {
        type: "gradient",
        value: color
    };
};


export const getBgColorStyle = (colors, gradientDir) => {
    const colorObject = getColorObject(colors);
    if(!colorObject)
        return null;

    if(colorObject.type === "color") {
        return {backgroundColor: colorObject.value};
    }
    else if(colorObject.type === "gradient") {
        if(gradientDir)
            return {backgroundImage: `linear-gradient(${gradientDir}, ${colorObject.value.join()})`}
        return {backgroundImage: `linear-gradient(${colorObject.value.join()})`}
    }
};


export const getBgImageStyle = (imgSrc) => {
    return {
        background: `url(${imgSrc}) no-repeat center`,
        backgroundSize: 'cover'
    }
};


export const colorForBgColor = (hexColor) => {
    hexColor = hexColor.replace("#", "");
    const r = parseInt(hexColor.substr(0,2),16);
    const g = parseInt(hexColor.substr(2,2),16);
    const b = parseInt(hexColor.substr(4,2),16);

    return (r < 100 || g < 100 || b < 100) ? 'white' : '#333333';
    // const yiq = ((r*299)+(g*587)+(b*114))/1000;
    // return (yiq >= 128) ? 'black' : 'white';
};

export const getMarginStyle = (input) => {
    let margin = {};
    if(typeof input === "number" || typeof input === "string") {
        margin = typeof input === "number" ? `${input}px` : input;
        return {top: margin, bottom: margin, left: margin, right: margin};
    }
    else if(Array.isArray(input)) {
        if(input.length === 1) {
            margin = (typeof input[0] === "number") ? `${input[0]}px` : input[0];
            return {top: margin, bottom: margin, left: margin, right: margin};
        }
        else if(input.length === 2) {
            const marginX = (typeof input[0] === "number") ? `${input[0]}px` : input[0];
            const marginY = (typeof input[1] === "number") ? `${input[1]}px` : input[1];
            return {top: marginY, bottom: marginY, left: marginX, right: marginX};
        }
        else if(input.length === 3 || input.length === 4) {
            const marginTop = (typeof input[0] === "number") ? `${input[0]}px` : input[0];
            const marginRight = (typeof input[1] === "number") ? `${input[1]}px` : input[1];
            const marginBottom = (typeof input[2] === "number") ? `${input[2]}px` : input[2];
            if(input.length === 3) {
                return {top: marginTop, bottom: marginBottom, left: 0, right: marginRight};
            }
            else {
                const marginLeft = (typeof input[3] === "number") ? `${input[3]}px` : input[3];
                return {top: marginTop, bottom: marginBottom, left: marginLeft, right: marginRight};
            }
        }
    }
    return {};
};
