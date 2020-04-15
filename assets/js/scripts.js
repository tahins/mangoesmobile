function animation_1(){
        setTimeout(function() {
            $("#wave-1").show("slow");

            setTimeout(function() {
                $("#wave-2").show("slow");

                setTimeout(function() {
                    $("#wave-3").show("slow");

                    setTimeout(function() {
                        $("#wave-4").show("slow");

                        setTimeout(function() {
                            $("#wave-1").fadeOut("slow");
                            $("#wave-2").fadeOut("slow");
                            $("#wave-3").fadeOut("slow");
                            $("#wave-4").fadeOut("slow");

                            animation_1();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

function animation_2() {
    setTimeout(function() {
        $("#wave-1").fadeIn("slow");
        $("#wave-1-shadow").fadeIn("slow");

        setTimeout(function() {
            $("#wave-2").fadeIn("slow");
            $("#wave-2-shadow").fadeIn("slow");

            setTimeout(function() {
                $("#wave-3").fadeIn("slow");
                $("#wave-3-shadow").fadeIn("slow");

                setTimeout(function() {
                    $("#wave-4").fadeIn("slow");
                    $("#wave-4-shadow").fadeIn("slow");

                    setTimeout(function() {
                        $("#wave-1").fadeOut("slow");
                        $("#wave-2").fadeOut("slow");
                        $("#wave-3").fadeOut("slow");
                        $("#wave-4").fadeOut("slow");

                        $("#wave-1-shadow").fadeOut("slow");
                        $("#wave-2-shadow").fadeOut("slow");
                        $("#wave-3-shadow").fadeOut("slow");
                        $("#wave-4-shadow").fadeOut("slow");

                        animation_2();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function animation_3(){
//    setTimeout(function() {
//        $("#wave-1").css('opacity', '1.0');

        setTimeout(function() {
            $("#wave-2").css('opacity', '1.0');
            $("#wave-2-shadow").css('opacity', '1.0');

            setTimeout(function() {
                $("#wave-3").css('opacity', '1.0');
                $("#wave-3-shadow").css('opacity', '1.0');

                setTimeout(function() {
                    $("#wave-4").css('opacity', '1.0');
                    $("#wave-4-shadow").css('opacity', '1.0');

                    setTimeout(function() {
//                        $("#wave-1").css('opacity', '0.3');
                        $("#wave-2").css('opacity', '0.3');
                        $("#wave-3").css('opacity', '0.3');
                        $("#wave-4").css('opacity', '0.3');

                        $("#wave-2-shadow").css('opacity', '0.3');
                        $("#wave-3-shadow").css('opacity', '0.3');
                        $("#wave-4-shadow").css('opacity', '0.3');

                        animation_3();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
//    }, 1000);
}

function animation_4(){
   
$("body").mousemove(function(event) {
    var mouseX = event.pageX;
var mouseY = event.pageY;

//  var msg = "Handler for .mousemove() called at ";
  msg = mouseX + ", " + mouseY;
//  console.log(msg);
//  $("#log").append("<div>" + msg + "</div>");

moveShadow(mouseX, mouseY);
});

    $(document).bind('touchmove',function(e){
        e.preventDefault();
        var touch = e.originalEvent.changedTouches[0];
        console.log(touch.pageX + " - " + touch.pageY);
        moveShadow(touch.pageX, touch.pageY);
    });
}

// the main function - our shadow mover
function moveShadow(lightX, lightY){

  // shadow offset
    var shadowOffset	=	1.6;

    // mouse position - X-axis
//    var mousePositionX	=	parseInt(lightbulb.width()/2);

    // mouse position - Y-axis
//    var mousePositionY	=	parseInt(lightbulb.height()/2);

    // logo container
    var logo			=	$("#full-logo");

    // light and logo containers
//    var lightAlogo		=	$("#light-bulb, #logo");

    // center of logo - X-axis
    var logoCenterX		=	parseInt(logo.width()/2);

    // center of logo - Y-axis
    var logoCenterY		=	parseInt(logo.height()/2);

    // shadow container
    var logoshadow		=	$("#full-logo-shadow");

    // center of shadow - X-axis
    var logoShdwCenterX	=	parseInt(logoshadow.width()/2);

    // center of shadow - Y-axis
    var logoShdwCenterY	=	parseInt(logoshadow.height()/2);

    // info-box text container
//    var statustext		=	$("#infobox p");

    // info-box default text
//    var defaulttxt		=	"Drag the light-bulb or the logo!";

    // info-box text for hovering switch while state is "off"
//    var ontxt			=	"Let there be light!";

    // info-box text for hovering switch while state is "on"
//    var offtxt			=	"Switch off the light!";

    // set info-box text to default text
//    statustext.text(defaulttxt);

    // start our main function (will be used later)

	// save the current X position of the light bulb
//	lightX			=	parseInt(lightbulb.offset().left) + lightCenterX;

	// save the current Y position of the light bulb
//	lightY			=	parseInt(lightbulb.offset().top) + lightCenterY;

	// save the current X position of the logo
	var logoX			=	parseInt(logo.offset().left) + logoCenterX;

	// save the current Y position of the logo
    var logoY			=	parseInt(logo.offset().top) + logoCenterY;

	// save the value how far the logo is away from the light bulb on the X-axis
    var distanceX		=	logoX - lightX;

	// save the value how far the logo is away from the light bulb on the Y-axis
    var distanceY		=	logoY - lightY;

	// calculating and saving the value of the square root of those two distance values
    var distance		=	Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

	// calculating and saving the shadow distance with the offset we defined in our variables
    var shadowDistance	=	distance * shadowOffset;

	// preparing the CSS value to put into the "left" attribute of the shadow container
    var shadowPosLeft	=	(distanceX / distance * shadowDistance + lightX - logoShdwCenterX) + "px";

    // prevent y axix -ve shadow
    if(distanceY < 0) {
        // preparing the CSS value to put into the "top" attribute of the shadow container
        var shadowPosTop	=	(distanceY / distance * shadowDistance + lightY - logoShdwCenterY) + "px";
    } else {
        // preparing the CSS value to put into the "top" attribute of the shadow container
        var shadowPosTop	=	logo.position().top + "px";
    }

    var opacityValue = 0.6 - (shadowDistance /1000);
//    var opacityValue = 0.6 - ((Math.sqrt(Math.pow(distanceX, 2)) * shadowOffset) /1000);

    var scaleValue = 1 + (distanceX/1000) - (distanceY/1000);
//    var scaleValue = 1 + (distanceX/2000);

	// finaly using the results of all above calculations to position our shadow and set the opacity
	logoshadow.css({
        "left": shadowPosLeft,
        "top": shadowPosTop,
        "opacity": opacityValue,
        "transform": "scale("+scaleValue+")",
        "-ms-transform": "scale("+scaleValue+")",
        "-webkit-transform": "scale("+scaleValue+")",
        "-o-transform": "scale("+scaleValue+")",
        "-moz-transform": "scale("+scaleValue+")"
    });
//    logoshadow.css({ "left": shadowPosLeft, "opacity": (0.6 - shadowDistance /1000) });
//    console.log("shadowPosTop: " + shadowPosTop + " | logoY: " + logoY);

}

function flashlightEffect(elem, className) {

    elem.mousemove(function(e){
        elem.css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
    });

    elem.bind('touchmove',function(e){
        e.preventDefault();
        var touch = e.originalEvent.changedTouches[0];
        console.log(touch.pageX + " - " + touch.pageY);
        elem.css('background-position',(touch.pageX - 250)+'px '+(touch.pageY - 250)+'px');
    });

    clickToWhite(elem, className);

}

function clickToBlack(elem, className) {
    elem.unbind("click");
    $(".white").unbind("click");
    elem.unbind("doubletap");
    $(".white").unbind("doubletap");

    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
//    var start = mobile ? "doubletap" : "click";
//    elem.bind(start, function(event){
//        $(".white").addClass("" + className);
//        elem.removeClass("white");
//
//        clickToWhite(elem, className);
//
//        console.log("From white to black...");
//    });

    if(mobile){
        $(".white").doubletap(function(e){
            e.preventDefault();
            $(".white").addClass("" + className);
            elem.removeClass("white");

            clickToWhite(elem, className);

            console.log("From white to black on doubletap");
        });
    } else {
        $(".white").click(function(e){
            $(".white").addClass("" + className);
            elem.removeClass("white");

            clickToWhite(elem, className);

            console.log("From white to black on click");
        });
    }
}

function clickToWhite(elem, className) {
    elem.unbind("click");
    $(".white").unbind("click");
    elem.unbind("doubletap");
    $(".white").unbind("doubletap");

    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
//    var start = mobile ? "doubletap" : "click";
//    elem.bind(start, function(event){
//        elem.addClass("white");
//        $(".white").removeClass("" + className);
//
//        clickToBlack(elem, className);
//
//        console.log("From black to white...");
//    });

    if(mobile) {
        elem.doubletap(function(e){
            e.preventDefault();
            elem.addClass("white");
            $(".white").removeClass("" + className);

            clickToBlack(elem, className);

            console.log("From black to white on doubletap");
        });
    } else {
        elem.click(function(e){
            elem.addClass("white");
            $(".white").removeClass("" + className);

            clickToBlack(elem, className);

            console.log("From black to white on click");
        });
    }
}

function animateMangoesLogo() {
    $(".footer-mangoes-logo").mouseenter(function() {
        console.log("mouse entered on the logo");
        $(".footer-mangoes-logo").addClass("animated pulse");
    });

    $(".footer-mangoes-logo").mouseleave(function() {
        console.log("mouse left the logo");
        $(".footer-mangoes-logo").removeClass("animated pulse");
    });
}