function EnvOptions(props){
    const {index,preDefined,dataForm,setDataForm} = props;

    let initState = {
        edit: true,
        selected: "",
        config: {
            type: "",
            configration:{
                list:[],
                title: ""
            }
        }
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
    const [currentConfig,setCurrentConfig] = React.useState(initState.config);

    function onSelectChange(key,value){
        let obj = Object.assign({},preDefined);
        obj[key]=value;
        setSelectedType(value);
        setCurrentConfig(obj.configration);
        setDataForm(dataForm.map(
            (el,i)=>{
                if(i == index){
                    return obj;
                }else{
                    return el;
                }
            }
        ))
    }

    function changeCurrentConfig(key,value){
        let obj=Object.assign({},currentConfig);
        obj[key]=value;
        setCurrentConfig(obj);
    }

    function validateEnviromentData(){
        return true;
    }

    function onEditClick(e){
        if(!isEditable){
            setIsEditable(true);
        }
    }

    function onSaveClick(e){
        //validate Enviroment
        if(validateEnviromentData()){
            //Save content
            setDataForm(
                dataForm.map(
                    (el,i)=>{
                        if(i == index){
                            return currentConfig;
                        }else{
                            return el;
                        }
                    }
                )
            )
            // tpggle editablity 
            if(isEditable){
                setIsEditable(false);
            }
        }else{
            // message issue

        }
    }

    return (
        React.createElement("div",{className:"env-options"},
            React.createElement("h2",{className:"env-options-header"},
            `Enviroment ${index}`),
            React.createElement(EnvSelect, {
                list: Object.values(EnviromentTypes),
                listName: "Enviroment Type",
                defaultValue: initState.selected,
                isEditable: isEditable,
                changeKey: "type",
                setSelectedType:onSelectChange
            }),
            React.createElement(EnvConfig,{
                type:selectedType,
                isEditable: isEditable,
                ...currentConfig,
                changeCurrentConfig:changeCurrentConfig
            }),
            React.createElement(EnvButton,{
                buttonText: "Edit",
                isDisabled: isEditable,
                onClick: onEditClick
            }),
            React.createElement(EnvButton,{
                buttonText: "Save",
                isDisabled: !isEditable,
                onClick: onSaveClick
            })
        )
        
    );
    
    
}