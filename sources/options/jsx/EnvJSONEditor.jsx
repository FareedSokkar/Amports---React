function EnvJSONEditor(props) {

    return (
        React.createElement("div", {className: "env-json-editor"}, 
            React.createElement("div", {
                className: "env-json-editor-container",
                id: JSONEditor.ContainerID,
                style: "width: 400px; height: 400px;"
            })
        )
    )
}