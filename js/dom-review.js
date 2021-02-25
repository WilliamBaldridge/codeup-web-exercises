
// ================= Review, pt deux =================

/*
    TODO: When a list item inside of .data-example-container is clicked,
     -return its data-value attribute value to the element with an id of #show-data-attr
*/

{
    function returnDataValue() {
        console.log(this)
        let dataValues = $(this).attr("data-value");
        // let dataValues = $(this).data("value");
        console.log(dataValues);
        return $("#show-data-attr").text(dataValues);
    }

    $(".data-example-container li").click(returnDataValue);

}

/*
    TODO: When a list item inside of .data-example-container is double clicked,
     -return its text value to the all elements with a class of .show-list-item-text
 */

{
    function returnTextValue() {
        let dataValues = $(this).text();
        return $(".show-list-item-text").text(dataValues);
    }

    $(".data-example-container li").dblclick(returnTextValue);

}

/*

    TODO: When an immediate child element of the parent with an id of #hover-container is hovered
     -change the child's text to 'You are hovering here!' and
     -add a border to the child.
     -Be sure to reset the text and border upon hovering out

 */

{
    let originalText = "";

    function hoverIn() {
        originalText = $(this).text();
        let textInsert = "You are hovering here!";
        return $(this).text(textInsert)
            .css("border", "1px solid black");
    }

    function hoverOut() {
        console.log(originalText);
        $(this).text(originalText).css("border", "");
    }

    $("#hover-container").children().hover(hoverIn, hoverOut);
}

/*

    TODO: When an element with the class of .background-color-change is clicked,
     -cycle between background-colors of 'red', 'blue', 'green', and back to the default
     -the colors should change in the above order
     -only affect one element at a time

 */



/*

    TODO: When a user enters a string (and only a string) into the input of id #input,
     -concatenate that string to what is already in the element with an id of #output
     -when the user double clicks the element with an id #output
     -the string resets to its original text

*/














