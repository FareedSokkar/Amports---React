function StaticIp(props){
    const {type,button,icon} = props;
    const iClassName = `fa fa-${icon} fav_ico`;

    return(
        <div className="staticip">
            <label htmlFor="" className="staticip-label">
                <i className={iClassName}></i>
                {type}
            </label>
            <div className="staticip-data">
                <input type="text" className="staticip-input" />
                <button className="staticip-button">
                    {button}
                </button>
            </div>
        </div>
    );
}

StaticIp.defaultProps={
    type: "Master",
    button: "Edit",
    icon: "university"
}