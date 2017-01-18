$(document).ready(function() {
  $(".bitext-anchor").hover(function() {
    var bitextIdentifier = $(this).data("bitext-anchor");
  
    $("span[data-bitext-anchor=" + bitextIdentifier + "]").addClass("active");
  }, function () {
    var bitextIdentifier = $(this).data("bitext-anchor");
  
    $("span[data-bitext-anchor=" + bitextIdentifier + "]").removeClass("active");
  });
});