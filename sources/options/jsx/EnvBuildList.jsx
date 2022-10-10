function EnvBuildList(props){
    const {list,isEditable} = props;
    return (
        React.createElement("div", {className: "env-build-list"},
            React.createElement("h3", {className: "env-build-list-title"}, "Build list"), 
            list.map(item => React.createElement(EnvBuild, item)),
            React.createElement(EnvButton,{
                onClick: null,
                buttonText: "Add",
                isDisabled: !isEditable
            })
        )
    );
}