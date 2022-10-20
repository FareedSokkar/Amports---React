function EnvAttribute(props){
    return (
        React.createElement("div", {className: "env-attribute"}, 
            React.createElement("input", {
                type: inputType,
                placeHolder: "Attribute",
                // onInput: onValueChange,
                className: "env-attribute-input",
                value: defaultValue,
                // disabled: !isEditable
            }), 
            React.createElement("input", {
                type: inputType,
                placeHolder: "Value",
                // onInput: onValueChange,
                className: "env-attribute-input",
                value: defaultValue,
                // disabled: !isEditable
            })
        )
    );
}
EnvAttribute.defaultProps = {
    inputType: "text",
    defaultValue: ""
}