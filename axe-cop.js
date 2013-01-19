var ComicFinder = function(){
    var pngJpegCrossover = 117
    var that = {
	urlFor: function(number){
	    jpgOrPNG = number > pngJpegCrossover ? "jpg" : "png"
	    return "http://axecop.com/images/uploads/axecop" + number + "." + jpgOrPNG
	}
    };
    return that;
}

var ComicDisplayer = function(el){
    el[0].onload = function(){
	el.removeClass('loading');
    }
    var that = {
	show: function(url){
	    el.addClass('loading');
	    el.attr('src', url);
	}
    };

    return that;
}

AxeCop = function(){
    var comicFinder = ComicFinder();
    var comicDisplayer = ComicDisplayer($("#comic"));
    var that = {
	show: function(number){
	    url = comicFinder.urlFor(number);
	    comicDisplayer.show(url);
	}
    }

    return that;
}();
