

function EnviromentList(props) {
    const { list } = props;
    return (
        React.createElement("div", {className: "enviroment-list"}, 
            list.map((item, i) => React.createElement(EnvOptions, {key: i,preDefined: item}))
        )
    );
}

let envList;
function restore_options() {
    chrome.storage.sync.get(
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