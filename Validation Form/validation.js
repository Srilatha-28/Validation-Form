function CheckValidateOfBook(){
    var isbn=document.getElementById("isbnId").value;
    var booktitle=document.getElementById("booktitleId").value;
    var bookauthor=document.getElementById("bookauthorId").value;
    var publish=document.getElementById("publishId").value;

if(!isValidIsbn(isbn)){
    document.getElementById("isbnMsg").innerHTML="Enter valid ISBN number (min.length should be 5)";
    document.getElementById("isbnMsg").style.color="blue";
    return false;
}

if(!isValidBooktitle(booktitle)){
    document.getElementById("booktitleMsg").innerHTML="Enter correct book title";
    document.getElementById("booktitleMsg").style.color="blue";
    return false;
}


if(!isValidBookauthor(bookauthor)){
    document.getElementById("bookauthorMsg").innerHTML="Enter correct author for book";
    document.getElementById("bookauthorMsg").style.color="blue";
    return false;
}
if(!isValidPublish(publish)){
    document.getElementById("publishMsg").innerHTML="Enter valid publish date";
    document.getElementById("publishMsg").style.color="blue";
    return false;
}
return true;

}
function isValidIsbn(isbn){
    return (isbn.length>=5 & isbn.length<=10)?true:false;
}
function isValidBooktitle(booktitle){
    return (booktitle.length>=7)?true:false;
}
function isValidBook(author){
    return (author.length>=5)?true:false;
}
function isValidPublish(publish){
    return (publish)?true:false;
}