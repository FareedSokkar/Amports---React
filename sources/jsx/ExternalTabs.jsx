// "use strict";

function ExternalTabs(props) {
    const {title,list} = props;
    return (
        React.createElement("div", {className: "externaltabs"}, 
            React.createElement(TabsList, {title:title,tabsLibs: list})
        )
    );
}