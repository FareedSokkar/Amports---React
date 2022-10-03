function EnvConfig(props){
    const {type} = props;

    function getConfigPerType(type){
        switch(type){
            case EnviromentTypes.Personal:
            case EnviromentTypes.Public:
                return(
                    "Yes"
                );
            break;
            case EnviromentTypes.Tools:
            default:

            break;
        }
    }

    return (
        <div className="env-config">

        </div>
    );
}