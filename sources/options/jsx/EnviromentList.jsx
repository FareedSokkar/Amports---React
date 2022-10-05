

function EnviromentList(props) {
    const { list } = props;
    const [dataForm,setDataForm] = React.useState(list);
    
    function onAddClick(e){
        setDataForm(
            [
                ...dataForm,
                {
                    type: "",
                    configration:{
                        list:[],
                        title: ""
                    }
                }
            ]
        )
        
    }

    return (
        React.createElement("div", {className: "enviroment-list"}, 
            React.createElement("h1",{className:"enviroment-list-header"},
            `Amports Enviroment Options`),
            dataForm.map((item, i) => React.createElement(EnvOptions, {
                key: i,
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