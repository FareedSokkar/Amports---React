function EnvAttributesList(props){

    const {attributes,isEditable} = props;

    return (
        React.createElement("div", {className: "env-attributes-list"}, 
          React.createElement("h4", {className: "env-attributes-list-title"}, "Attributes"), 
          Object.entries(attributes).map(
            ([key, value], i) => React.createElement(EnvAttribute, {
                isEditable:isEditable,
                property: key,
                value: value
            })
          )
        )
    );
}