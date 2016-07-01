//Problem:  It wraps the heading when the width of the page shrinks.
//Solution: Hide the text links and swap them out based on width.


//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option");
  
  //Deal with selected options depending on current page.
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
 
  //option's value is the href of the link
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

//Bind click to button
$select.change(function(){
  //go to selects location
  window.location = $select.val();
});



