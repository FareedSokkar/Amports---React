function EnvPathsList(props){
    const {list,isEditable,changeCurrentConfig,type} = props;

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

    function changeList(newList){
        changeCurrentConfig("list",newList);
    }

    function onAddClick(e){
        changeList(
            [
                ...list,
                { 
                    id: '', 
                    ip: "", 
                    name: "", 
                    protocol: ProtocolTypes.HTTPS,
                    path: "",
                    icon: ""
                }
            ]
        )
        
    }

    return (
        React.createElement("div",{className: "env-paths-list"},
            React.createElement("h3", {className: "env-paths-list-header"},"Paths List"), 
            list.map(
                (path,i)=>React.createElement(EnvPath,{
                    key:path.id,
                    index:i,
                    isEditable:isEditable,
                    onChange: changeListInIndexAtConfig,
                    onDelete:changeList,
                    type: type,
                    ...path,
                    pathslist:list
                })
            ),
            React.createElement(EnvButton,{
                onClick: onAddClick,
                buttonText: "Add",
                isDisabled: !isEditable
            })
        )
    );
}