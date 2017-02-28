var url = 'https://docs.google.com/spreadsheets/d/1Edsp6Tc6rtA3EQeJAWdz7Jb0PHpJTc1m_cPjezs89-E/pubhtml';

$('document').ready(function(){
	console.log("got here");
	$.ajax({
		method: 'GET',
		url: url
	}).done(function(data) {
		console.log(data);
	});
});

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
    $.ajax({
	    type: "POST",
	    dataType: 'json',
	    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd0X3SSJcvLnRI_A8Uh9Chbd-SvnNIhXGRVF6x8O861bn7hXA/formResponse',
	    data: {"entry.1507894826":tweet.message,"entry.997903729":tweet.postTime},
    });
	$('#posts').append('<div class="post"><p>'+tweet.message+'</p></div>');
});


