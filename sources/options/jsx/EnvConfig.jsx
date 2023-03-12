function EnvConfig(props){
    const {type,isEditable,title,list,innerHtml_block,innerHtml_build,isToggled,changeCurrentConfig} = props;
    

    function getConfigPerType(type){
        let configList = [];
        switch(type){
            case EnviromentTypes.Personal:
            case EnviromentTypes.Public:
            case EnviromentTypes.Tools:
                configList.push(React.createElement(EnvInput, {
                    inputName: "Title",
                    defaultValue: title,
                    isEditable: isEditable,
                    changeKey: "title",
                    setInputValue: changeCurrentConfig
                }));
                if(isToggled){
                    configList.push(React.createElement(EnvPathsList,{
                        list: list,
                        isEditable: isEditable,
                        changeCurrentConfig: changeCurrentConfig,
                        type:type
                    }));
                }
                if(type == EnviromentTypes.Tools){
                    // Add Build Tool List
                    configList.push(
                        React.createElement(EnvBuildList,{
                            isEditable: isEditable,
                            innerHtml_build:innerHtml_build,
                            changeCurrentConfig: changeCurrentConfig,
                            type:type
                        })
                    );
                }
            break;
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