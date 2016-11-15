var fetch = function(isbn){
var _url =  'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
$.ajax({
  method: "GET",
  url:_url,
  dataType: "json",
  success: function(data) {
    console.log(data);
    displayBook(data);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }
});
};

$(".btn-primary").on("click", function(){
  var isbn = $('#txtIsbn').val();
  fetch(isbn);

});

function displayBook(data){
  if(data.totalItems){
    var newbook = {
    title: data.items[0].volumeInfo.title,
    author: data.items[0].volumeInfo.authors,
    description: data.items[0].volumeInfo.description,
    image: data.items[0].volumeInfo.imageLinks.thumbnail,
    pages: data.items[0].volumeInfo.pageCount
  }
  var source = $('#book-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(newbook);
  $('#info-book').empty();
  $('#info-book').append(newHTML);

}
}
//
// var books =
//   {time: "25",
//   bookName:"Harry Potter",
//   synopsis:"Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel, first published in 1997 by Bloomsbury.",
//   author: "J.K. Rowling",
//   image: "http://vignette4.wikia.nocookie.net/harrypotter/images/8/8d/Harry_potter_and_the_sorcerer's_stone_poster.jpg"
// }
//
