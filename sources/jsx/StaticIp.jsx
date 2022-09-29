// "use strict";
function StaticIp(props) {
    const {
        type,
        button,
        icon
    } = props;
    const iClassName = `fa fa-${icon} fav_ico`;
    return React.createElement("div", {className: "staticip"}, 
        React.createElement("label", {htmlFor: "",className: "staticip-label"}, 
            React.createElement("i", {className: iClassName}), type
        ), 
        React.createElement("div", {className: "staticip-data"}, 
            React.createElement("input", {type: "text",className: "staticip-input"}),
            React.createElement("button", {className: "staticip-button"},button)
        )
    );
}

StaticIp.defaultProps = {
    type: "Master",
    button: "Edit",
    icon: "university"
};