define(['jquery'],function($){

    function download(){
        $.ajax({
            type:'get',
            url:'../data/goods.json',
            success:function(arr){
                var id = valueByName(location.search,"id");
                
                for(var i = 0; i < arr.length; i++){
                   if(arr[i].id == id){
                        var node = $(`<div class="title">
                    <span class="fl">运动用品</span>
                    <span class="fl you"> > </span>
                    <div class="shoeSort fl">
                        <div class="titbar" >
                            <a href="javascript:;">运动鞋</a>
                            <span class="v-icon"></span>
                        </div>
                        <div class="titbarbox" style="width: 220px;">
                            <a href="javascript:;">运动服饰</a>
                            <a href="javascript:;">电竞运动</a>
                        </div>
                    </div>
                    <span class="fl you"> > </span>
                    <div class="shoeSort fl">
                        <div class="titbar">
                            <a href="javascript:;">板鞋</a>
                            <span class="v-icon"></span>
                        </div>
                        <div class="titbarbox" >
                            <a href="javascript:;">网球鞋</a>
                            <a href="javascript:;">棒球鞋</a>
                            <a href="javascript:;">休闲鞋</a>
                            <a href="javascript:;">跑步鞋</a>
                        </div>
                    </div>
                    <span class="fl you"> > </span>
                    <div class="shoeSort fl">
                        <div class="titbar">
                            <a href="javascript:;">${arr[i].brand}</a>
                            <span class="v-icon"></span>
                        </div>
                        <div class="titbarbox" >
                            <a href="javascript:;">耐克</a>
                            <a href="javascript:;">匡威</a>
                            <a href="javascript:;">彪马</a>
                            <a href="javascript:;">亚瑟士</a>
                        </div>
                    </div>
                    <span class="fl you"> > </span>
                    <div class="ellipsis titdesc fl">${arr[i].title}</div>
                </div>
                <div class="product clr">
                    <div class="proImgs fl">
                        <div class="showImgs">
                             <img src="" alt=""> 
                            <div class="shadow"></div>
                        </div>
                        <div class="showDetails"></div>
                        <div class="detailBox">
                            <a href="javascript:;" class="scrollBtn scrollleft">
                                <span class="iconfont icon-zuohuaxiangzuo"></span>
                            </a>
                            <a href="javascript:;" class="scrollBtn scrollRight">
                                <span class="iconfont icon-youhuaxiangyougengduo"></span>
                            </a>
                            <div class="imglistBox">
                                <ul class="imglistUl">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <dl class="proInfor fl">
                        <dt class="orig-country">
                            <img src="${arr[i].flag}" alt="">
                            ${arr[i].country}
                            <span>|</span>
                            <a href="javascript:;">${arr[i].brand}</a>
                            <div class="Ptags">
                                跨域
                            </div>
                        </dt>
                        <dt class="product-title">
                            ${arr[i].title}
                        </dt>
                        <dd class="promotionbar">
                            <img src="images/1010.png" alt="">
                            <span>￥${arr[i].vip}</span>
                            <span class="second fr">10月10日 00:00开抢</span>
                        </dd>
                        <dd class="presell">
                            <span class="
                            generalize">预售</span>
                            <span>预计2020.10.12发货</span>
                        </dd>
                        <dd class="priceWrap">
                            <div class="sell">
                                <span class="generalize">售价</span>
                                <span>￥${arr[i].price}</span>
                                <span>起</span>
                                <span>特价</span>
                                <span>参考价：￥799</span>
                            </div>
                            <div class="stages">
                                <span class="generalize">分期</span>
                                <span>3期免息</span>
                                <span>¥99.66起×3期免息，预计可免6.88元</span>
                                <span class="iconfont icon-shouji"></span>
                                <span>手机APP专享</span>
                            </div>
                            <div class="blackCard">
                                <img src="https://kaola-haitao.oss.kaolacdn.com/6dc03e40-5452-4a3e-a039-1ae8badbce2e_120_45.png?x-oss-process=image/resize,h_34/quality,q_90" alt="">
                                <span>开通黑卡,下单预计省¥14,可得290元红包~</span>
                                <a href="javascript:;">立即开卡</a>
                            </div>
                        </dd>
                        <dd class="shoesize clr">
                            <span class="generalize fl">尺码</span>
                            <ul class="fl shoelist">
                                <li class="shoelist-active">36</li>
                                <li class="shoelist-item">37</li>
                                <li class="shoelist-item">38</li>
                                <li class="shoelist-item">39</li>
                                <li class="shoelist-item">40</li>
                                <li class="shoelist-item">41</li>
                            </ul>
                        </dd>
                        <dd class="number clr">
                            <span class="generalize fl">数量</span>
                            <div class="numchange fl">
                                <span>-</span>
                                <input type="text" value="3">
                                <span>+</span>
                            </div>
                        </dd>
                        <dd class="buyBtns clr">
                            <a href="javascript:;" class="buyBtn">立即购买</a>
                            <a href="javascript:;" class="addCar">
                                <span class="iconfont icon-icon_shoppingcart"></span>
                            加入购物车</a>
                        </dd>
                    </dl>
                </div>`);
                        node.appendTo('.main .allcenter');
                        var imgArr = arr[i].imgs;
                        for(var j = 0; j < imgArr.length; j++){
                            $(`<li>
                            <a class="imglistUl-active" href="javascript:;">
                                <img src="${imgArr[j]}" alt="">
                            </a></li>`).appendTo(node.find('.imglistUl'));
                        
                        
                        
                        }
                     break;
                   }
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function imgMove(){
        var aImgs = $('.imglistUl').find('img');
        console.log(aImgs.index());
    }

    //?name1=value1&name2=value2&name3=value3
    function valueByName(search, name){
        var start = search.indexOf(name + '=');
        if(start == -1){
            return null;
        }else{
            var end = search.indexOf('&', start)
            if(end == -1){
                end = search.length;
            }
            var str = search.substring(start, end);
            var arr = str.split('=');
            return arr[1];
        }
    }
    return{
        download,
        imgMove
    }
})