

function add(parm1=0,parm2,parm3){
    
    return parm1+parm2;
}

// Functions
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
function createDiv(obj) {
    let div = document.createElement("div");
    div.setAttribute("id", `AH_${obj.id}`);
    div.setAttribute("class", "example");
    if(typeof obj.ip === "string"){
        
        switch(obj.ip){
            case "gt_block":
            case "gt_build":
            case "external":
            {
                if(typeof obj === "object" && obj.hasOwnProperty("icon")){
                    let img = document.createElement("img");
                    img.setAttribute('src',obj.icon);
                    img.classList.add("fav_ico");
                    div.append(img);
                }
            }
            break;

            case "master":{
                
                let icon = document.createElement("i");
                icon.classList.add("fa");
                icon.classList.add("fa-university");
                icon.classList.add("fav_ico");
                div.append(icon);
            }
            break;
            case "user":{
                let icon = document.createElement("i");
                icon.classList.add("fa");
                icon.classList.add("fa-male");
                icon.classList.add("fav_ico");
                div.append(icon);
            }
            break;
        }
        

    }
    let text=document.createTextNode(obj.name);
    div.append(text);
    return div;
}
function createHeader(title, id, toggleHeader) {
    let icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-toggle-off");
    icon.setAttribute("id", `icon_toggle_${id}`);
    //Label
    let div = document.createElement("label");
    div.setAttribute("id", `lbl_${id}`);
    div.setAttribute("class", "headers");
    div.append(icon);
    div.innerHTML += title;
    div.addEventListener('click', toggleHeader);
    // Create Label Container
    let container = document.createElement("div");
    container.setAttribute("id", `cntnr_${id}`);
    container.setAttribute("class", "hide");
    // Append
    let body = document.querySelector("#body");
    !!body && body.append(div);
    !!body && body.append(container);
    return container;
}
function envTabGen(paths, el) {
    let body = el || document.querySelector("#body");
    if (!!body) {
        for (let i = 0; i < paths.length; i++) {
            let btn = createDiv(paths[i]);
            // let btn = document.querySelector(`#${paths[i].id}`);
            !!btn && btn.addEventListener('click', (e) => {
                goTo(paths[i].path, paths[i].ip);
            });
            body.append(btn);
        }
    }
}
function sendRedirect(url) {
    chrome.tabs.create({ url: url });
}
function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true);
    }else if(/^\w{3,}:\d{1,5}$/.test(ipaddress)){
        return (true);
    }else if(/^[\w\.\-]+corp.amdocs.com$/.test(ipaddress)){
        return (true);
    }
    return (false);
}
function recreateUI(arr) {
    let div = document.createElement("div");
    // div.classList.add("hide");
    div.classList.add("UI_content");
    //ID???
    // div.setAttribute('id','');

    /*
    {
        "tag": "a", 
        "attributes":{
            "href":"https://github.com/rjsf-team/react-jsonschema-form"
        },
        "text":"rjsf: repository"
    }
    */
    for (let el of arr) {
        let tag = document.createElement(el["tag"]);
        for (let att in el["attributes"]) {
            tag.setAttribute(att, el["attributes"][att]);
        }
        tag.innerText = el["text"];
        div.appendChild(tag);
    }
    return div;
}
function scriptCreator(src) {
    let script = document.createElement('script');
    if (!!script) {
        if (src !== '') {
            src = "tools_files/" + src;
        }
        script.setAttribute('src', src);
    }
    return script;
}
function appendBolckUI(obj) {
    // Container Div
    let outterHtml = document.createElement("div");
    outterHtml.id = "outterHtml_block";
    // Pre-Script
    let pre_script = scriptCreator(obj["pre_script"]);
    outterHtml.appendChild(pre_script);
    // Styles
    let css = document.createElement("style");
    !!css && css.appendChild(document.createTextNode(obj["css"]));
    outterHtml.appendChild(css);
    // Inner HTML
    let innerhtml = document.createElement("div");
    innerhtml.id = "innerHtml_block";
    !!innerhtml && (innerhtml.innerHTML = obj["html"]);
    outterHtml.appendChild(innerhtml);
    // Post-Script
    let post_script = scriptCreator(obj["post_script"]);
    outterHtml.appendChild(post_script);
    // Return
    return outterHtml;
    // return (
    //     `<script>${obj["pre_script"]}</script>
    //      <style>${obj["css"]}</style>
    //      <div id="innerHtml_block">
    //         ${obj["html"]}
    //      </div>
    //      <script type='text/javascript'>${obj["post_script"]}</script>`
    // );
}
function getTheIdedDiv(obj, block, build) {
    let div = document.createElement("div");
    div.setAttribute("id", `toggle_${obj["id"]}`);
    div.classList.add("hide");
    if (obj.ip === "gt_block") {
        let str = appendBolckUI(block[obj.path]);
        div.append(str);
    } else if (obj.ip === "gt_build") {
        let innerDiv = recreateUI(build[obj.path]);
        div.append(innerDiv);
    }
    return div;
}
function createBlockNBuild(arr, block, build, el) {
    let body = el || document.querySelector("#body");
    if (!!body) {
        for (let el of arr) {
            let btn = createDiv(el);
            let innerDiv = getTheIdedDiv(el, block, build);

            btn.append(innerDiv);

            !!btn && btn.addEventListener('click', (e) => {
                let el_target = e.target;
                if (!!el_target) {
                    let div = el_target.querySelector(`#toggle_${el["id"]}`);
                    !!div && div.classList.toggle("hide");
                }
            });
            body.append(btn);
        }
    }
}
function goTo(path, pref_ip) {
    if (pref_ip === "external") {
        sendRedirect(`http://${path}`);
    } else if (pref_ip === "gt") {

    } else {
        let ip_container = document.querySelector(`#${pref_ip}_ip>input`);
        let ip = ip_container.value;
        // Check IP format
        if (ValidateIPaddress(ip)) {
            sendRedirect(`http://${ip}/${path}`);
        } else {
            //Validation failed
        }
    }

}
function toggleClass(e, add, style) {
    if (add) {
        (!e.classList.contains(style)) && e.classList.add(style);
    } else {
        (e.classList.contains(style)) && e.classList.remove(style);
    }
}
function enabletoggle(e) {
    let trg = e.target;
    let prnt = trg.parentElement;
    let input = prnt.querySelector('input');
    let cookie_name = "amdocs_usr_cookie";
    // Reset error class
    toggleClass(input, false, 'red_border');
    //cookie name
    if (prnt.id.indexOf('master') > -1) {
        cookie_name = "amdocs_mstr_cookie";
    }
    // input handling
    if (!input.disabled) {
        // disable edit
        if (ValidateIPaddress(input.value)) {
            trg.innerText = "Edit";
            setCookie(cookie_name, input.value, 30);
            input.disabled = !input.disabled;
            readCookieDate();
        } else {
            // Error Handle
            toggleClass(input, true, 'red_border');
        }
    } else {
        // Enable edit
        trg.innerText = "Done";
        input.disabled = !input.disabled;
    }
}
function toggleHeader(e) {
    let target = e.target;
    let id = target.id;
    if (typeof id === 'string') {
        let real = id.substring(id.indexOf('lbl_') + 'lbl_'.length);
        if (real.length) {
            let container = document.querySelector(`#cntnr_${real}`);
            if (container) {
                let added = container.classList.toggle('hide');
                let icon = target.querySelector(`i#icon_toggle_${real}`);
                if (icon) {
                    icon.classList.toggle("fa-toggle-on");
                    icon.classList.toggle("fa-toggle-off");
                }
            }
        }
    }
}

// COOKIESSSSSSS
// Set a Cookie
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    setCookieDate(cName+"_date",date.toUTCString());
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
function setCookieDate(cName,cValue){
    const expires = "expires=" + cValue;
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
// Set a Cookie
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}
function refreshCookie(){
    let master_ip = getCookie("amdocs_mstr_cookie");
    let user_ip = getCookie("amdocs_usr_cookie");

    !!master_ip && setCookie("amdocs_mstr_cookie", master_ip, 30);
    !!user_ip && setCookie("amdocs_usr_cookie", user_ip, 30);

    readCookieDate();
}
function deleteCookie(){
    setCookie("amdocs_mstr_cookie","",-1);
    setCookie("amdocs_usr_cookie","",-1);
    // master
    let ip_container = document.querySelector(`#master_ip>input`);
    !!ip_container && (ip_container.value = "127.0.0.1");
    // user
    ip_container = document.querySelector(`#user_ip>input`);
    !!ip_container && (ip_container.value = "127.0.0.1");

    readCookieDate("Cookie Deleted - YYYY/MM/DD");
}
function readCookieDate(custom){
    let master_ip_date,user_ip_date;
    if(!custom){
        // Date Reading
        master_ip_date = getCookie("amdocs_mstr_cookie_date");
        user_ip_date = getCookie("amdocs_usr_cookie_date");
        !master_ip_date && (master_ip_date = "YYYY/MM/DD");
        !user_ip_date && (user_ip_date = "YYYY/MM/DD");
    }else{
        master_ip_date=user_ip_date=custom;
    }
    // master
    let ip_container = document.querySelector(`#cookie_control #master_date`);
    !!ip_container && (ip_container.innerText = master_ip_date);
    // user
    ip_container = document.querySelector(`#cookie_control #user_date`);
    !!ip_container && (ip_container.innerText = user_ip_date);
}
function readCookie() {
    // IP reading
    let master_ip = getCookie("amdocs_mstr_cookie");
    let user_ip = getCookie("amdocs_usr_cookie");
    !master_ip && (master_ip = "127.0.0.1");
    !user_ip && (user_ip = "127.0.0.1");
    
    // master
    let ip_container = document.querySelector(`#master_ip>input`);
    !!ip_container && (ip_container.value = master_ip);
    
    // user
    ip_container = document.querySelector(`#user_ip>input`);
    !!ip_container && (ip_container.value = user_ip);
    
    readCookieDate();
}



// Initilizing
docReady(() => {
    // Logo URL
    let logo = document.querySelector("img#logo");
    !!logo && logo.addEventListener('click', (e) => {
        sendRedirect(amdocs_logo);
    });

    // Click Event Listner
    let edits = document.querySelectorAll('div#master_ip>button,div#user_ip>button');
    edits.forEach((el) => {
        el.addEventListener('click', enabletoggle);
    });

    //Cookie Control
    let delete_i=document.querySelector("#i_trash");
    !!delete_i && delete_i.addEventListener('click',deleteCookie);
    let refresh_i=document.querySelector("#i_refresh");
    !!refresh_i && refresh_i.addEventListener('click',refreshCookie);

    // IP Master & User read from cookie
    readCookie();

    // Tabs
    let el = createHeader("Enviroment Tabs", "tabs", toggleHeader);
    envTabGen(paths, el);
    // Tools
    el = createHeader("Tools", "tools", toggleHeader);
    envTabGen(tools, el);
    // GT Converter
    el = createHeader("Personalized Tools", "personalized_tools", toggleHeader);
    createBlockNBuild(gt_tools, innerHtml_block, innerHtml_build, el);
});