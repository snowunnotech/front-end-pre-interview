$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            status: 'allBooks',
            bookId: '',
            navTitle: '',
            author: '',
            publicationDate: '',
            description: '',
            loadedPages: 1,
            books: []
        },
        mounted(){
            fetch("https://demo.api-platform.com/books?page=1")
            .then(response => response.json())
            .then((response) => {
                this.books = response["hydra:member"];
            });
        },
        methods: {
            showDescription(){
                var self = this;
                $('.book-wrapper').click(function(e){
                    e.stopPropagation();
                    self.status = 'description';
                    self.navTitle = $(this).find('div.title').text().substring(0,16)+'...';
                    self.author = $(this).find('span.author').text();
                    self.publicationDate = $(this).find('span.publicationDate').text();
                    self.description = $(this).find('div.book-description-hide').text();
                    self.bookId = $(this).find().text('div.bookId');
                });
            },
            goBackToAllBooks(){
                this.status = 'allBooks';
            },
            showAddNewBook(){
                this.status = 'addNewBook';
            },
            saveAdded(){
                var newBook = {}
                newBook['title'] = $('.addTitle').val();
                newBook['author'] = $('.addAuthor').val();
                newBook['publicationDate'] = $('.addCreatedAt').val();
                newBook['description'] = $('.addDescription').val();
                if(newBook['title'] === '' || newBook['author'] === '' || newBook['publicationDate'] === '' || newBook['description'] === ''){
                    alert('Please fullfill the blank!');
                } else {
                    this.books.push(newBook);
                    var url = `https://demo.api-platform.com/books`;
                    var data = {
                        "isbn": "string",
                        "title": `${newBook['title']}`,
                        "description": `${newBook['description']}`,
                        "author": `${newBook['author']}`,
                        "publicationDate": `${newBook['publicationDate']}`,
                        "cover": "string",
                        "reviews": [
                            {
                            "body": "string",
                            "rating": 0,
                            "author": "string",
                            "publicationDate": "2020-04-17T14:14:54.084Z"
                            }
                        ]
                    };
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
                    alert('Your book is just created!');
                }
            },
            editBook(){
                this.status = 'editing';
            },
            saveEdited(){
                var url = `https://demo.api-platform.com/books/books/${this.bookId}`;
                var editedAuthor = $('.editAuthor').val();
                var editedPublicationDate = $('.editPublicationDate').val();
                var editedDescription = $('.editDescription').val();
                var data = {
                    "isbn": "string",
                    "title": this.navTitle,
                    "description": editedDescription,
                    "author": editedAuthor,
                    "publicationDate": editedPublicationDate,
                    "cover": "string",
                    "reviews": [
                        {
                            "body": "string",
                            "rating": 0,
                            "author": "string",
                            "publicationDate": "2020-04-17T13:57:22.194Z"
                        }
                    ]
                };
                fetch(url, {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                    headers: new Headers({
                    'Content-Type': 'application/json'
                    })
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
            },
            loadMore(){
                this.loadedPages++;
                fetch(`https://demo.api-platform.com/books?page=${this.loadedPages}`)
                .then(response => response.json())
                .then((response) => {
                    for(var i=0;i<=response["hydra:member"].length-1;i++){
                        this.books.push(response["hydra:member"][i]);
                    } 
                });
            }
        }
    });
});