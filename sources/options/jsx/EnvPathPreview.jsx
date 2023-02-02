function EnvPathPreview(props){
    const {ip,protocol,path} = props;

    function getTemplateByIp(){
        switch(ip){
            case ipTypes.Master:
                if(protocol == ProtocolTypes.SSH){
                    return `${path}@{master-ip}`;
                }else{
                    return `{master-ip}/${path}`;
                }
            case ipTypes.User:
                if(protocol == ProtocolTypes.SSH){
                    return `${path}@{user-ip}`;
                }else{
                    return `{user-ip}/${path}`;
                }
            case ipTypes.ExternalLink:
                return `${path}`;
            default:    
                return 'N/A';
        }
    }

    return (
        React.createElement("div", {className: "env-path-preview"},
            React.createElement("label", {className: "env-path-preview-protocol"}, protocol), 
            React.createElement("label", {className: "env-path-preview-dash"}, protocol == ProtocolTypes.SSH?" ":"://"), 
            React.createElement("label", {className: "env-path-preview-host"}, getTemplateByIp())
        )
    );
}