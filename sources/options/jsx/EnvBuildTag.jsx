function EnvBuildTag(props){

    const {tag,attributes,children,text,isEditable} = props;

    return (
        React.createElement("div",{className: "env-build-tag"},
            React.createElement(
                React.createElement(EnvSelect, {
                    list: allowedTagsList,
                    listName: "tag",
                    defaultValue: tag,
                    isEditable: isEditable,
                    // changeKey: "type",
                    // changeOnSelect:onSelectChange
                }),
                React.createElement(EnvInput, {
                    inputName: "text",
                    defaultValue: text,
                    isEditable: isEditable,
                    // changeKey: "id",
                    // setInputValue: onIdChange,
                    // isUUID: true,
                    // generateUUID: onGenerateClick
                }),
                React.createElement(EnvAttributesList, {
                    attributes:attributes,
                    isEditable: isEditable 
                }),
                (
                    children.length>0?
                    children.map(
                        tag=>React.createElement(EnvBuildTag,{
                            ...tag,
                            isEditable: isEditable
                        })
                    ):
                    null
                )
            )
        )
    );
}