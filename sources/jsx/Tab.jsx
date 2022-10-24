function Tab(props) {
    const {id,ip,name,protocol,path,icon,icoType,ipHost} = props; 
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
        switch(ip){
            case ipTypes.ExternalLink:
                link = `${protocol}://${path}`;
                break;
            case ipTypes.Master:
            case ipTypes.User:
                link = `${protocol}://${ipHost}/${path}`;
                break;
            default:
                link = null;
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
    icoType: "image",
    protocol: ProtocolTypes.HTTPS
};