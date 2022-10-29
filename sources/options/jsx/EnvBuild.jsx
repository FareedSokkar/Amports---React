function EnvBuild(props){
    const {property,list,isEditable} = props;

    return(
        React.createElement("div",{className:"env-build"},
            React.createElement(EnvInput, {
                inputName: "Build-key",
                defaultValue: property,
                isEditable: isEditable,
                // changeKey: "id",
                // setInputValue: onIdChange,
                // isUUID: true,
                // generateUUID: onGenerateClick
            }),
            list.map(
                tag=>React.createElement(EnvBuildTag,{
                    ...tag,
                    isEditable: isEditable
                })
            )
        )
        
    );
}