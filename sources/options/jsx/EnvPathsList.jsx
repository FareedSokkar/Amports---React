function EnvPathsList(props){
    const {list,isEditable} = props;

    return (
        React.createElement("div",{className: "env-paths-list"},
            React.createElement("h3", {className: "env-paths-list-header"},"Paths List"), 
            list.map(
                (path,i)=>React.createElement(EnvPath,{key:i,index:i,isEditable:isEditable,...path})
            ),
            React.createElement(EnvButton,{
                buttonText: "Add",
                isDisabled: false
            })
        )
    );
}