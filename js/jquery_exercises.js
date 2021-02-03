// $(document).ready(function () {
//     alert("The DOM has finished loading")
// });


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
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px");
    // $("li").css("font-size", "20px");
    // $("h1, p, li").css("background-color", "#666666");
    // alert($("h1").text());
    // $("h1").each(function () {
    //     alert($(this).html());
    // });
    // $(".codeup").css({"border": "1px solid red", "background-color": "#333333"});


    // jQuery events
    // // Mouse events
    // let headerOne = $("h1");
    // let changeBGOnClick = function () {
    //     $(this).css("background-color", "beige");
    // }
    // headerOne.click(changeBGOnClick);
    //
    // let paragraphs = $("p");
    // let changeFontSizeDblClick = function () {
    //     $(this).css("font-size", "18px");
    // }
    // paragraphs.dblclick(changeFontSizeDblClick);
    //
    // let listItems = $("li");
    // let onMouseHover = function () {
    //     $(this).css("color", "red");
    // }
    // let offMouseHover = function () {
    //     $(this).css("color", "");
    // }
    // listItems.hover(onMouseHover, offMouseHover);


    // Keyboard events
    (function () {

        let container = $(".container");

        function addDOAHover(elementsToBind) {

            let dOAHover = function () {
                $(this).css({
                    "padding": "400px",
                    // "background": "linearGradient, white",
                    "background-color": "#db2525",
                    "transition": "3s"
                });
                $(this).html("<h1> You have died!</h1> <h1>Enter password to continue, or esc to return to main menu...</h1>").css({
                    "width": "300px",
                    "height": "100px",
                });
            }
            elementsToBind.hover(dOAHover);
            // elementsToBind.off("keyup", "keycode: === 27");
        }

        addDOAHover(container);

        // let passwordForm = $("input");
        let dOMInput = $(document);

        let mainMenu = function () {
            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    alert("Refresh page to begin new game");
                }
            });
        }

        mainMenu(dOMInput);


        let secretHiddenPW = function () {
            let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66, 13]
            let count = 0;
            let start = false;

            $(document).keypress(function (e) {
                let codeReset = function () {
                    start = false;
                    count = 0;
                    return;
                };

                let keyInput = e.value;
                console.log(keyInput);

                if (!start) {
                    if (keyInput === 38) {
                        start = true;
                    }
                }

                if (start) {
                    if (konamiCode[count] === keyInput) {
                        count += 1;
                    } else {
                        codeReset();
                    }
                    if (count == 11) {
                        alert("You have added 30 lives!");
                        codeReset();
                    }
                } else {
                    codeReset();
                }

                // dOMInput.validate( {
                //     rules: {
                //         equalTo: [
                //             e.which === 38,
                //             e.which === 38,
                //             e.which === 40,
                //             e.which === 40,
                //             e.which === 37,
                //             e.which === 39,
                //             e.which === 37,
                //             e.which === 39,
                //             e.which === 65,
                //             e.which === 66,
                //             e.which === 13,
                //         ]
                //     },
                // messages: {
                //     password: {
                //
                //     }
                // }
                // })
                //     if (e.which === 38) {
                //         if (e.which === 38) {
                //             if (e.which === 40) {
                //                 if (e.which === 40) {
                //                     if (e.which === 37) {
                //                         if (e.which === 39) {
                //                             if (e.which === 37) {
                //                                 if (e.which === 39) {
                //                                     if (e.which === 65) {
                //                                         if (e.which === 66) {
                //                                             if (e.which === 13) {
                //                                                 alert("grats");
                //                                             }
                //                                         }
                //                                     }
                //                                 }
                //                             }
                //                         }
                //                     }
                //                 }
                //             }
                //         }
                //     }
            })
        }
        // switch (secretPW) {
        //     case "up1":
        //         e.keyCode = 38;
        //         break;
        //     case "up2":
        //         e.keyCode = 38;
        //         break;
        //     case "down1":
        //         e.keyCode = 40;
        //         break;
        //     case "down2":
        //         e.keyCode = 40;
        //         break;
        //     case "left1":
        //         e.keyCode = 37;
        //         break;
        //     case "right1":
        //         e.keyCode = 39;
        //         break;
        //     case "left2":
        //         e.keyCode = 37;
        //         break;
        //     case "right2":
        //         e.keyCode = 39;
        //         break;
        //     case "a":
        //         e.keyCode = 65;
        //         break;
        //     case "b":
        //         e.keyCode = 66;
        //         break;
        //     case "enter":
        //         e.keyCode = 13;
        //         break;
        //     default:
        //         location.reload();
        // }
        // });


        secretHiddenPW(dOMInput);


    })();


});