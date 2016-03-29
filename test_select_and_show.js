$(document).ready(function(){

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

    $source = $('<p>',
		     {
			 'class': "texte",
		     });

    $show = $('<p>',
		     {
			 'class': "texte",
		     });

    $("#test").append([ $source, $show ]);

    $source.text("Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible.");
    
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

});
