console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'login':'login',
        'register':'register'
    }
})
require(['login','register'],function(login,register){
    login.tab();
    
    login.loginSend();
    register.registerSend();
    register.vertifyFunc();
})