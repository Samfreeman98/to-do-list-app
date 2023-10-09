function newItem() {
  //New element
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  //Function to strike out list item when double clicked
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

}
