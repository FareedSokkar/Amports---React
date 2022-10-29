function EnvBuildList(props){
    const {innerHtml_build,isEditable,changeCurrentConfig,type} = props;

    function changeBuild(key,value){
        
    }

    function onAddClick(e){

    }

    return (
        React.createElement("div", {className: "env-build-list"},
            React.createElement("h3", {className: "env-build-list-title"}, "Build list"), 
            Object.entries(innerHtml_build).map(
                ([key,list],i) => React.createElement(EnvBuild, {
                    property: key,
                    list: list,
                    isEditable, isEditable
                })
            ),
            React.createElement(EnvButton,{
                onClick: null,
                buttonText: "Add",
                isDisabled: !isEditable
            })
        )
    );
}