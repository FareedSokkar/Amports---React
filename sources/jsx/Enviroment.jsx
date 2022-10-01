// "use strict";

function Enviroment(props) {
    const {title,list} = props;
    const [isMinimized,setIsMinimized] = React.useState(true);
    
    function getEnviromentData(){
        let env = {};
        env[ipTypes.Master] = "10.0.0.120";
        env[ipTypes.User] = "10.0.0.128";
        return env;
    }

    const [env,setEnv] = React.useState(getEnviromentData());

    function changeEnviroment(type,value){
        let envCopy = Object.assign({},env);
        envCopy[type]=value;
        setEnv(envCopy);
    }

    return (
        React.createElement("div", {className: "enviroment"}, 
            React.createElement(StaticIp, {isMinimized: isMinimized, data: env.master , onSave:changeEnviroment}), 
            React.createElement(StaticIp, {
                type: ipTypes.User,button: "Edit",icon: "male",isMinimized: isMinimized , data: env.user, 
                onSave:changeEnviroment
            }), 
            React.createElement(CookieControl, {isMinimized: isMinimized,setIsMinimized: setIsMinimized}), 
            React.createElement(TabsList, {title:title,tabsLibs: list, env: env})
        )
    );
}