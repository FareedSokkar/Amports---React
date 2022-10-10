function EnvConfirm(props){
    const {isHidden,setIsHidden,callback} = props;

    function onCancel(e){
        setIsHidden(true);
    }

    function onConfirm(e){
        callback(e)
        setIsHidden(true);
    }

    return (
        React.createElement("div", {className: `env-confirm${isHidden?" env-confirm-hidden":""}`}, 
            React.createElement("div", {className: "env-confirm-container"},
                React.createElement("h2", null, "Are you sure you want to delete this Enviroment?"),
                React.createElement(EnvButton, {buttonText: "Confirm",onClick: onConfirm}),
                React.createElement(EnvButton, {buttonText: "Cancel",onClick: onCancel})
            )
        )
    );
}