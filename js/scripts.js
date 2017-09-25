function ToDoList (listItem, listNotes) {
  this.listItem = listItem;
  this.listNotes = listNotes;
}

$(document).ready(function(){
  $("form#list-form").submit(function(event) {
    event.preventDefault();
    console.log($(this));
    var inputListItem = $("input#new-list-item").val();
    var inputListNotes = $("input#new-note").val();

    var newItem = new ToDoList(inputListItem, inputListNotes);

    $("ul#items").append(
      "<li><span class='item'>" +
      newItem.listItem +
      "</span>" +
       "<span class='remover'> Complete" +
      "</span></li>");

    $("input#new-list-item").val("");
    $("input#new-note").val("");
    $(".item").last().click(function(){
      $("#show-items").show();
      $("#show-items h2").text(newItem.listItem);
      $(".items").text(newItem.listItem);
      $(".notes").text(newItem.listNotes);
    })

    $(".remover").last().click(function(){
      $(this).parent().remove();
    })
  })
})
