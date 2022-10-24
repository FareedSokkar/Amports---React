function EnvPath(props) {
    const { index, id, ip, name, protocol, path, icon, icoType , type , isEditable , onChange , onDelete , pathslist} = props;

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

    function getAllowedPathTypes(){
        switch(type){
            case EnviromentTypes.Personal:
                return [ipTypes.Master, ipTypes.User, ipTypes.ExternalLink];
                case EnviromentTypes.Public:
                return [ipTypes.ExternalLink];
            case EnviromentTypes.Tools:
                return [ipTypes.ToolBlock,ipTypes.ToolBuild]
            default:
                return []; 
        }
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
            React.createElement(EnvPathPreview, {
                ip: ip,
                protocol: protocol,
                path: path
            }),
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
                list: getAllowedPathTypes(),
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
            React.createElement(EnvSelect, {
                list: Object.values(ProtocolTypes),
                listName: "Protocol",
                defaultValue: protocol,
                isEditable: isEditable,
                changeKey: "protocol",
                changeOnSelect:valueUpdate
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
            (
                icoType == IconType.Icon?
                React.createElement(EnvSelect, {
                    list: IconsFullList,
                    listName: "Icon",
                    defaultValue: icon,
                    isEditable: isEditable,
                    changeKey: "icon",
                    changeOnSelect: valueUpdate,
                    isIcon: true
                }):
                React.createElement(EnvInput, {
                    inputName: "Icon",
                    defaultValue: icon,
                    isEditable: isEditable,
                    changeKey: "icon",
                    setInputValue:valueUpdate
                })
            )
        )
    );
}

EnvPath.defaultProps ={
    icoType: IconType.Image,
    protocol: ProtocolTypes.HTTPS
}