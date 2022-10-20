function EnvBuild(props){
    const {isEditable} = props;

    return(
        React.createElement("div",{className:"env-build"},
            React.createElement(EnvInput, {
                inputName: "Build-key",
                defaultValue: "",
                isEditable: isEditable,
                // changeKey: "id",
                // setInputValue: onIdChange,
                // isUUID: true,
                // generateUUID: onGenerateClick
            }),
            React.createElement(EnvBuildTag,{})
        )
        
    );
}