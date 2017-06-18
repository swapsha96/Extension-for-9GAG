function searchGIF(input) {
    if(input.length > 2) {
        var keyword = input.split(" ");
        var result = [];
        $("#result").html("");
        for(var i = 0; i < data.length; i++) {
            for(var j = 0; j < keyword.length; j++) {
                if(data[i][1].search(keyword[j]) != -1) {
                    result.push(data[i]);
                }
            }
        }
        if(result.length > 0 ) {
            for(var i = 0; i < result.length; i++) {
                $("#result").append("<img id=\"gif\" src='" + result[i][0] + "'/>");
            }
        }
    }
    else if(input.length == 0) {
        $("#result").html("");
    }
}
$(document).ready(function() {
    $("#search_input").keyup(function(e) {
        if(e.keyCode == 13) {
            var input = ($("#search_input").val()).trim();
            searchGIF(input);
        }
    });
    $("#search_button").click(function() {
        var input = ($("#search_input").val()).trim();
        searchGIF(input);
    });
    $('body').on('click','img',function(){
        var link = $(this).attr("src");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(link).select();
        document.execCommand("copy");
        $temp.remove();
        window.close();
        open(location, '_self').close();
    });
});
