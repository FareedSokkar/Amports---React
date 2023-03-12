const EnviromentTypes = {
    Personal: "personal",
    Public: "public",
    Tools: "tools"
}
const ipTypes = {
    Master: "master",
    User: "user",
    ExternalLink: "external",
    CopyNode:"copy_node",
    ToolBlock: "gt_block",
    ToolBuild: "gt_build"
}
const buttonsText = {
    ipToggleOnEdit: "Save",
    ipToggleOffEdit: "Edit"
}
const IconsFontAwesome ={
    Trash: "trash",
    WheelChair: "wheelchair-alt",
    AngleDown: "angle-down",
    AngleUp: "angle-up"
}
const IconSize ={
    Small: "small",
    Normal: "normal",
    Large: "large"
}
const JSONEditorVars ={
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
        },
        Tab: {
            text: 'Tab',
            title: 'Insert a Tab Node',
            className: 'jsoneditor-type-object',
            field: 'TabTemplate',
            value: {
                id: 'contact',
                ip: "",
                name: "",
                path: "",
                icon: "",
                icoType: ""
            }
        }
    }
}
const ConfigrationEditorType = {
    AmportsEditor: "Amports Editor",
    JSONEditor: "JSON Editor",
    CustomEditor: "Custom Editor"
}
const IconType ={
    Image: "image",
    Icon: "icon"
}
const ProtocolTypes = {
    HTTPS: "https",
    HTTP: "http",
    FTP: "ftp",
    SSH: "ssh",
}