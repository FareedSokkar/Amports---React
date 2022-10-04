function EnvOptions(props){
    const {index,preDefined} = props;

    let initState = {
        edit: true,
        selected: "",
        config: {}
    };
    if(preDefined && preDefined.type && preDefined.configration){
        initState = {
            edit: false,
            selected: preDefined.type,
            config: preDefined.configration
        };
    }

    const [isEditable,setIsEditable] = React.useState(initState.edit);
    const [selectedType,setSelectedType] = React.useState(initState.selected);

    return (
        React.createElement("div",{className:"env-options"},
            React.createElement("h2",{className:"env-options-header"},
            `Enviroment ${index}`),
            React.createElement(EnvSelect, {
                list: Object.values(EnviromentTypes),
                listName: "Enviroment Type",
                setSelectedType:setSelectedType,
                defaultValue: initState.selected,
                isEditable: isEditable
            }),
            React.createElement(EnvConfig,{
                type:selectedType,
                isEditable: isEditable,
                ...initState.config
            }),
            React.createElement(EnvButton,{
                buttonText: "Edit",
                isDisabled: isEditable
            }),
            React.createElement(EnvButton,{
                buttonText: "Save",
                isDisabled: !isEditable
            })
        )
        
    );
    
    
}