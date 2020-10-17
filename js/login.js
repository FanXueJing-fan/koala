define(['jquery'],function($){
    function loginSend(){
        $('.login .btn').find('input').click(function(){
            $.ajax({
                type:'post',
                url:'../php/login.php',
                data:{
                    username:$('.login').find('input').eq(0).val(),
                    password:$('.login').find('input').eq(1).val(),
                },
                success:function(result){
                    var obj = JSON.parse(result);

                    $('.register .repaw .pswTip').show();
                    if (obj.code) {
                        $('.login .pswTipItem').find('i').attr('id', 'errorICon');
                    } else {
                        $('.login .pswTipItem').find('i').attr('id', 'greenICon');

                    }
                    $('.login .pswTipItem').find('span').html(obj.msg);

                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
    }

    function tab(){
        var aBtns = $('.login-header').find('a');
        var aDivs = $('.login-content');
           aBtns.click(function(){
               $(this).css('color','#d31e46').siblings('a').css('color','lightblue');
               aDivs.css('display','none');
               aDivs.eq($(this).index()).css('display','block');
           })
    }
    
    return {
        tab,
        loginSend
        
    }
})