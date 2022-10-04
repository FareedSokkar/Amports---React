const personal_enviroments = [
    {
        type: EnviromentTypes.Personal,
        configration: {
            list: [
                { id: 'search', ip: ipTypes.Master, name: "search cats", path: "search?q=cats" },
            ],
            title: "Extra env"
        }
    }
];


// Concat configuration
function concatConfiguration(){
    shared_enviroments = shared_enviroments.concat(personal_enviroments);
    save_configuration();
}

function save_configuration(){
    chrome.storage.local.set({"envList":shared_enviroments},
    function(){
        console.log("Saved Successfully");
    })
}

concatConfiguration();
