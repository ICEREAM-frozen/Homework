$(function(){
	
	var button = $("button");
	button.on('click',createTriangle);
	
	var nRows;
    $("#createTriangle").click(function () {

        reset();

        nRows = $("input[name='nRows']").val();

        for (var i = 1; i <= nRows; i++) {
            var newContainer = $('<div/>', {
                "id": "container" + i,
                "class": "container"
            });

            var value, levelUpTriangles;

            for (var j = 1; j <= i; j++) {
                if (j > 1 && j < i) {
                    levelUpTriangles = $("#container" + (i - 1)).children();
                    value = parseInt($(levelUpTriangles[(j - 2)]).attr('data-value'), 10) +
                            parseInt($(levelUpTriangles[(j - 1)]).attr('data-value'), 10);
                } else {
                    value = 1;
                }

                var newTriangle = $('<div/>', {
                    "id": j,
                    "class": "triangle " + ifOdd(value),
                    "data-value": value.toString()
                });

                var newRow = $(newContainer).append(newTriangle);
            }
            $("#body-wrap").append(newRow);
        }
    });

    $("#sierpinski").click(function () {
        $("#backgroundNegative").removeAttr("hidden");
        shadeTheOdds();
    });

    $("#backgroundNegative").click(function () {
        toggleNegativeBackground();
    });

    function shadeTheOdds() {
        $(".odd").css("border-bottom", "20px solid #000");
    }

    function toggleNegativeBackground() {
        $("body, .triangle, h1").toggleClass("negative");
        $(".negative.odd").css("border-bottom", "20px solid #000");
    }

    function ifOdd(value) {
        if (value % 2 == 0) {
            return "odd";
        } else {
            return "";
        }
    }

    function reset() {
        $("#body-wrap").empty();
        $("#backgroundNegative").prop("hidden", true);
        $("#sierpinski").removeAttr("hidden");
    }
})