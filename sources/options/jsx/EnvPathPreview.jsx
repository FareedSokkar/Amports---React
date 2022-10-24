function EnvPathPreview(props){
    const {ip,protocol,path} = props;

    function getTemplateByIp(){
        switch(ip){
            case ipTypes.Master:
                return `{master-ip}/${path}`;
            case ipTypes.User:
                return `{user-ip}/${path}`;
            case ipTypes.ExternalLink:
                return `${path}`;
            default:    
                return 'N/A';
        }
    }

    return (
        React.createElement("div", {className: "env-path-preview"},
            React.createElement("label", {className: "env-path-preview-protocol"}, protocol), 
            React.createElement("label", {className: "env-path-preview-dash"}, "://"), 
            React.createElement("label", {className: "env-path-preview-host"}, getTemplateByIp())
        )
    );
}