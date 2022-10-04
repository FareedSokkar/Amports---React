function EnvInput(props) {
    const { inputType, inputName, setInputValue, defaultValue, isEditable } = props;

    function onValueChange(e) {
        setInputValue(e.taget.value);
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