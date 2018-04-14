$(function(){
 
  $(".footer").load("partials/footer.html");
  $(".tab-content-1").load("partials/tab-1.html");
  $(".tab-content-2").load("partials/tab-2.html");
  $(".tab-content-3").load("partials/tab-3.html");
  $(".tab-content-4").load("partials/tab-4.html"); 
});

$('.btn-login').on('click',function(){
    $('.modal-body').load('partials/login.html',function(){
        $('#loginModal').modal({show:true});
    });
});

$('.btn-signup').on('click',function(){
    $('.modal-body').load('partials/signup.html',function(){
        $('#loginModal').modal({show:true});
    });
});

$(".dish-card").mouseenter(function() {
    $(this).css("border", "1px solid #bdbdbd");
}).mouseleave(function() {
     $(this).css("border", "none");
});
