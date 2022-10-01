// "use strict";

function CookieControl(props) {
    const {isMinimized,setIsMinimized} = props;
    const iClassName = `fa fa-toggle-${isMinimized?"off":"on"} cookie-control-icon`;

    function onToggleClick(e){
        setIsMinimized(!isMinimized);
    }

    return React.createElement("div", {className: "cookie-control"}, 
        React.createElement("i", {className: iClassName, onClick: onToggleClick}, " Edit"),
        React.createElement("i", {className: "fa fa-retweet cookie-control-icon"}, " Reset")
    );
}