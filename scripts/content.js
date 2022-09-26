/* ================ Functions ================ */
// Auto Refresh
function autoRefresher(){
    let iframe = getNestedIFrame();
    if(iframe.doc){
        setInnerInterval(iframe.doc);
    }
}

function setInnerInterval(document){
    let intervalID;
    intervalID = setInterval(
        (e) => {
            if (document.querySelector('div.distribution__top-bar-status div.svg-icon-wrapper.__positive') || document.querySelector('div.distribution__top-bar-status div.svg-icon-wrapper.__negative')) {
                clearInterval(intervalID);
            } else {
                document.querySelector('div.svg-icon-wrapper.__primary.bottom').click();
            }
        }
        , 3000);  
}

function getIframeDetails(document,iframeSelector = '#onpCanvasNonresident>iframe'){
    let iframeEle ={
        doc: null,
        win: null
    }
    if(document){
        const iframe = document.querySelector(iframeSelector);
        if(iframe){
            iframeEle.win = iframe.contentWindow;
            iframeEle.doc = iframeEle.win.document;
        }
    }
    return iframeEle;
}

function getNestedIFrame(){
    let outterFrame = getIframeDetails(document);
    return getIframeDetails(outterFrame.doc,'iframe');
}

function replaceExtensions(){
    // Private
    const extensionsTable = '[id^=extensionsTable]';
    const extension = "td>input[name*=extensions][name$='.value']";
    /**
     * 
     * @param {Array} extensions 
     */
    function replaceExtensionsEscaped(extensions){
        extensions.forEach(el=>{
            el.value = cleanValue( el.value );
        });
    }
    /**
     * 
     * @param {String} value 
     * @returns {String}
     */
    function cleanValue(value){
        // Resource tag remove
        return replaceQuote(replaceLessThan(replaceGreaterThan(value)));
    }
    function replaceQuote(str){
        const generic_quote=/\"/g;
        return str.replaceAll(generic_quote,'&quot;');
    }
    function replaceLessThan(str){
        const less_than=/</g;
        return str.replaceAll(less_than,'$lt;');
    }
    function replaceGreaterThan(str){
        const greater_than=/>/g;
        return str.replaceAll(greater_than,'$gt;');
    }
    // Execution
    let extensions = document.querySelectorAll(`${extensionsTable} ${extension}`);
    if(extension){
        replaceExtensionsEscaped(extensions);
    }
}
/* ================ Connection ================ */
var port = chrome.runtime.connect({name: "amports"});
/* ================ Listener ================ */
port.onMessage.addListener((m) => {
    const { trigger } = m;
    if (trigger === 'amportsAutoRefresh'){
        let msg = 'Failed to ';
        if(document.location.pathname.indexOf('/portal/')>-1){
            autoRefresher();
            msg = 'Successfully ';
        }
        port.postMessage({msg:msg+"triggered auto refresh"});
    }
    if (trigger === "amportsReplaceExtensions"){
        let msg = 'Failed to ';
        if(document.location.pathname.indexOf('/snow/ordering.html')>-1){
            replaceExtensions();
            msg = 'Successfully ';
        }
        port.postMessage({msg:msg+"triggered Replace Extensions"});
    }
});