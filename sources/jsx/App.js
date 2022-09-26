function App(props) {

    

    return (
        <div className="app">
            <div className="app-header">
                <img src="/popup/amports.png" alt="logo" className="app-logo" />
            </div>
            
            <Enviroment />
            <ExternalTabs />

            <div className="app-footer">Copyrights © Amdocs 2021 - developed by Fareed Sokkar</div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));