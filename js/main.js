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
    $.ajax
    ({
    type: "POST",
    dataType : 'json',
    async: false,
    url: '../data/data.json',
    data: outputdata,
    success: function () {alert("Thanks!"); },
    failure: function() {alert("Error!");}
    });
	$('#posts').append('<div class="post"><p>'+tweet.message+'</p></div>');
});