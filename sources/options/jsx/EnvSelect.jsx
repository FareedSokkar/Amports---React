function EnvSelect(props) {
    const {list,listName} = props;

    function toCapitlized(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        React.createElement("div", {className: "env-select"},
            React.createElement("label",{},listName)
            ,React.createElement("select", {name: "",id: "",className: "env-select-select"}, 
                list.map(
                    option => React.createElement("option", {value: option,className: "env-select-option"}, toCapitlized(option))
                )
            )
        )
    );
}