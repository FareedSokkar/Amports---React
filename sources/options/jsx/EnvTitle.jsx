function EnvTitle(props) {
    const { title, isEditable } = props;

    return (
        React.createElement("div", {className: "env-title"},
            React.createElement("label", {className: "env-title-label"}, "Title"),
            React.createElement("input", {
            type: "text",
            className: "env-title-input",
            value: title,
            disabled: !isEditable
        }))
    );
}