console.log("加载成功");
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        'iconfont':'../iconfont/iconfont',
        "desc":"desc",
        'index':'index'
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['desc','index'],function(desc,index){
    desc.download1();
    desc.download2();
    // desc.imgTab();

    index.navData();
    index.navTab();
    index. allGoodsTab();

})