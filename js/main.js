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
	    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd0X3SSJcvLnRI_A8Uh9Chbd-SvnNIhXGRVF6x8O861bn7hXA/formResponse',
	    data: {"entry.1507894826":outputdata.message,"entry.997903729":outputdata.postTime},
    });
	$('#posts').append('<div class="post"><p>'+tweet.message+'</p></div>');
});