// "use strict";
console.log("weeeeeeeeeeeee");
function TabsList(props) {
    const {title,tabsLibs,isToggled} = props;
    let className = `fa fa-toggle-${isToggled ? "on" : "off"} tabslist-icon`;
    return (
        React.createElement("div", {className: "tabslist"}, 
            React.createElement("label", {htmlFor: "",className: "tabslist-label"}, 
                React.createElement("i", {className: className}), title), 
            React.createElement("div", {className: "tabslist-tabs"}, 
            tabsLibs.map(tab => React.createElement(Tab, tab))), 
            React.createElement("hr", {className: "tabslist-hr"})
        )
    );
}

TabsList.defaultProps = {
    title: "Tabs",
    isToggled: false
};