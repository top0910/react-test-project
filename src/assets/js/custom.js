jQuery(document).ready(function($) {
    var list = $(".site-accounts-listing-wrap ul li");
    var numToShow = 4;
    var button = $(".site-accounts-listing-wrap .seemore");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function() {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });





    var listw = $(".site-products-listing-wrap ul li");
    var numToShoww = 4;
    var buttonw = $(".site-products-listing-wrap .seemore");
    var numInListw = listw.length;
    listw.hide();
    if (numInListw > numToShoww) {
        buttonw.show();
    }
    listw.slice(0, numToShoww).show();

    buttonw.click(function() {
        var showingw = listw.filter(':visible').length;
        listw.slice(showingw - 1, showingw + numToShoww).fadeIn();
        var nowShowingw = listw.filter(':visible').length;
        if (nowShowingw >= numInListw) {
            buttonw.hide();
        }
    });


});
