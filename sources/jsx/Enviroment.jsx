// "use strict";

function Enviroment(props) {
    const {title,list,ips,id,config} = props;
    const [isMinimized,setIsMinimized] = React.useState(true);
    const [isMiniUI,setIsMiniUI] = React.useState((!!config && !!config.miniui));
    
    function getEnviromentData(){
        let env = {};
        env[ipTypes.Master] = (ips && ips[ipTypes.Master]) || "N/A";
        env[ipTypes.User] = (ips && ips[ipTypes.User]) || "N/A";
        return env;
    }

    function onIconClick(e){
        setIsMiniUI(!isMiniUI);
    }

    const [env,setEnv] = React.useState(getEnviromentData());

    function changeEnviroment(type,value){
        let envCopy = Object.assign({},env);
        envCopy[type]=value;
        setEnv(envCopy);
    }

    function resetEnviroment(){
        let envCopy = Object.assign({},env);
        envCopy[ipTypes.Master] = "N/A";
        envCopy[ipTypes.User] = "N/A";
        setEnv(envCopy);
    }

    return (
        React.createElement("div", {className: "enviroment"}, 
            React.createElement(StaticIp, {
                isMinimized: isMinimized, 
                data: env.master , 
                onSave:changeEnviroment,
                envId: id
            }), 
            React.createElement(StaticIp, {
                type: ipTypes.User,
                button: "Edit",
                icon: "male",
                isMinimized: isMinimized, 
                data: env.user, 
                onSave:changeEnviroment,
                envId: id
            }), 
            React.createElement(CookieControl, {
                isMinimized: isMinimized,
                setIsMinimized: setIsMinimized,
                envId: id,
                resetEnviroment:resetEnviroment
            }), 
            React.createElement(TabsList, {title:title,tabsLibs: list, env: env, isMiniUI: isMiniUI, onMiniClick: onIconClick})
        )
    );
}