define(['jquery','jquery-cookie'],function($){

    function download1(){
        $.ajax({
            type:'get',
            url:'../data/goods1.json',
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
                             <img src="${arr[i].imgs[0]}" alt="" style="width: 400px; height: 400px;"> 
                            <div class="shadow">+</div>
                        </div>
                        <div class="showDetails">
                            <img src="${arr[i].imgs[0]}" alt="" > 
                        </div>
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
                            <a href="goodCart.html" target="_blank" class="addCar" id = "${arr[i].id}">
                                <span class="iconfont icon-icon_shoppingcart"></span>
                            加入购物车</a>
                        </dd>
                    </dl>
                </div>`);
                        node.appendTo('.main .allcenter');
                        var imgArr = arr[i].imgs;
                        for(var j = 0; j < imgArr.length; j++){
                            $(`<li>
                            <a href="javascript:;">
                                <img src="${imgArr[j]}" alt="" name="${imgArr[j]}">
                            </a></li>`).appendTo(node.find('.imglistUl'));
                        }
                        imgTab();
                        magnify();
                        addCar();
                     break;
                   }
                }
                
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    
    function download2(){
        $.ajax({
            type:'get',
            url:'../data/goods2.json',
            success:function(arr){
                var id = valueByName(location.search,"product_id");

                for(var i = 0; i < arr.length; i++){
                    var goodsArr = arr[i].goods;
                    for(var j = 0; j < goodsArr.length; j++){
                        
                        if(goodsArr[j].product_id == id){
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
                                    <a href="javascript:;">${goodsArr[j].brand}</a>
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
                            <div class="ellipsis titdesc fl">${goodsArr[j].title}</div>
                        </div>
                        <div class="product clr">
                            <div class="proImgs fl">
                                <div class="showImgs">
                                    <img src="${goodsArr[j].imgs[0]}" alt="" style="width: 400px; height: 400px;"> 
                                    <div class="shadow">+</div>
                                </div>
                                <div class="showDetails">
                                    <img src="${goodsArr[j].imgs[0]}" alt="" > 
                                </div>
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
                                    <img src="${goodsArr[j].flag}" alt="">
                                    ${goodsArr[j].country}
                                    <span>|</span>
                                    <a href="javascript:;">${goodsArr[j].brand}</a>
                                    <div class="Ptags">
                                        跨域
                                    </div>
                                </dt>
                                <dt class="product-title">
                                    ${goodsArr[j].title}
                                </dt>
                                <dd class="promotionbar">
                                    <img src="images/1010.png" alt="">
                                    <span>￥${goodsArr[j].vip}</span>
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
                                        <span>￥${goodsArr[j].price}</span>
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
                                    <a href="goodCart.html" target="_blank" class="addCar" id = "${goodsArr[j].product_id}">
                                        <span class="iconfont icon-icon_shoppingcart"></span>
                                    加入购物车</a>
                                </dd>
                            </dl>
                        </div>`);
                                node.appendTo('.main .allcenter');
                                var imgArr = goodsArr[j].imgs;
                                for(var k = 0; k < imgArr.length; k++){
                                    $(`<li>
                                    <a href="javascript:;">
                                        <img src="${imgArr[k]}" alt="" name="${imgArr[k]}">
                                    </a></li>`).appendTo(node.find('.imglistUl'));
                                }
                            imgTab();
                            magnify();
                            addCar();
                            break;
                        }
                    }
                }
                
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function imgTab(){
        var aImgs = $('.imglistUl').find('img');
        // console.log(aImgs.size());
        // console.log(aImgs);
        aImgs.mouseenter(function(){
            // console.log($(this).index());
            $('.showImgs img').attr('src',this.name);
            $('.showDetails img').attr('src',this.name);
            $(this).css({border:"2px solid red"});

        }).mouseleave(function(){
            $(this).css({border:"2px solid #ccc"});

        })
    }
    function  magnify(){
        $('.showImgs').mouseenter(function(){
            $('.shadow,.showDetails').show();
        }).mouseleave(function(){
            $('.shadow,.showDetails').hide();
        })

        $('.showImgs').mousemove(function(ev){
            var e = ev || window.event;
            var l = e.clientX - $(this).offset().left - 100;
            l = Math.max(0,l);
            l = Math.min(l,200);
            var t = e.clientY - $(this).offset().top + 100;
            t = Math.max(0,t);
            t = Math.min(t,200);
            $('.shadow').css({
                left:l,
                top:t
            })
            $('.showDetails img').css({
                left:-2*l,
                top:-2*t
            })
        })

    }
    function addCar(){
        $('.main').on('click','.addCar', function(){
            var id = this.id;
            var first = $.cookie('goods') == null ? true : false;
            if(first){
                var arr =[{id:id,num:1}];
                $.cookie('goods',JSON.stringify(arr),{expire:7});
            }else{
                var cookieArr = JSON.parse($.cookie('goods'));
                var same = false;
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        same = true;
                        cookieArr[i].num ++;
                        break;
                    }
                }
                if(!same){
                    cookieArr.push({id:id,num:1})
                }
                $.cookie('goods',JSON.stringify(cookieArr),{expire:7});
            }
            alert($.cookie('goods'));
            return false;
        })
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
        download1,
        download2
        // imgTab
    }
})