function EnvPathsList(props){
    const {list,isEditable,changeCurrentConfig} = props;

    function changeListInIndexAtConfig(index,value){
        changeCurrentConfig("list",list.map(
            (el,i)=>{
                if(i==index){
                    return value;
                }else{
                    return el;
                }
            }
        ))
    }

    return (
        React.createElement("div",{className: "env-paths-list"},
            React.createElement("h3", {className: "env-paths-list-header"},"Paths List"), 
            list.map(
                (path,i)=>React.createElement(EnvPath,{
                    key:i,
                    index:i,
                    isEditable:isEditable,
                    onChange: changeListInIndexAtConfig,
                    ...path,
                    pathslist:path
                })
            ),
            React.createElement(EnvButton,{
                buttonText: "Add",
                isDisabled: false
            })
        )
    );
}