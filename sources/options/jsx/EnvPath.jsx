function EnvPath(props) {
    const { index, id, ip, name, path, icon, isEditable } = props;
    return (
        React.createElement("div", {className: "env-path"}, 
            React.createElement("h4", {className: "env-path-header"},`Path ${index}`), 
            React.createElement(EnvInput, {
                inputName: "ID",
                defaultValue: id,
                isEditable: isEditable
            }), 
            React.createElement(EnvSelect, {
                list: [ipTypes.Master, ipTypes.User, ipTypes.ExternalLink],
                listName: "IP Type",
                defaultValue: ip,
                isEditable: isEditable
            }), 
            React.createElement(EnvInput, {
                inputName: "Name",
                defaultValue: name,
                isEditable: isEditable
            }), 
            React.createElement(EnvInput, {
                inputName: "Path",
                defaultValue: path,
                isEditable: isEditable
            }), 
            React.createElement(EnvInput, {
                inputName: "Icon",
                defaultValue: icon,
                isEditable: isEditable
            })
        )
    );
}