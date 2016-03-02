var Dispenser = {};


$(function() {

	Dispenser.credits = 0;
	Dispenser.tokens = 0;
    
    $('.insert').on("click", function () {

        val = parseInt($(this).data('val'));

        Dispenser.credits += val;

        log("Inserted <b>" + val + "</b> RSD")
        recalculate();
        render();

    });

    $('.dispense').on("click", function () {

        if ( Dispenser.tokens > 0 )
            log("Dispensed <b>" + Dispenser.tokens + "</b> tokens");

        Dispenser.credits = 0;
        Dispenser.tokens = 0;
        
        render();

    });

    function recalculate() {

        Dispenser.tokens = Dispenser.credits / 100;
        Dispenser.tokens += Math.floor(Dispenser.tokens / 5);

    }

    function render() {
    	$("#tokens").html(Dispenser.tokens);
    	$("#credits").html(Dispenser.credits)

    }

    function log(message) {
        $("#log").append('<li>' + message + '</li>');
    }

});