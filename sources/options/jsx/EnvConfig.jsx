function EnvConfig(props){
    const {type,isEditable,title,list,innerHtml_block,innerHtml_build} = props;

    function getConfigPerType(type){
        let configList = [];
        switch(type){
            case EnviromentTypes.Personal:
            case EnviromentTypes.Public:
                configList.push(React.createElement(EnvTitle,{title: title,isEditable: isEditable}));
                configList.push(React.createElement(EnvPathsList,{list: list,isEditable: isEditable}));
            break;
            case EnviromentTypes.Tools:
            default:
                configList.push(
                    React.createElement("div",{},"N/A")
                ); 
            break;
        }
        return configList;
    }

    return (
        React.createElement("div",{className:"env-config"},
            ...getConfigPerType(type)
        )
    );
}

EnvConfig.defaultProps ={
    title: "",
    list: [],
    innerHtml_build: {},
    innerHtml_block: {}
}