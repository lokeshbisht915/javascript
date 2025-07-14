//first of all we have create an post object using constructor function. but the user didn't posted it yet. 

let post1 = new post() ;

function post(title, body, author, views, comments:{author,body}, islive) {

return{

this.title = title, 
this.body = body, 
this.author = author,
this.views = view, 
this.comments = {
author : author, 
body : body
}
this.islive = islive
}
}

