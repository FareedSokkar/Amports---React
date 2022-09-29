// "use strict";

function TabsList(props) {
    const {title,tabsLibs} = props;
    const [isToggled,setIsToggled] = React.useState(false);
    let className = `fa fa-toggle-${isToggled ? "on" : "off"} tabslist-icon`;

    function onToggleClick(e){
        setIsToggled(!isToggled);
    }

    return (
        React.createElement("div", {className: "tabslist"}, 
            React.createElement("label", {htmlFor: "",className: "tabslist-label", onClick: onToggleClick}, 
                React.createElement("i", {className: className}), title), 
            React.createElement("div", {className: `tabslist-tabs${isToggled?"":" hide"}`}, 
            tabsLibs.map(tab => React.createElement(Tab, tab))), 
            React.createElement("hr", {className: "tabslist-hr"})
        )
    );
}

TabsList.defaultProps = {
    title: "Tabs",
    tabsLibs: []
};