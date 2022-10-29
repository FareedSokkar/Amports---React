function EnvAttribute(props){

    const {property,value,isEditable} = props;

    return (
        React.createElement("div", {className: "env-attribute"}, 
            React.createElement("input", {
                type: inputType,
                placeHolder: "Attribute",
                // onInput: onValueChange,
                className: "env-attribute-input",
                value: property,
                // disabled: !isEditable
            }), 
            React.createElement("input", {
                type: inputType,
                placeHolder: "Value",
                // onInput: onValueChange,
                className: "env-attribute-input",
                value: value,
                // disabled: !isEditable
            })
        )
    );
}
EnvAttribute.defaultProps = {
    inputType: "text",
    defaultValue: ""
}