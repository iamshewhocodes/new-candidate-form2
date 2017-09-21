$(document).ready(function() {


    $('.next').on('click',function(){

      var currentPanel = $(this).closest("div.panel.panel-default");
      var nextPanel = currentPanel.next();
      
      if ($(nextPanel).hasClass('hidden')) {
          $(nextPanel).removeClass('hidden');
          $(nextPanel).find(".panel-title a").click();
      }
      else
        {
          $(nextPanel).find(".panel-title a").click();
        }
      return false;
    });
    
    $('.rating').each(function () {
        $('<span class="label label-success"></span>')
          .text($(this).val() || ' ')
          .insertAfter(this);
    });
    $('.rating').on('change', function () {
      $(this).next('.label').text($(this).val());
    });
    
    
//    var totalQuestions = 4;
//    var currentQuestion = 0;
//    var $progressbar = $("#progressbar");
//
//    $(".next").on("click", function(){
//      if (currentQuestion >= totalQuestions){ return; }
//      currentQuestion++;
//      $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
//    });




  });
  