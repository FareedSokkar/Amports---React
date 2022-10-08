

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    // DOM is loaded and ready for manipulation here
    const container = document.getElementById(JSONEditorVars.ContainerID);
    console.log(container,JSONEditorVars.ContainerID)
    const options = {
        templates: [
            JSONEditorVars.Templates.Enviroment
        ]
    }
    const editor = new JSONEditor(container, options);
    editor.set(envList);
});