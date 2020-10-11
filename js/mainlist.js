console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        'iconfont':'../iconfont/iconfont',
        "list":"list",
        'index':'index'
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['list','index'],function(list,index){
    list.downLoad();
    index.navData();
    index.navTab();
    index. allGoodsTab();

})