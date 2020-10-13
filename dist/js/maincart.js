console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        'iconfont':'../iconfont/iconfont',
        "cart":"cart",
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['cart'],function(cart){
    cart.downLoad();

})