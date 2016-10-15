$(function() {
	$.ajax(
	{
	    url: 'https://www.codeschool.com/users/2067316.json',
	    dataType: 'jsonp',
	    success: function(response)
	    {
	    	displayBadges(response.courses.completed);
	    }
	});
  
	var displayBadges = function (badges)
	{
		badges.sort(compareBadgesByTitle);
		$(badges).each(function(index) {
			jQuery('<div/>', {
			    class: 'course'
			}).appendTo("#badges");
		});

		$(".course").each(function(index) {
			jQuery('<h3/>', {
				text: badges[index].title
			}).appendTo(this);
			jQuery('<img/>', {
				'src': badges[index].badge
			}).appendTo(this);
			jQuery('<a/>', {
				'href': badges[index].url,
				'target': '_blank',
				'text': 'See Course'
			}).addClass("btn btn-primary").appendTo(this);
		});
	};

	var compareBadgesByTitle = function (a, b)
	{
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	}
});
