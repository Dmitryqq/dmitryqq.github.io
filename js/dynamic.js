$(document).ready(function() {
    $(".add-element").click(function() {
        // var lastField = $("#education-part div:first").clone();
        var parent = $(this).parent();
        console.log(parent.attr("id"));


        // var lastField = parent.children('div:first-child').clone().find("input").val(null).end();
        var lastField = parent.children('div').first().clone().find("input").val(null).end();
        // var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        // var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        // fieldWrapper.data("idx", intId);
        // var fName = $("<input type=\"text\" class=\"fieldname\" />");
        // var removeButton = $("<button class=\"btn btn-danger\">Удалить</button>");
        var removeButton = $("<div class=\"col-md-12 element-button-container\"><button class=\"btn btn-danger\">Удалить</button></div>");
        // var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function() {
            lastField.remove();
        });
        // fieldWrapper.append(lastField.clone());
        // fieldWrapper.append(removeButton);
        lastField.append(removeButton);
        $("#" + parent.attr("id") + " > div").last().after(lastField);
        // $("#" + parent.attr("id")).append(lastField);
        // $(this).parent().append(lastField);
        // $(this).parent().siblings('div:eq(0)').after(lastField)
        // lastField.insertAfter($(this).parent().children(':last-child'));
    });
});