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
}

concatConfiguration();
