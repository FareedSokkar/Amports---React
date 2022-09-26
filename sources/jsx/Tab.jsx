
function Tab(props){
    const {id,ip,name,path,icon,icoType} = props;
    // Functions
    function getIconElement(ip,icon,icoType){
        const user ="male",master="university",def="default";
        let iconElement;
        if(icon){
            if(icoType == "icon"){
                let className = `fa fa-${icon} fav_ico tab-icon`;
                iconElement = <i className={className}></i>
            }else{
                iconElement = <img src={icon} className="fav_ico"/>
            }
        }else{
            let className = `fa fa-${ip=="master"?master:(ip=="user"?user:def)} fav_ico tab-icon`;
            iconElement = <i className={className}></i>
        }
        return iconElement
    }

    function sendRedirect(url) {
        chrome.tabs.create({ url: url });
    }

    function onTabClick(e){
        let link;
        if(ip === "external"){
            link = `http://${path}`;
        }else if(ip === "master" || ip === "user"){
            ipHost = "10.0.0.127" // get ip
            link = `http://${ipHost}/${path}`;
        }
        if(link){
            sendRedirect(link);
        }
    }

    return(
        <div className="tab" id={id} onClick={onTabClick}>
            {getIconElement(ip,icon,icoType)}
            {name}
        </div>
    );
}
Tab.defaultProps ={
    icoType: "image"
}