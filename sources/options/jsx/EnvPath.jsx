function EnvPath(props) {
    const { index, id, ip, name, path, icon, isEditable , onChange , pathslist} = props;

    function valueUpdate(key,value){
        let obj = Object.assign({},pathslist);
        obj[key]=value;
        onChange(index,obj);
    }

    return (
        React.createElement("div", {className: "env-path"}, 
            React.createElement("h4", {className: "env-path-header"},`Path ${index}`), 
            React.createElement(EnvInput, {
                inputName: "ID",
                defaultValue: id,
                isEditable: isEditable,
                changeKey: "id",
                setInputValue:valueUpdate
            }), 
            React.createElement(EnvSelect, {
                list: [ipTypes.Master, ipTypes.User, ipTypes.ExternalLink],
                listName: "IP Type",
                defaultValue: ip,
                isEditable: isEditable,
                changeKey: "ip",
                setSelectedType:valueUpdate
            }), 
            React.createElement(EnvInput, {
                inputName: "Name",
                defaultValue: name,
                isEditable: isEditable,
                changeKey: "name",
                setInputValue:valueUpdate
            }), 
            React.createElement(EnvInput, {
                inputName: "Path",
                defaultValue: path,
                isEditable: isEditable,
                changeKey: "path",
                setInputValue:valueUpdate
            }), 
            React.createElement(EnvInput, {
                inputName: "Icon",
                defaultValue: icon,
                isEditable: isEditable,
                changeKey: "icon",
                setInputValue:valueUpdate
            })
        )
    );
}