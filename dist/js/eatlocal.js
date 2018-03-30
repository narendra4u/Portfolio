$(function(){
 
  $(".footer").load("partials/footer.html"); 
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

