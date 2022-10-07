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
                    key:i,
                    index:i,
                    isEditable:isEditable,
                    onChange: changeListInIndexAtConfig,
                    onDelete:changeList,
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