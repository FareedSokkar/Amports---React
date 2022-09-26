function Enviroment(props){
    console.log(paths);
    return(
        <div className="enviroment">
            <StaticIp />
            <StaticIp type="User" button="Edit" icon="male"/>
            <CookieControl />
            <TabsList tabsLibs={paths}/>
        </div>
    );
}