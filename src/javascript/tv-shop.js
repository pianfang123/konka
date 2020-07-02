//商品规格选择
$('.path-list li').click(function(){

    $(this).siblings().children().removeClass('buxian')
    $(this).children().addClass('buxian')
})

//商品浏览选择
$('.tv-sortl a').click(function(){
    $(this).siblings().removeClass('sort1-style')
    $(this).addClass('sort1-style')
})

//翻页
// $('.sortr-a').click(function(){

//     $('.folio').html(function(){
//         var $folio = parseInt($('.folio').text()) 
//         $folio--
//         if($folio = 1){
//             return 1
//         } else {
//             return parseInt($('.folio').text()) - 1 
//         }
        
//     })
// });
// $('.sortr-b').click(function(){

//     $('.folio').html(function(){
//         var $foliob = parseInt($('.folio').text()) 
//         $foliob++
//         if($foliob = 3){
//             return 3
//         } else {
//             return parseInt($('.folio').text()) + 1 
//         }
        
//     })
// });









