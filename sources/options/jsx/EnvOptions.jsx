function EnvOptions(props){

    const [selectedType,setSelectedType] = React.useState("");

    return (
        React.createElement(EnvSelect, {
            list: Object.values(EnviromentTypes),
            listName: "Enviroment Type"
        })
    );
}