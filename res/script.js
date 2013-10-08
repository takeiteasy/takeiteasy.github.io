function init() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/takeiteasy/repos",
        dataType: "json",
        success: function (res) {
            var body = '',
                x = '';
            for (x in res)
                body += "<a href='" + res[x].html_url + "' target='_blank'>" + res[x].name + "</a>, ";
            $(".projects_inner").append(body.substring(0, body.length - 2));
        }
    });
    
    $(function() {
        $("#projects").click(function () {
            if ($(".projects").is(":visible"))
                $(".projects").stop().animate({ 'margin-top': '-18px' }, 'fast').fadeOut('fast').dequeue();
            else
                $(".projects").stop().animate({ 'margin-top': '18px' }, 'fast').fadeIn('fast').dequeue();
        });
    });
}