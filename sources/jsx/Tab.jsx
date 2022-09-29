// "use strict";

function Tab(props) {
    const {id,ip,name,path,icon,icoType} = props; 
    // Functions
    function getIconElement(ip, icon, icoType) {
        const user = "male",master = "university",def = "default";
        let iconElement;
        if (icon) {
            if (icoType == "icon") {
                let className = `fa fa-${icon} fav_ico tab-icon`;
                iconElement = React.createElement("i", {className: className});
            } else {
                iconElement = React.createElement("img", {src: icon,className: "fav_ico"});
            }
        } else {
            let className = `fa fa-${ip == "master" ? master : ip == "user" ? user : def} fav_ico tab-icon`;
            iconElement = React.createElement("i", {className: className});
        }
        return iconElement;
    }

    function sendRedirect(url) {
        chrome.tabs.create({url: url});
    }

    function onTabClick(e) {
        let link;
        if (ip === "external") {
            link = `https://${path}`;
        } else if (ip === "master" || ip === "user") {
            ipHost = "10.0.0.127"; // get ip
            link = `https://${ipHost}/${path}`;
        }
        if (link) {
            sendRedirect(link);
        }
    }

    return (
        React.createElement("div", {className: "tab",id: id,onClick: onTabClick}, 
            getIconElement(ip, icon, icoType), 
        name)
    );
}

Tab.defaultProps = {
    icoType: "image"
};