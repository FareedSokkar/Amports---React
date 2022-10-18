function EnvCustomEditor(props) {
    const {dataList,setDataForm} = props;
    const [textAreaData,setTextAreaData] = React.useState(JSON.stringify(dataList,null,4));

    function saveEnvList(newDataForm){
        chrome.storage.local.set({"envList":newDataForm},
        function(){
            setDataForm(newDataForm);
            console.log(`Successfully Updated Enviroment ${index}`);
        })
    }

    function onInputChange(e){
        setTextAreaData(e.target.value);
    }

    function isJSON(str) {
        try {
            return (JSON.parse(str) && !!str);
        } catch (e) {
            return false;
        }
    }

    function onSave(e){
        if(isJSON(textAreaData)){
            saveEnvList(JSON.parse(textAreaData));
        }else{
            //Error Handling
        }
    }

    return (
        React.createElement("div", {className: "env-custom-editor"}, 
            React.createElement("textarea", {
                    className: "env-custom-editor-textarea",
                    cols: "80",
                    rows: "30",
                    value: textAreaData,
                    onInput:onInputChange
                }
            ),
            React.createElement(EnvButton,{
                buttonText: "Save",
                onClick: onSave
            })
        )
    );
}