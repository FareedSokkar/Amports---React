function EnvSelect(props) {
    const {list,listName,changeOnSelect, changeKey, defaultValue,isEditable,isPleaseSelect} = props;

    function toCapitlized(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function onOptionChange(e){
        changeOnSelect(changeKey,e.target.value);
    }

    return (
        React.createElement("div", {className: "env-select"},
            React.createElement("label",{className: "env-select-label"},listName)
            ,React.createElement("select", {
                className: "env-select-select",
                onChange: onOptionChange,
                defaultValue:defaultValue, 
                disabled: !isEditable
            }, 
                (
                    isPleaseSelect?
                    React.createElement("option", {value: "",className: "env-select-option"},"Please Select"):
                    null
                ),
                list.map(
                    (option,i) => React.createElement("option", {key:i,value: option,className: "env-select-option"}, toCapitlized(option))
                )
            )
        )
    );
}
EnvSelect.defaultProps ={
    defaultValue: "",
    isEditable: true,
    isPleaseSelect: true
}