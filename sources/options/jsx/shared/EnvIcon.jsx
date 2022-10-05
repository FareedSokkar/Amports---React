function EnvIcon(props) {
    const { onClick, icon, text } = props;

    return (
        React.createElement("span", {className: "env-icon"}, 
            React.createElement("i", {
                className: `env-icon-icon fa fa-${icon}`,
                onClick: onClick
            }, text)
        )
    )
}