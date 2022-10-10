function EnvPath(props) {
    const { index, id, ip, name, path, icon, icoType , isEditable , onChange , onDelete , pathslist} = props;

    function onDeletePath(e){
        onDelete(pathslist.filter((el,i)=>i!==index));
    }

    function valueUpdate(key,value){
        let obj = Object.assign({},pathslist[index]);
        obj[key]=value;
        onChange(index,obj);
    }

    function generateUUIDV4(){
        return uuid.v4()
    }

    function onGenerateClick(e){
        valueUpdate("id",generateUUIDV4());
    }

    return (
        React.createElement("div", {className: "env-path"}, 
            React.createElement(EnvIcon,{
                onClick: onDeletePath, 
                icon: IconsFontAwesome.Trash,
                size: IconSize.Small,
                isDisabled: !isEditable
            }),
            React.createElement("h4", {className: "env-path-header"},`Path ${index}`), 
            React.createElement(EnvInput, {
                inputName: "ID",
                defaultValue: id,
                isEditable: isEditable,
                changeKey: "id",
                setInputValue:valueUpdate,
                isUUID: true,
                generateUUID: onGenerateClick
            }), 
            React.createElement(EnvSelect, {
                list: [ipTypes.Master, ipTypes.User, ipTypes.ExternalLink],
                listName: "IP Type",
                defaultValue: ip,
                isEditable: isEditable,
                changeKey: "ip",
                changeOnSelect:valueUpdate
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
            React.createElement(EnvSelect, {
                list: Object.values(IconType),
                listName: "Icon Type",
                defaultValue: icoType,
                isEditable: isEditable,
                changeKey: "icoType",
                changeOnSelect: valueUpdate,
                isPleaseSelect: false
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

EnvPath.defaultProps ={
    icoType: IconType.Image
}