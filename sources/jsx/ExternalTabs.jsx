// "use strict";

function ExternalTabs(props) {
    return (
        React.createElement("div", {className: "externaltabs"}, 
            React.createElement(TabsList, {tabsLibs: tools})
        )
    );
}