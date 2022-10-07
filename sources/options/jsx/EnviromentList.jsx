

function EnviromentList(props) {
    const { list } = props;
    const [dataForm,setDataForm] = React.useState(list);
    
    console.log("%cEnviromentList: dataForm-","color: blue; font-size: 30px;");
    console.dir(dataForm);

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

    return (
        React.createElement("div", {className: "enviroment-list"}, 
            React.createElement("h1",{className:"enviroment-list-header"},
            `Amports Enviroment Options`),
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
                isDisabled: false
            })
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