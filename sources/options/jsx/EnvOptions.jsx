function EnvOptions(props){
    const {index,preDefined,dataForm,setDataForm} = props;
    const [isEditable,setIsEditable] = React.useState(preDefined.type == "");
    const [currentChange,setCurrentChange] = React.useState(preDefined);
    const [isHidden,setIsHidden] = React.useState(true);

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

    function generateUUIDV4(){
        return uuid.v4()
    }

    function onGenerateClick(e){
        onIdChange("id",generateUUIDV4());
    }

    function validateEnviromentData(){
        function uniqueList(list,key,currentIndex=-1,currentId){
            let set = new Set();
            if(currentId){
                set.add(currentId);
            }
            return list.findIndex(
                (el,i)=>{
                    if(i !== currentIndex){
                        if(set.has(el[key])){
                            return true;
                        }else{
                            set.add(el[key]);
                        }
                    }
                    return false;
                }
            );
        }
        // generated id is unique for enviroment
        let envErrorIndex = uniqueList(dataForm,"id",index,currentChange.id);
        if(envErrorIndex!==-1){
            return false;
        }
        // Ids of paths are unique to each other
        let errorIndex = uniqueList(currentChange.configration.list,"id");
        if(errorIndex!==-1){
            return false;
        }
        return true;
    }

    function onEditClick(e){
        if(!isEditable){
            setIsEditable(true);
        }
    }

    function saveEnvList(newDataForm){
        chrome.storage.local.set({"envList":newDataForm},
        function(){
            console.log(`Successfully Updated Enviroment ${index}`);
        })
    }

    function onSaveClick(e){
        //validate Enviroment
        if(validateEnviromentData()){
            let newDataForm =dataForm.map(
                (el,i)=>{
                    if(i == index){
                        return currentChange;
                    }else{
                        return el;
                    }
                }
            );
            //Save content
            saveEnvList(newDataForm);
            // Update component
            setDataForm(newDataForm);
            // tpggle editablity 
            if(isEditable){
                setIsEditable(false);
            }
        }else{
            // message issue

        }
    }

    function onDeleteIconClick(e){
        setIsHidden(false);
    }

    function deleteEnviroment(e){
        let newDataForm = dataForm.filter((el,i)=>i!==index);
        saveEnvList(newDataForm)
        setDataForm(newDataForm);
    }

    return (
        React.createElement("div",{className:"env-options"},
            React.createElement(EnvIcon,{
                onClick: onDeleteIconClick, 
                icon: IconsFontAwesome.Trash,
                isDisabled: !isEditable
            }),
            React.createElement(EnvConfirm,{
                isHidden: isHidden,
                setIsHidden: setIsHidden,
                callback: deleteEnviroment
            }),
            React.createElement("h2",{className:"env-options-header"},
            `Enviroment ${index}`),
            React.createElement(EnvInput, {
                inputName: "Env-ID",
                defaultValue: currentChange.id,
                isEditable: isEditable,
                changeKey: "id",
                setInputValue: onIdChange,
                isUUID: true,
                generateUUID: onGenerateClick
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