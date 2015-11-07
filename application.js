$(document).ready(function() {
  homer_position = 0;
  duffman_position = 0;
  $(document).keyup (function(event) {
    var screen_width = $("#homer_lane").css("width").slice(0, -2);
    var player_increment = (screen_width / 10);
    if (event.keyCode == 80) {
      $('#homer').css('left', ('+=' + player_increment + 'px'));
      homer_position += 10;
      if (homer_position >= 90) {
        alert("Homer wins");
      }
    }
    else if (event.keyCode == 81) {
      $('#duffman').css('left', ('+=' + player_increment + 'px'));
      duffman_position += 10
      if (duffman_position >= 90) {
        alert("Duffman wins");
      }
    }
  });
});
