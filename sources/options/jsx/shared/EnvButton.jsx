function EnvButton(props) {
    const { buttonText, isDisabled , setIsEditable ,onClick , isFullRow, isCancel, onCancel} = props;

    return (
        React.createElement("div", {
                className: `env-button${isFullRow?" env-button-full-row":""}`,
                onClick: isCancel && isDisabled?onCancel:onClick
            }, 
            React.createElement("label", {
                className: `env-button-label${!isCancel && isDisabled?" env-button-label-disabled":""}`
            }, isDisabled ? "X" : ">"), 
            React.createElement("button", {
                className: "env-button-button",
                disabled: !isCancel && isDisabled
            }, isCancel && isDisabled?"Cancel":buttonText)
        )
    );
}

EnvButton.defaultProps ={
    isFullRow: false,
    isCancel: false
}