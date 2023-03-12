function EnvIcon(props) {
    const { onClick, icon, text , size , isDisabled, isLeft} = props;

    return (
        React.createElement("span", {className: `env-icon${isLeft?"-left":""} env-icon-${size}`}, 
            React.createElement("i", {
                className: `env-icon-icon fa fa-${icon}${isDisabled?" env-icon-icon-disabled":""}`,
                onClick: isDisabled?null:onClick
            }, text)
        )
    )
}

EnvIcon.defaultProps ={
    size: IconSize.Normal,
    isLeft: false,
    isDisabled: true
}