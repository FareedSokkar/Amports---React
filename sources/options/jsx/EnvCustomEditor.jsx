function EnvCustomEditor(props) {
    const {dataList} = props;

    function saveEnvList(newDataForm){
        chrome.storage.local.set({"envList":newDataForm},
        function(){
            console.log(`Successfully Updated Enviroment ${index}`);
        })
    }

    function onSave(){

    }

    return (
        React.createElement("div", {className: "env-custom-editor"}, 
            React.createElement("textarea", {
                    className: "env-custom-editor-textarea",
                    cols: "50",
                    rows: "60",
                    value: JSON.stringify(dataList,null,4)
                }
            ),
            React.createElement(EnvButton,{})
        )
    );
}