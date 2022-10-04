function EnvSelect(props) {
    const {list,listName,setSelectedType,defaultValue,isEditable} = props;

    function toCapitlized(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function onOptionChange(e){
        setSelectedType(e.target.value);
    }

    return (
        React.createElement("div", {className: "env-select"},
            React.createElement("label",{className: "env-select-label"},listName)
            ,React.createElement("select", {
                name: "",id: "",className: "env-select-select",
                onChange: onOptionChange,defaultValue:defaultValue, disabled: !isEditable
            }, 
                React.createElement("option", {value: "",className: "env-select-option"},"Please Select"),
                list.map(
                    (option,i) => React.createElement("option", {key:i,value: option,className: "env-select-option"}, toCapitlized(option))
                )
            )
        )
    );
}
EnvSelect.defaultProps ={
    defaultValue: "",
    isEditable: true
}