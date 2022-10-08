const EnviromentTypes = {
    Personal: "personal",
    Public: "public",
    Tools: "tools"
}
const ipTypes = {
    Master: "master",
    User: "user",
    ExternalLink: "external",
    ToolBlock: "gt_block",
    ToolBuild: "gt_build"
}
const buttonsText = {
    ipToggleOnEdit: "Save",
    ipToggleOffEdit: "Edit"
}
const IconsFontAwesome ={
    Trash: "trash",
    WheelChair: "wheelchair-alt"
}
const IconSize ={
    Small: "small",
    Normal: "normal",
    Large: "large"
}
const JSONEditor ={
    ContainerID: "env-json-editor-jsoneditor",
    Templates: {
        Enviroment: {
            text: 'Enviroment',
            title: 'Insert an Enviroment Node',
            className: 'jsoneditor-type-object',
            field: 'EnviromentTemplate',
            value: {
                'type': "",
                'configration': {'list': [],'title': ""},
                'id':""
            }
        }
    }
}