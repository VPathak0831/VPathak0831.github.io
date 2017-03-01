//Link to spreadsheet
var url = 'https://docs.google.com/spreadsheets/d/1Edsp6Tc6rtA3EQeJAWdz7Jb0PHpJTc1m_cPjezs89-E/pubhtml';

$('document').ready(function(){
	//AJAX get call to spreadsheet
	$.ajax({
		method: 'GET',
		url: url,
		data: "html"
	}).done(function(data) {
		var arrayOfData = [];
		//Put data from every cell into the array
		$(data).find('.s0').each(function(){
			arrayOfData.push($(this).html());
		});
		//Remove header cells from array
		arrayOfData.splice(0,3);
		//Split posts and dates
		var doubleArray = separateArrays(arrayOfData)
		posts = doubleArray[0];
		dates = doubleArray[1];
		//Add to html
		makeTweetsAndPostThem(posts,dates);
	});
});

//Helper function to add tweets to html
function makeTweetsAndPostThem(posts,dates) {
	for(var i = 0; i < posts.length; i++) {
		var tweet = new Tweet(posts[i],dates[i]);
		$('#posts').prepend('<div class="post"><p>'+tweet.message+'</p></div>');
	}
}

//Helper function to split posts and dates
function separateArrays(array) {
	posts = [];
	dates = [];
	for(var i = 0; i < array.length; i++) {
		//The index of every post is even
		if(i%2 == 0) {
			posts.push(array[i]);
		}
		//The index of every date is odd
		else {
			dates.push(array[i]);
		}
	}
	return [posts,dates];
}

//Initialize twet object
function Tweet(message,postTime){
	this.message = message;
	this.postTime = postTime;
}

//Function to make a tweet
$('button').on('click',function(){
	var content = $('input').val();
	var tweet = new Tweet(content,Date());
	//AJAX call to post to submit to google form, which will add data to spreadsheet
    $.ajax({
	    type: "POST",
	    dataType: 'json',
	    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd0X3SSJcvLnRI_A8Uh9Chbd-SvnNIhXGRVF6x8O861bn7hXA/formResponse',
	    data: {"entry.1507894826":tweet.message,"entry.997903729":tweet.postTime},
    });
    //Put new posts at the top
	$('#posts').prepend('<div class="post"><p>'+tweet.message+'</p></div>');
});