function EnvIcon(props) {
    const { onClick, icon, text , size} = props;

    return (
        React.createElement("span", {className: `env-icon env-icon-${size}`}, 
            React.createElement("i", {
                className: `env-icon-icon fa fa-${icon}`,
                onClick: onClick
            }, text)
        )
    )
}

EnvIcon.defaultProps ={
    size: IconSize.Normal
}