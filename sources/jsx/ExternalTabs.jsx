// "use strict";

function ExternalTabs(props) {
    const {title,list,config,id} = props;
    const [isMiniUI,setIsMiniUI] = React.useState((!!config && !!config.miniui));

    function onIconClick(e){
        let flag = !isMiniUI;
        saveConfig(id,"miniui",flag);
        setIsMiniUI(flag);
    }

    function saveConfig(env,key,value){
        chrome.storage.local.get({"configurationList": {}},function(list){
            let currentIps = list.configurationList;
            if(currentIps){
                if(!currentIps[env]){
                    currentIps[env] = {}
                }
                currentIps[env][key] = value;
                chrome.storage.local.set(list,
                    function(){
                        console.log(`Successfully Updated ${key} for ${env}`);
                    }
                )
            }else{
                //Error Handling
            }
        });
    }
    return (
        React.createElement("div", {className: "externaltabs"}, 
            React.createElement(TabsList, {title:title,tabsLibs: list, isMiniUI: isMiniUI, onMiniClick: onIconClick})
        )
    );
}