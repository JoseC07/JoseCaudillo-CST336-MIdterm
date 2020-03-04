
// var submit = document.querySelector('.Submit');
// var guessField = document.querySelector('.guessField');
// // var image = 
// var userAnswer = '';
// var orientation = 'horizontal';
// var arrPics = [];
// guessField.focus();//focus mouse on field

 
    var userAnswer = '0451526538'
    console.log($('.field').val());


    $.ajax({
        method: "GET",
            url: "https://openlibrary.org/api/books?bibkeys=ISBN:"+encodeURIComponent(userAnswer)+"&format=json&jscmd=data",
        dataType: "json",
            data: { "author": userAnswer },
        success: function(result) {
            console.log('hello1');
            console.log(result);
        }
    });
// submit.addEventListener('click', submitChoice);

