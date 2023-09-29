

//$.getJSON() STEP # 2
$(document).ready(function(){

$.getJSON("team.json", function(result){
    $.each(result, function(data) {

        console.log("Data from $.getJSON:", data);
        var $teamDiv = $("#team");

        $.each(data.team, function(index, member) {
            
            console.log("Name: " + team.name);
            console.log("Position: " + team.position);
            console.log("Bio: " + team.bio);

            var $nameheading = $("<h2>").text(team.name);
            var $positionh5 = $("<h5>").text(team.position);
            var $biopargp= $("<p>").text(team.bio);

            $teamDiv.append($nameheading, $positionh5, $biopargp);
    });
  });
});

//AJAX STEP #3

function DataAjax() {

    var $teamDisplay = $("#team");
    $teamDisplay.text("Loading....");

    $.ajax({
        url: "team.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
           console.log("Data from $.ajax:", data);
        },

        error: function(jqXHR, textStatus, errorThrown) {
            console.log("The content could not retrieved:", errorThrown);
            
        },

        complete: function() {
            $teamDisplay.append($nameheading, $positionh5, $biopargp);
        }
    });
}
});

