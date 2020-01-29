/**
 * Created by Moonlane on 20.07.2017.
 */

// smooth scroll
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$(document).ready(function() {  
  
    var name = $('.accordion-name'),
        content = $('.accordion-content');
    
    name.first().addClass('active')
    content.first().show();
    
    name.on('click', function() {
      if(!$(this).hasClass('active')) {
        name.removeClass('active').next().slideUp(200);
        $(this).addClass('active').next().slideDown(200);
      } else {
        $(this).removeClass('active').next().slideUp(200);
      }
    });
    
});

$(document).ready(function() {
    var tab = $('.tab-menu');
    var content = $('.tab-content-item');
    
    tab.first().addClass('active');
    content.not(':first').hide();
    
    tab.on('click', function(){
      tab.removeClass('active').eq($(this).index()).addClass('active');
      content.hide().eq($(this).index()).show();
    });
});