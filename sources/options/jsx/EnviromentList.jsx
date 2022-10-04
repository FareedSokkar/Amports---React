

function EnviromentList(props) {
    const { list } = props;
    return (
        React.createElement("div", {className: "enviroment-list"}, 
            React.createElement("h1",{className:"enviroment-list-header"},
            `Amports Enviroment Options`),
            list.map((item, i) => React.createElement(EnvOptions, {key: i,preDefined: item,index: i}))
            ,React.createElement(EnvButton,{
                buttonText: "Add",
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