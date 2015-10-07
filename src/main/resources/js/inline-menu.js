var updateMacro = function(macroNode, param) {
    var $macroDiv = AJS.$(macroNode);
    AJS.Rte.getEditor().selection.select($macroDiv[0]);
    AJS.Rte.BookmarkManager.storeBookmark();

    var macroRenderRequest = {
        contentId: Confluence.Editor.getContentId(),
        macro: {
            name: "mathinline",
            params: {"formula": param},
            defaultParameterValue: "",
            body : ""
        }
    };

    tinymce.confluence.MacroUtils.insertMacro(macroRenderRequest);
};

AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("0", function(e, macroNode) {
    updateMacro(macroNode, "formula");
});