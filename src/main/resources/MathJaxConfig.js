/* Create the necessary configuration section for MathJax */
(function () {

    var configJSON = {
        config: ["MMLorHTML.js"],
        extensions: ["tex2jax.js", "toMathML.js"],
        jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
        tex2jax: {
            inlineMath: [ ['\\($$','$$\\)'] ],
            displayMath: [ ['\\[$$', '$$\\]'] ]
        },
        TeX: {
            extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"],
            equationNumbers: {
                autoNumber: "AMS"
            }
        },
        "HTML-CSS": {
            availableFonts: ["TeX"]
        },
        showMathMenu: false,
        showMathMenuMSIE: false,
        menuSettings: {
            zoom: "Click",
            ALT: true
        }
    }

    var configText = 'MathJax.Hub.Config(' + JSON.stringify(configJSON) +');';
    var config = document.createElement('script');
    config.type = 'text/x-mathjax-config';
    if (window.opera) {
        config.innerHTML = configText;
    }
    else {
        config.text = configText;
    }
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length - 1];
    thisScript.parentNode.insertBefore(config, thisScript.nextSibling);
})();
