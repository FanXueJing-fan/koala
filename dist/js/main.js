console.log('加载成功');
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        'iconfont':'../iconfont/iconfont',
        'index':'index'
    },
    shim:{
        'jquery-cookie':['jquery']
    }
})
require(['index'], function(index){
    index.bannerDate();
    index.bannerTab();
    index.navData();
    index.navTab();
    index.sportDate();
    index.sportTabData();
    index.sportTab();
    index.brandData();
    index.hotTabData();
    index.hotTab();
    index.hotBrand();
    index.guess();
    index.fixedFunc();
})