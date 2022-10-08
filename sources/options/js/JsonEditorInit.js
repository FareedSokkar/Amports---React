const container = document.getElementById(JSONEditor.ContainerID);
const options = {
    templates: [
        JSONEditor.Templates.Enviroment
    ]
}
const editor = new JSONEditor(container, options);