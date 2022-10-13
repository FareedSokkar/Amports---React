// "use strict";

function CookieControl(props) {
    const {isMinimized,setIsMinimized,envId,resetEnviroment} = props;
    const iClassName = `fa fa-toggle-${isMinimized?"off":"on"} cookie-control-icon`;

    function onToggleClick(e){
        setIsMinimized(!isMinimized);
    }

    function onResetClick(e){
            chrome.storage.local.get({"envPersonalList": {}},function(list){
                let currentIps = list.envPersonalList;
                if(currentIps){
                    currentIps[envId] = {};
                    chrome.storage.local.set(list,
                        function(){
                            resetEnviroment();
                            console.log(`Successfully reseted ips for ${env}`);
                        }
                    )
                }else{
                    //Error Handling
                }
                
            });
    }

    return React.createElement("div", {className: "cookie-control"}, 
        React.createElement("i", {className: iClassName, onClick: onToggleClick}, " Edit"),
        React.createElement("i", {className: "fa fa-retweet cookie-control-icon", onClick: onResetClick}, " Reset")
    );
}