function EnviromentList(props){
    return (
        React.createElement(EnvOptions, null)
    );
}

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    React.createElement(EnviromentList, null)
);