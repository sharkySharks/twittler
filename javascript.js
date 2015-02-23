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

  /*

    while(index >= 0){
  
        var tweet = streams.home[index];
        var $tweet = $('<div></div><br>');
        var time = tweet.created_at;

      $('.following').append('<a class="'+tweet.user+'">' + tweet.user + '<br><br></a>');

      //$('.'+tweet.user+'').on('click', function(){
      //  alert('hey');
     // })

       // $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n (Time: ' + time + ')');
       // $tweet.appendTo($('.userfeed'));
        index -= 1;


      }

    
      //$('.userfeed').appendTo();
*/

for (var i =0; i<users.length; i++) {
    $('.following').append('<a class="'+users[i]+'">' + users[i] + '<br><br></a>');

    $('.'+users[i]+'').on('click', function(){
      alert('hey '); 
      //streams.home[index].message

      while(index >= 0){
        

        var tweet = streams.home[index];
        var $tweet = $('<div></div><br>');
        var time = tweet.created_at;
        $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n (Time: ' + time + ')');
        $tweet.appendTo($('.userfeed'));
        index -= 1;


      }

    })

  }





});