/**=================================================
 *                                                  |
 *                                                  |
 *             Enviroment related paths             |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: which ip to use the user of master
 * name: the name which you want to appear in the "button"
 * path: the defined path of the env -> http://{ip}/{path}
 */

let personalPath = [

];





/**=================================================
 *                                                  |
 *                                                  |
 *             Universal Tools                      |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: external
 * name: the name which you want to appear in the "button"
 * path: the defined path of the tool -> http://{path}
 */
const personalTools = [
    
];



/**=================================================
 *                                                  |
 *                                                  |
 *             Personalized Tools                   |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: gt_block/gt_build
 * name: the name which you want to appear in the "button"
 * path: the key in the innerHtml variable
 */
const personalGt_tools = [
   
];

// Note: when creating css take toggle_[id] as the root so you won't break the extension layout

const personalInnerHtml_block = {
   
};

const personalInnerHtml_build = {
    
}
// Concat configuration
function concatConfiguration(){
    paths = paths.concat(personalPath);
    tools = tools.concat(personalTools);
    gt_tools = gt_tools.concat(personalGt_tools);
    innerHtml_block = {...innerHtml_block,...personalInnerHtml_block};
    innerHtml_build = {...innerHtml_build,...personalInnerHtml_build};
}

concatConfiguration();