function Tweet(message,postTime){
	this.message = message;
	this.postTime = postTime;
	var getMessage = function(){
		return this.message;
	}
	var getTimePosted = function(){
		return this.postTime;
	}
}

$('button').on('click',function(){
	var content = $('input').val();
	var tweet = new Tweet(content,Date());
	var outputdata = JSON.stringify(tweet);
    $.ajax({
	    type: "POST",
	    dataType: 'json',
	    url: 'https://VPathak0831.github.io/data/data.json',
	    data: {outputdata},
    });
	$('#posts').append('<div class="post"><p>'+tweet.message+'</p></div>');
});