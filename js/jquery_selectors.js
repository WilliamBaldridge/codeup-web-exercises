$(document).ready(function () {
    // ID Selectors section
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px"); // gives duplicate jQuery selector warning because IJ is recommending to daisy chain .css on the first jQuery selector for multiple edits, which can include .html edits then .css in same line!! ;)
    // var idAlert = $("#reason-header").html();
    // alert(idAlert);
    // alert($("#rhyme-header").text());


    // Class Selectors lesson
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px");
    // $(".codeup").css({"border": "1px solid red", "background-color": "#333333"}); // "background-color here is overwriting the ".container" color as code is read last


    // Element Selectors
    $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    $(".container").css("background-color", "#333333");
    $(".container").css("padding", "50px");
    $("li").css("font-size", "20px");
    $("h1, p, li").css("background-color", "#666666");
    alert($("h1").text());
    $("h1").each(function () {
        alert($(this).html());
    });
    $(".codeup").css({"border": "1px solid red", "background-color": "#333333"});
});