$(document).ready(function(){
  


  //var $body = $('body');
  //$body.html('');
  var $feed = $('.feed');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div><br>');
    var time = tweet.created_at;
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n Time: ' + time);
    $tweet.appendTo($feed);
    index -= 1;

    console.log('tweet.user:   ' + tweet.user + '  message: ' + tweet.message)

  }

  streams.home =[] 

  $('.tweetButton').on('click', function(){
    
      var $feed = $('.feed');
      var index = streams.home.length - 1;
      while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div><br>');
      var time = tweet.created_at;
      $tweet.text('@' + tweet.user + ':      ' + tweet.message + '\n Time: ' + time);
      
      $tweet.insertAfter($('.tweetButton'));
      index -= 1;

    }
     streams.home =[] 
    
  })

  //var tweet = streams.home[index];

  //console.log("users: " + users + " streams: " + tweet);

/*      

  window.streams = {};
  streams.home = [];
  streams.users = {};
  streams.users.shawndrost = [];
  streams.users.sharksforcheap = [];
  streams.users.mracus = [];
  streams.users.douglascalhoun = [];
  window.users = Object.keys(streams.users);

*/


});