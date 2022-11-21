// "use strict";

function App(props) {

    const {list,ips,config} = props;

    function createEnviroment(env) {
        let content;
        switch (env.type) {
            case EnviromentTypes.Personal:
                content = React.createElement(Enviroment, {
                    key: env.id, 
                    id: env.id,
                    ips: ips[env.id], 
                    title: env.configration.title,
                    list: env.configration.list,
                    config: config[env.id]
                });
                break;
            case EnviromentTypes.Public:
                content = React.createElement(ExternalTabs, {
                    key: env.id,
                    id: env.id,
                    title: env.configration.title,
                    list: env.configration.list,
                    config: config[env.id]
                });
                break;
            case EnviromentTypes.Tools:
            default:
                content = React.createElement("div", {key: env.id,className: "app-empty"});
        }
        return content;
    }

    function setEnviromentsList() {
        if (typeof list !== 'undefined' && Array.isArray(list) && list.length) {
            return list.map((env) => createEnviroment(env));
        } else {
            return (
                React.createElement("div",{className: "app-no-content"},
                    React.createElement("i", {className: "app-no-content-icon fa fa-download"}),
                    React.createElement("h1",{className: "app-no-content-title"},"No configuration")
                )
            );
        }
    }

    return (
        React.createElement("div",{className: "app"},
            React.createElement("div",{className: "app-header"},
                React.createElement("img", {src: "/popup/amports.png",alt: "logo",className: "app-logo"})
            ),
            React.createElement("hr", {className: "tabslist-hr"}),
            React.createElement("div",{className: "app-content-container"},setEnviromentsList()),
            React.createElement("div",{className: "app-footer"},"Copyrights \xA9 Amdocs 2021 - developed by Fareed Sokkar")
        )
    );
}

let envList;
let envPersonalList;
let configurationList;
function restore_options() {
    chrome.storage.local.get(
        { "envList": [], "envPersonalList": {}, "configurationList":{}},
        function (list) {
            envList = list.envList;
            envPersonalList = list.envPersonalList;
            configurationList = list.configurationList;
            ReactDOM.createRoot(
                document.getElementById('root')
            ).render(
                React.createElement(App, { list: envList , ips: envPersonalList, config: configurationList})
            );
        }
    )
}
restore_options();

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    React.createElement(App, null)
);