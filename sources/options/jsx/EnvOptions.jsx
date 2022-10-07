function EnvOptions(props){
    const {index,preDefined,dataForm,setDataForm} = props;
    const [isEditable,setIsEditable] = React.useState(preDefined.type == "");
    const [currentChange,setCurrentChange] = React.useState(preDefined);

    function onIdChange(key,value){
        let obj = Object.assign({},currentChange);
        obj[key]=value;
        setCurrentChange(obj);
    }

    function onSelectChange(key,value){
        let obj = Object.assign({},currentChange);
        obj[key]=value;
        setCurrentChange(obj);
// Check if need change parent status
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
        let obj=Object.assign({},currentChange);
        obj.configration[key]=value;
        setCurrentChange(obj);
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
                            return currentChange;
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

    function deleteEnviroment(e){
        setDataForm(dataForm.filter((el,i)=>i!==index));
    }

    return (
        React.createElement("div",{className:"env-options"},
            React.createElement(EnvIcon,{
                onClick: deleteEnviroment, 
                icon: IconsFontAwesome.Trash
            }),
            React.createElement("h2",{className:"env-options-header"},
            `Enviroment ${index}`),
            React.createElement(EnvInput, {
                inputName: "Env-ID",
                defaultValue: currentChange.id,
                isEditable: isEditable,
                changeKey: "id",
                setInputValue: onIdChange,
                isUUID: true
            }),
            React.createElement(EnvSelect, {
                list: Object.values(EnviromentTypes),
                listName: "Enviroment Type",
                defaultValue: preDefined.type,
                isEditable: isEditable,
                changeKey: "type",
                changeOnSelect:onSelectChange
            }),
            React.createElement(EnvConfig,{
                type:currentChange.type,
                isEditable: isEditable,
                ...currentChange.configration,
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