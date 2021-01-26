//slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="src/icons/chevron-left-solid.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="src/icons/chevron-right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true,
              }
            }]  
      });
//end


//tabs
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });  
//end

//подробней
  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              })
             });
}
  toggleSlide('.catalog-item__back');
  toggleSlide('.catalog-item__link');
//end

//modal
$('[data-modal=consultation]').on('click', function(){
$('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function(){
 $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});
  $('.button_mini').each(function(i){
  $(this).on('click', function(){
  $('#y, .modal__descr').text($('.catalog-item__subtitle').eq(i).text()),
  $('.overlay, #order').fadeIn('');
      })       
    });
//end

//validate
  function validateForm(form){
    $(form).validate({
      rules: {
        // simple rule, converted to {required:true}
        name: "required",
        phone: "required",
        // compound rule
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Введите ваше имя",
        phone: "Введите ваш номер телефона",
        email: {
          required: "Введите ваш почтовый адрес",
          email: "Почта может быть похожая на этот пример: example@gmail.com"
        }
      }
    });  
  }
  validateForm('#consultati');
  validateForm('#consultation form');
  validateForm('#order form');
  //end
 
  // mask
  $('input[name=phone]').mask("+(399)999-9999");
  });
