$(document).ready(function(){

    // Test with elements already in html
    
    var $source = $("#source");
    var $show = $("#sel");

    var S = new select_and_show(
	$source,
	$show, 
	function ()
	{
	    console.log('before: ' + this.before);
	    console.log('selection: ' + this.select);
	    console.log('after: ' + this.after);
	}
    );

    // Test with elements added in html,
    // object created once elements added

    $source = $('<p>',
		     {
			 'class': "texte",
		     });

    $show = $('<p>',
		     {
			 'class': "texte",
		     });

    $("#test").append([ $source, $show ]);

    $source.text("Test with elements added in html, object created once elements added.");
    
    var S2 = new select_and_show(
	$source,
	$show,
	function ()
	{
	    console.log('before: ' + this.before);
	    console.log('selection: ' + this.select);
	    console.log('after: ' + this.after);
	}
    );

    // Test with elements added in html,
    // object created *before* elements are added
    // BUG: will yield console error 'The given range isn't in document'
    // TODO: test null or something when no range / selection

    $source = $('<p>',
		     {
			 'class': "texte",
		     });

    $show = $('<p>',
		     {
			 'class': "texte",
		     });

    var S3 = new select_and_show(
	$source,
	$show,
	function ()
	{
	}
    );

    $source.text("Test with elements added in html, object created *before* elements are added");
    
    $("#test").append([ $source, $show ]);
    
});
