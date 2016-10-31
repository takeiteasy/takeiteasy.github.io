Array.prototype.contains = function(obj) {
  return !!~this.indexOf(obj)
}

$(document).ready(function() {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd';
  function animate_one(elem, animation, hide=false) {
    $(elem).addClass('animated ' + animation).one(animationEnd, function() {
      $(elem).removeClass('animated ' + animation);
      if (hide) {
        $(elem).hide();
      }
    });
  }

  $('#projects').on('click', function() {
    animate_one('#first', 'bounceOutLeft', true);
    $('#second').show();
    animate_one('#second', 'bounceInRight');
  });

  $('#goback').on('click', function() {
    $('#first').show();
    animate_one('#second', 'bounceOutUp', true);
  });

  var main = ['tripping', 'doujin-db', 'xget', 'anime-ren', 'xnzb'];
  var lang_bgcol = {
    "Python":       "#3572A5",
    "CoffeeScript": "#244776",
    "C":            "#888888",
    "Ruby":         "#b92122",
    "JavaScript":   "#fcd56e",
    "Shell":        "#89e051",
    "Perl":         "#0298c3",
    "C++":          "#f34b7d",
    "PHP":          "#4F5D95",
    "D":            "#ba595e",
    "C#":           "#178600",
    "VimL":         "#199f4b",
    "HTML":         "#e44b23",
    "CSS":          "#563d7c"
  };
  $.ajax({
    type:     "GET",
    url:      "https://api.github.com/users/takeiteasy/repos",
    dataType: "json",
    success:  function (r) {
      for (x in r) {
        if (!isNaN(x))
          $('#projects_' + (main.contains(r[x].name) ? 'a' : 'b')).append('<div class="project_title_box"><span class="project_title">' + r[x].name + '</span><br/>' + (r[x].description === null ? '' : '<span class="project_subtitle">' + r[x].description + '</span>') + '<div class="project_title_lang"><span class="language-text">' + r[x].language + '</span><div class="language-cirlce" style="background-color: ' + lang_bgcol[r[x].language] + '"></div></div></div>');
      }
    },
    error: function () {
      $("#projects_list").html("ERROR! Failed to retrieve projects from Github!<br/><a href='https://github.com/takeiteasy?tab=repositories'>Click here instead</a>");
    }
  });
});