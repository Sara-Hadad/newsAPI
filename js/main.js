var con = document.getElementsByClassName("dropdown-item");
var links = document.getElementsByClassName("nav-link");


var category="general"
var country="eg"
var news;

for(i=0 ; i<links.length ; i++)
 {
   links[i].addEventListener("click",function(e){
     category=(e.target.innerHTML);
   getNews()
   displayNews()


 })
 }


 for(i=0 ; i<con.length ; i++)
 {
   con[i].addEventListener("click",function(e){
    country=(e.target.innerHTML);
   getNews()
   displayNews()

 })
 }

getNews()
function getNews(){


var url =`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=fe587b8e12b84968a178c6ccfcadb298`;
var req = new XMLHttpRequest;
req.open("GET", url)
req.onreadystatechange=function()
{
    if(req.readyState==4 && req.status==200)
    {
        news= JSON.parse(req.response);
        news=news.articles;
        displayNews()
    }
}
req.send();

}



function displayNews(){
    var rows="";
    for(var i=0 ; i<news.length ; i++)
    {
        rows+=
     `<div class="col-lg-4 p-3">
     <div class="p-3 bg-light  border rounded-lg">

      <h2 class=" p-3 text-success">`+news[i].title+`</h2>
      <p class=" p-3 text-muted ">`+news[i].description+`</p>
      <img class="img-fluid rounded-lg" src="`+news[i].urlToImage+`" >
      </div>
      </div>`
        }
        document.getElementById("rows").innerHTML=rows
      
      
    
}