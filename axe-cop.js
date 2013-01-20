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

var index = 0;
var showCurrent = function(){
    AxeCop.show(index);
    $(document).scrollTop(0);
};

$(function(){
    showCurrent();
    jwerty.key('right', function(){
	index += 1;
	showCurrent();
    });

    jwerty.key('left', function(){
	index -= 1;
	showCurrent();
    });

    jwerty.key('g', function(){
	$('#options').toggleClass('show');
    });

    $('#options').submit(function(e){
	e.preventDefault();
	var input = $(this).find('input[name="pageNum"]');
	index = parseInt(input.val(), 10);
	showCurrent();
    });
});
