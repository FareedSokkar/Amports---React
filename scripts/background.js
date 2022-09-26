/* ================ Functions ================ */
function redirect(url) {
    if (typeof url === "string") {
        window.location.href = url;
    }
}
function triggerToActiveTabs(tabs,trigger){
    tabs.forEach(tab=>{
        portFromCS.tabs.sendMessage(tab.id, {trigger: trigger}, 
        function(response) {
            console.log(response);
        });
    });
}
function triggerToPort(trigger){
    portFromCS.postMessage({trigger: trigger});
    /* ================ Listener ================ */
    portFromCS.onMessage.addListener((m) => {
        console.log(m.msg);
    });
}
function onCreate(){

}
// chrome.tabs.query({ active: true, currentWindow: true },(tabs)=>{
//     triggerToActiveTabs(tabs,"amportsAutoRefresh");
// });
function autoRefresher() {
    triggerToPort("amportsAutoRefresh");
}
function replaceExtensions() {
    triggerToPort("amportsReplaceExtensions");
}
/* ================ Context Menu ================ */
chrome.contextMenus.create({
    title: "OND - Auto Refresh",
    contexts: ['all'],
    onclick: autoRefresher
},onCreate);

chrome.contextMenus.create({
    title: "S.N.O.W. - Replace Extensions",
    contexts: ['all'],
    onclick: replaceExtensions
},onCreate);

/* ================ Connection ================ */
chrome.runtime.onConnect.addListener(connected);
let portFromCS;
function connected(p) {
  portFromCS = p;
}
