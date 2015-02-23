$(document).ready(function(){
  


  //var $body = $('body');
  //$body.html('');
  var $feed = $('.feed');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div><br>');
    var time = tweet.created_at;
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n (Time: ' + time + ')');
    $tweet.appendTo($('.feed2'));
    index -= 1;
  }
  streams.home =[] 

  $('.tweetButton').on('click', function(){
    
    var $feed = $('.feed');
    var index = streams.home.length - 1;
    $('.feed4').empty();
    $($('.feed3').contents()).appendTo('.feed4');
    $($('.feed2').contents()).appendTo('.feed3');
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div><br>');
      var time = tweet.created_at;
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n (Time: ' + time + ')');
      $tweet.appendTo($('.feed2'));
      index -= 1;
    }
     
    streams.home =[]  
  })



});