function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    document.getElementById("html-preview").textContent = htmlCode;
    document.getElementById("css-preview").textContent = cssCode;
    document.getElementById("js-preview").textContent = jsCode;

    Prism.highlightElement(document.getElementById("html-preview"));
    Prism.highlightElement(document.getElementById("css-preview"));
    Prism.highlightElement(document.getElementById("js-preview"));

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

function saveCode() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    if (!htmlCode && !cssCode && !jsCode) {
        alert("Nothing saved");
    } else {
        localStorage.setItem("htmlCode", htmlCode);
        localStorage.setItem("cssCode", cssCode);
        localStorage.setItem("jsCode", jsCode);
        alert("Code saved successfully!");
    }
}

function refreshPage() {
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";
    document.getElementById("html-preview").textContent = "";
    document.getElementById("css-preview").textContent = "";
    document.getElementById("js-preview").textContent = "";
    document.getElementById("output").contentDocument.body.innerHTML = "";
}

// Function to detect screen size and show appropriate message
function checkScreenSize() {
    const unsupportedMessage = document.getElementById('unsupported');
    const mainContent = document.getElementById('main-content');

    if (window.innerWidth < 600) {
        unsupportedMessage.style.display = 'flex';
        mainContent.style.display = 'none';
    } else {
        unsupportedMessage.style.display = 'none';
        mainContent.style.display = 'flex';
    }
}

// Run checkScreenSize when the window is loaded and resized
window.onload = checkScreenSize;
window.onresize = checkScreenSize;
