define(['jquery'], function ($) {
    function registerSend() {
        $('.register').find('input').eq(3).click(function () {
            $.ajax({
                type: 'post',
                url: '../php/register.php',
                data: {
                    username: $('.register').find('input').eq(0).val(),
                    password: $('.register').find('input').eq(1).val(),
                    repassword: $('.register').find('input').eq(2).val(),
                    time: (new Date()).getTime()
                },
                success: function (result) {
                    var obj = JSON.parse(result);

                    $('.register .repaw .pswTip').show();
                    if(obj.code){
                        $('.register .pswTipItem').find('i').attr('id', 'errorICon');
                    }else{
                        $('.register .pswTipItem').find('i').attr('id', 'greenICon');
                    }
                    $('.repaw .pswTipItem').find('span').html(obj.msg);

                },
                error: function (msg) {
                    console.log(msg);
                }
            })

        })
    }
    function vertifyFunc() {
        $('.repaw .pswTip').hide();

    }
    return {
        registerSend,
        vertifyFunc
    }
})