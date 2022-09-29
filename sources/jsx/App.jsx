// "use strict";

function App(props) {
    return (
        React.createElement("div", {className: "app"},
            React.createElement("div", {className: "app-header"}, 
                React.createElement("img", {src: "/popup/amports.png",alt: "logo",className: "app-logo"})
            ), 
            React.createElement(Enviroment, null), 
            React.createElement(ExternalTabs, null), 
            React.createElement("div", {className: "app-footer"}, "Copyrights \xA9 Amdocs 2021 - developed by Fareed Sokkar")
        )
    );
}

ReactDOM.createRoot(
    document.getElementById('root')
    ).render( 
    React.createElement(App, null)
);