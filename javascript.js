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



  for (var i =0; i<users.length; i++) {
    $('.following').append('<a class="'+users[i]+'" data-user="'+users[i]+'">' + users[i] + '<br><br></a>');

    $('.'+users[i]+'').on('click', function(e){
      console.log('event',e, 'streams.home[e]', streams.home[e]);

      var tweets = streams.users[e.target.dataset.user];

      $('.timelineHeader').empty();
      $('.feed1').empty();
      $('<div class="timelineHeader"><h3>'+ tweets[0].user + "'s Timeline</h3><div>").prependTo($('.feed1'));

      for (var i=0; i<tweets.length; i++){
        var msgs = tweets[i].message;
        var user = tweets[i].user;
        var $tweet = $('<div></div><br>');
        var time = tweet.created_at;
        $tweet.text('@' + user + ': ' + msgs + '\n (Time: ' + time + ')');
        
        $tweet.appendTo($('.feed1'));

      }

    })

  }


});