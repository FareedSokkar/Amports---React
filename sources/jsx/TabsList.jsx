function TabsList(props){
    const {title,tabsLibs,isToggled} = props;
    let className = `fa fa-toggle-${isToggled?"on":"off"} tabslist-icon`;
    return(
        <div className="tabslist">
            <label htmlFor="" className="tabslist-label">
                <i className={className}></i>
                {title}
            </label>
            <div className="tabslist-tabs">
                {tabsLibs.map(tab=>
                    <Tab {...tab}/>
                )}
            </div>
            <hr className="tabslist-hr"/>
        </div>
    );
}

TabsList.defaultProps={
    title: "Tabs",isToggled: false
}