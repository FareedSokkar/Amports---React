function EnvBuildTag(props){
    return (
        React.createElement("div",{className: "env-build-tag"},
            React.createElement(
                React.createElement(EnvSelect, {
                    list: allowedTagsList,
                    listName: "Tag Type",
                    defaultValue: "",
                    // isEditable: isEditable,
                    // changeKey: "type",
                    // changeOnSelect:onSelectChange
                })
            )
        )
    );
}