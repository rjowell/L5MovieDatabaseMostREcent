$(

  function()
  {
    var searchTerm = "Star Wars";
    
    
    //console.log("one");
    $.get({

      url: "https://www.omdbapi.com/?apikey=8730a432&s="+searchTerm,
      success: function(data,textStatus,jqXHR)
        {
          //console.log("hello");
          var movieData = data["Search"];
          //console.log(data["Search"]);
          //$("#list-view > h1").append("Hello World");
          //$("#movie-details").append("Goodbye World");
          for(var x = 0;x < movieData.length; x++)
            {
              //<tr><td>Star Wars</td><td>1977</td><td>Poster Here</td></tr>
             // $("#list-view > table > tbody").append("<tr><td>"+movieData[x]["Title"]+"</td><td>"+movieData[x]["Year"]+"</td><td>"+movieData[x]["Poster"]+"</td></tr>");
 $("#list-view > table > tbody").append("<tr><td>"+movieData[x]["Title"]+"</td><td>"+movieData[x]["Year"]+"</td><td>"+"<img height=150 src='"+movieData[x]["Poster"]+"'/>"+"</td></tr>");
              
              //innerHTML
              
              
              //$("#list-view>h1").append(movieData[x]["Title"]);
              
              
            }
          //console.log(data["Search"]);
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery