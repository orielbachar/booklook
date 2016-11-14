var books =
  {time: "25",
  bookName:"Harry Potter",
  synopsis:"Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel, first published in 1997 by Bloomsbury.",
  author: "J.K. Rowling",
  image: "http://vignette4.wikia.nocookie.net/harrypotter/images/8/8d/Harry_potter_and_the_sorcerer's_stone_poster.jpg"
}


var source = $('#book-template').html();
var template = Handlebars.compile(source);
var newHTML = template(books);

$('#info-book').append(newHTML);
