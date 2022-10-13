
function StaticIp(props) {
    const { envId, type, button, icon, isMinimized , data , onSave} = props;
    const [isEditable,setIsEditable] = React.useState(false);
    const iClassName = `fa fa-${icon} fav_ico`;

    function onEditClick(e){
        setIsEditable(true);
    }

    function saveEnvPersonalList(key,value){
        let keyValue = {};
        keyValue[key] = value;
        chrome.storage.local.set(keyValue,
            function(){
                console.log(`Successfully Updated ${type}`);
            }
        )
    }

    function onSaveClick(e){
        //Save to storage
// ==========>
        console.log(type,data);
        // disable editing
        setIsEditable(false);
    }

    function onInputChange(e){
        onSave(type,e.target.value);
    }
    
    function setIpsContentLayout(){
        if (isMinimized) {
            return (
                React.createElement("div", { className: "staticip staticip-mini" },
                    React.createElement("div", {className: "staticip-label"}, 
                            React.createElement("i", {className: iClassName}, data)
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