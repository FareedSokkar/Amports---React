

function EnviromentList(props) {
    const { list } = props;
    const [dataForm,setDataForm] = React.useState(list);
    const [sysType,setSysType] = React.useState(ConfigrationEditorType.AmportsEditor);

    function onAddClick(e){
        setDataForm(
            [
                ...dataForm,
                {
                    type: "",
                    configration:{
                        list:[],
                        title: ""
                    },
                    id:""
                }
            ]
        )
        
    }

    function onSelectChange(key,value){
        setSysType(value);
    }

    function getEditor(type){
        switch(type){
            case ConfigrationEditorType.JSONEditor:
                return [
                    React.createElement(EnvJSONEditor,{dataList:dataForm})
                ]
            case ConfigrationEditorType.AmportsEditor:
                return [
                    dataForm.map((item, i) => React.createElement(EnvOptions, {
                        key: item.id,
                        preDefined: item,
                        index: i,
                        dataForm:dataForm,
                        setDataForm:setDataForm
                    }))
                    ,React.createElement(EnvButton,{
                        buttonText: "Add",
                        onClick: onAddClick,
                        isDisabled: false,
                        isFullRow: true
                    })
                ]
        }
    }

    return (
        React.createElement("div", {className: "enviroment-list"}, 
            React.createElement("h1",{className:"enviroment-list-header"},
            `Amports Enviroment Options`),
            React.createElement(EnvSelect, {
                list: Object.values(ConfigrationEditorType),
                listName: "Editor",
                defaultValue: sysType,
                isEditable: true,
                changeKey: "type",
                changeOnSelect:onSelectChange,
                isPleaseSelect: false
            }),
            ...getEditor(sysType)
        )
    );
}

let envList;
function restore_options() {
    chrome.storage.local.get(
        { "envList": [] },
        function (list) {
            envList = list.envList;
            ReactDOM.createRoot(
                document.getElementById('root')
            ).render(
                React.createElement(EnviromentList, { list: envList })
            );
        }
    )
}
restore_options();