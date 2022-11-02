
function StaticIp(props) {
    const { envId, type, button, icon, isMinimized , data , onSave} = props;
    const [isEditable,setIsEditable] = React.useState(false);
    const [isSucess,setIsSucess] = React.useState(false);
    const [isFail,setIsFail] = React.useState(false);

    const iClassName = `fa fa-${icon} fav_ico`;
    const iCopyClassName = `fa fa-clipboard staticip-mini-copy${isSucess?" staticip-mini-copy-success":""}${isFail?" staticip-mini-copy-fail":""}`;

    function onEditClick(e){
        setIsEditable(true);
    }

    function saveEnvPersonalList(env,ip,value){
        chrome.storage.local.get({"envPersonalList": {}},function(list){
            let currentIps = list.envPersonalList;
            if(currentIps){
                if(!currentIps[env]){
                    currentIps[env] = {}
                }
                currentIps[env][ip] = value;
                chrome.storage.local.set(list,
                    function(){
                        console.log(`Successfully Updated ${ip} for ${env}`);
                    }
                )
            }else{
                //Error Handling
            }
        });
    }

    function onSaveClick(e){
        //Save to storage
        saveEnvPersonalList(envId,type,data);
        // disable editing
        setIsEditable(false);
    }

    function onInputChange(e){
        onSave(type,e.target.value);
    }

    function copyTextToClipboard(e) {
        if (!navigator.clipboard) {
          return;
        }
        navigator.clipboard.writeText(data).then(function() {
            setIsSucess(true);
            console.log('Async: Copying to clipboard was successful!');
            setTimeout(()=>{
                setIsSucess(false);
            },1000);
        }, function(err) {
            setIsFail(true);
          console.error('Async: Could not copy text: ', err);
          setTimeout(()=>{
            setIsFail(false);
        },1000);
        });
    }
    
    function setIpsContentLayout(){
        if (isMinimized) {
            return (
                React.createElement("div", { className: "staticip staticip-mini" },
                    React.createElement("div", {className: "staticip-label"}, 
                            React.createElement("i", {className: iClassName}, data),
                            React.createElement("i", {
                                className: iCopyClassName,
                                onClick: copyTextToClipboard
                            })
                    )
                )
            );
        }else{
            return (
                React.createElement("div", { className: "staticip" },
                    React.createElement("label", { htmlFor: "", className: "staticip-label" },
                        React.createElement("i", { className: iClassName }), type
                    ),
                    React.createElement("div", { className: "staticip-data" },
                    React.createElement("input", { 
                        type: "text", className: "staticip-input" , value: data , 
                        disabled: !isEditable, onInput: onInputChange
                    }),
                        React.createElement("button", { 
                            className: "staticip-button",
                            onClick: isEditable? onSaveClick : onEditClick
                        }, isEditable?buttonsText.ipToggleOnEdit:button)
                    )  
                ) 
            );
        }
    }    

    return setIpsContentLayout();
}

StaticIp.defaultProps = {
    type: ipTypes.Master,
    button: "Edit",
    icon: "university",
    isMinimized: true,
    data: "N/A"
};