function EnvButton(props) {
    const { buttonText, isDisabled , setIsEditable ,onClick , isFullRow} = props;

    return (
        React.createElement("div", {
                className: `env-button${isFullRow?" env-button-full-row":""}`,
                onClick: onClick
            }, 
            React.createElement("label", {className: `env-button-label${isDisabled?" env-button-label-disabled":""}`}, isDisabled ? "X" : ">"), 
            React.createElement("button", {
                className: "env-button-button",
                disabled: isDisabled
            }, buttonText)
        )
    );
}

EnvButton.defaultProps ={
    isFullRow: false
}