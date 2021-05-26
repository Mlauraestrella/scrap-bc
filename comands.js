const wait = function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
        }, milliseconds);
    });
};

const scrollElement = async function(){
  
    let scroll = $("scrap-profile").click(function() {
        $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
        }, 2000);
    });
  
    return new Promise (scrollElement(resolve),{
       resolve();
    });
  
};

