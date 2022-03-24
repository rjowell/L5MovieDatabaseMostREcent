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
          console.log(data["Search"]);
          for(var x = 0;x < movieData.length; x++)
            {
              console.log(movieData[x]["Title"]);
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