function EnvInput(props) {
    const { inputType, inputName, setInputValue, changeKey, defaultValue, isEditable } = props;

    function onValueChange(e) {
        setInputValue(changeKey,e.target.value);
    }

    return (
        React.createElement("div", {className: "env-input"}, 
            React.createElement("label", {className: "env-input-label"}, inputName), 
            React.createElement("input", {
                type: inputType,
                onInput: onValueChange,
                className: "env-input-input",
                value: defaultValue,
                disabled: !isEditable
            })
        )
    );
}

EnvInput.defaultProps = {
    inputType: "text",
    defaultValue: ""
}