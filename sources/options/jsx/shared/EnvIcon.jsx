function EnvIcon(props) {
    const { onClick, icon, text , size , isDisabled} = props;

    return (
        React.createElement("span", {className: `env-icon env-icon-${size}`}, 
            React.createElement("i", {
                className: `env-icon-icon fa fa-${icon}${isDisabled?" env-icon-icon-disabled":""}`,
                onClick: isDisabled?null:onClick
            }, text)
        )
    )
}

EnvIcon.defaultProps ={
    size: IconSize.Normal,
    isDisabled: true
}