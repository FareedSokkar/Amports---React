function EnvPathsList(props){
    const {list,isEditable} = props;

    return (
        React.createElement("div",{className: "env-paths-list"},
            list.map(
                (path,i)=>React.createElement(EnvPath,{key:i,isEditable:isEditable,...path})
            )
        )
    );
}