function EnvJSONEditor(props) {
    const {dataList} = props;

    React.useEffect(
        ()=>{
            const container = document.getElementById(JSONEditorVars.ContainerID);
            console.log(container,JSONEditorVars.ContainerID)
            const options = {
                templates: Object.values(JSONEditorVars.Templates)
            }
            const editor = new JSONEditor(container, options);
            editor.set(dataList);
        },
        []
    )

    return (
        React.createElement("div", {className: "env-json-editor"}, 
            React.createElement("div", {
                className: "env-json-editor-container",
                id: JSONEditorVars.ContainerID
            }),
            React.createElement(EnvButton,{})
        )
    )
}