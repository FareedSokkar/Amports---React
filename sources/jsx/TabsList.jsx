// "use strict";

function TabsList(props) {
    const {title,tabsLibs,env,isMiniUI,onMiniClick} = props;
    const [isToggled,setIsToggled] = React.useState(false);
    let className = `fa fa-toggle-${isToggled ? "on" : "off"} tabslist-icon`;

    function onToggleClick(e){
        let target = e.target;
        if(target.classList.contains("mini-ui-toggle-icon")){
            e.stopPropagation();
        }else{
            setIsToggled(!isToggled);
        }
    }

    function selectIp(tab){
        return (env && tab && env[tab.ip]);
    }

    return (
        React.createElement("div", {className: "tabslist"}, 
            isMiniUI?
            (
                React.createElement("div", {className: "tabslist-container"},
                    React.createElement("label", {className: "tabslist-tabs-mini-ui-label"},title,React.createElement("i", {onClick: onMiniClick,className: "fa fa-bars mini-ui-toggle-icon"})),
                    React.createElement("div", {className: "tabslist-tabs-mini-ui"}, 
                    tabsLibs.map(tab => React.createElement(TabMiniUI, {...tab,ipHost: selectIp(tab),key:tab.id})))
                )
            )
            :
            (
                React.createElement("div", {className: "tabslist-container"},
                    React.createElement("label", {htmlFor: "",className: "tabslist-label", onClick: onToggleClick}, 
                    React.createElement("i", {className: className}), title,React.createElement("i", {onClick: onMiniClick,className: "fa fa-dot-circle-o mini-ui-toggle-icon"})), 
                    React.createElement("div", {className: `tabslist-tabs${isToggled?"":" hide"}`}, 
                    tabsLibs.map(tab => React.createElement(Tab, {...tab,ipHost: selectIp(tab),key:tab.id}))) 
                )
            ),
            React.createElement("hr", {className: "tabslist-hr"})
        )
    );
}

TabsList.defaultProps = {
    title: "Tabs",
    tabsLibs: [],
    isMiniUI: false
};