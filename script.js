


var meetTeam = SVG('meet-our-team').size(420, 100)

var rect = meetTeam.rect(420, 100).attr({ fill: 'transparent' })
rect.stroke({color: '#fa8231', width: 8}).attr({'stroke-dashoffset': 3000, 'stroke-dasharray': 1025, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'}).addClass('path')

var text = meetTeam.text('MEET THE TEAM')
text.font({anchor: 'middle', size:40, family: 'sans-serif'})
text.move(205, 27).rotate(180).flip('y')


var fadeStop = 300;


$(document).scroll(function(){

  var vScroll = $(this).scrollTop();
  var opacity= 1-vScroll/fadeStop;
  var visibility = vScroll/fadeStop;

  $('.comp').css({
    'opacity':''+opacity+'',
    'transform':'translate('+-vScroll*2+'px, '+-vScroll/6+'px) scale('+opacity+')'
  });

  $('.navbar-brand').css('opacity', visibility);
  $('.navbar').css('background-color', 'rgba(0, 0, 0, '+visibility/4+')');

  if(vScroll > $('.box').offset().top-($(window).height()/1.2)){
    $('.box').each(function(i){
      setTimeout(function(){
        $('.box').eq(i).addClass('trans');
      },150*(i+1));
    });
  }

  if(vScroll > $('.tab').offset().top-($(window).height()/1.2)){
    $('.tab').each(function(i){
      setTimeout(function(){
        $('.tab').eq(i).addClass('flow');
      },150*(i+1));
    });
  }

  if(vScroll > $('.card').offset().top-($(window).height()/1.2)){
    $('.card').each(function(i){
      setTimeout(function(){
        $('.card').eq(i).addClass('trans');
      },150*(i+1));
    });
  }

});




