// "use strict";

function Enviroment(props) {
    const {title,list} = props;
    return (
        React.createElement("div", {className: "enviroment"}, 
            React.createElement(StaticIp, null), 
            React.createElement(StaticIp, {type: "User",button: "Edit",icon: "male"}), 
            React.createElement(CookieControl, null), 
            React.createElement(TabsList, {title:title,tabsLibs: list})
        )
    );
}