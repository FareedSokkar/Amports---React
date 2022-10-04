function EnvButton(props) {
    const { buttonText, isDisabled } = props;

    return (
        React.createElement("div", {className: "env-button"}, 
            React.createElement("label", {className: `env-button-label${isDisabled?" env-button-label-disabled":""}`}, isDisabled ? "X" : ">"), 
            React.createElement("button", {
                className: "env-button-button",
                disabled: isDisabled
            }, buttonText)
        )
    );
}