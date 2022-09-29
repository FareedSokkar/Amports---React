// "use strict";

function Enviroment(props) {
    return (
        React.createElement("div", {className: "enviroment"}, 
            React.createElement(StaticIp, null), 
            React.createElement(StaticIp, {type: "User",button: "Edit",icon: "male"}), 
            React.createElement(CookieControl, null), 
            React.createElement(TabsList, {tabsLibs: paths})
        )
    );
}