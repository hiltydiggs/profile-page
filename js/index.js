$(document).ready(function(){
  $('#weather').mouseover(function(){
    $('#weather-img').attr('src', 'http://learningdevsite.com/resources/images/weather-app-screenshot.PNG');
  });

  $('#weather').mouseout(function(){
    $('#weather-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/clouds.png');
  });

  $('#quote').mouseover(function(){
    $('#quote-img').attr('src', 'http://learningdevsite.com/resources/images/random-quote-screenshot.PNG');
  });

  $('#quote').mouseout(function(){
    $('#quote-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/quote.png');
  });

  $('#clock').mouseover(function(){
    $('#clock-img').attr('src', 'http://learningdevsite.com/resources/images/pomodoro-clock-screenshot.PNG');
  });

  $('#clock').mouseout(function(){
    $('#clock-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/clock.png');
  });

  $('#twitch').mouseover(function(){
    $('#twitch-img').attr('src', 'http://learningdevsite.com/resources/images/twitch-status-screenshot.PNG');
  });

  $('#twitch').mouseout(function(){
    $('#twitch-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/twitch.png');
  });

  $('#calculator').mouseover(function(){
    $('#calculator-img').attr('src', 'http://learningdevsite.com/resources/images/calculator-screenshot.PNG');
  });

  $('#calculator').mouseout(function(){
    $('#calculator-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/calculator.png');
  });

  $('#tic-tac-toe').mouseover(function(){
    $('#tic-tac-toe-img').attr('src', 'http://learningdevsite.com/resources/images/tic-tac-toe-screenshot.PNG');
  });

  $('#tic-tac-toe').mouseout(function(){
    $('#tic-tac-toe-img').attr('src', 'http://learningdevsite.com/learning/fcc-personal-portfolio/resources/tic-tac-toe.png');
  });
});
