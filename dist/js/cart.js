define(['jquery','jquery-cookie'],function($){

    function downLoad(){
        $.ajax({
            type:'get',
            url:'../data/goods2.json',
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                   var node = $(`<div>
                    <h4 class="newRecomTit">
                        ${arr[i].area}
                        <b>${arr[i].desc}</b>
                    </h4>
                    <div class="newRecomList clr">
                       
                    </div>
                </div> `);
                node.appendTo('.mainWrap');
                var goodsArr = arr[i].goods;
                for(var j = 0; j < goodsArr.length; j++){
                    $(` <div class="newRecomItem">
                    <a href="goodDesc.html?product_id=${goodsArr[j].product_id}" target="_blank">
                        <img src="${goodsArr[j].imgs[0]}" alt="">
                    </a>
                    <p class="itemTitle">
                        <a href="goodDesc.html?product_id=${goodsArr[j].product_id}" target="_blank">${goodsArr[j].title}</a>
                    </p>
                    <div class="itemInfor">
                        <p class="itemMoney">
                        ￥${goodsArr[j].price}
                            <span>￥${goodsArr[j].vip}</span>
                        </p>
                        <a href="goodDesc.html?product_id=${goodsArr[j].product_id}" target="_blank">3898 人已评价</a>
                    </div>
                </div>`).appendTo(node.find('.newRecomList'));
                }
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function addCarData(){
        new Promise(function(resolve,reject){
            $.ajax({
                type:'get',
                url:'../data/goods1.json',
                success:function(arr){
                    resolve(arr);
                },
                error:function(msg){
                    reject(msg);
                }
            })
        }).then(function(arr1){
            return new Promise(function(resolve,reject){
                $.ajax({
                    type:'get',
                    url:'../data/goods2.json',
                    success:function(arr){
                        var newArr = arr1;
                        for(var i = 0; i < arr.length; i++){
                            newArr = newArr.concat(arr[i].goods);
                        }
                        resolve(newArr);
                    },
                    error:function(msg){
                        reject(msg);
                    }
                })
            })
        }).then(function(arr){
            // console.log(arr);
            var cookieStr = $.cookie('goods');
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                // console.log(cookieArr);
                var newArr = [];
                for(var i = 0; i < cookieArr.length; i++){
                    for(var j = 0; j < arr.length; j++){
                        if(cookieArr[i].id == arr[j].id || cookieArr[i].id == arr[j].product_id){
                            arr[j].num = cookieArr[i].num;
                            arr[j].id = arr[j].id ? arr[j].id : arr[j].product_id;
                            newArr.push(arr[j]);
                            break;
                        }
                    }
                }
                // console.log(newArr);
               

                for(var k = 0; k < newArr.length; k++){
                  var node = $(`<li class="itemCart clr" id="${newArr[k].id}">
                    <div>
                        <input type="checkbox" >
                    </div>
                    <div class="clr">
                        <a class="fl" href="#">
                            <img src="${newArr[k].imgs[0]}" alt="" style="width:80px;height:80px">
                        </a>
                        <div class="fl txt">
                           <h3>
                            <a href="#">${newArr[k].title}</a>
                           </h3>
                           <p>
                               <img src="images/7.png" alt="">
                               <span>不支持7天无理由退货</span>
                           </p>
                           <div>
                               <span>
                                   支持3期免息
                                   <span class="iconfont icon-down"></span>
                                </span>
                               <span>特价
                                <span class="iconfont icon-down"></span>
                               </span>
                               <span>包税
                                <span class="iconfont icon-down"></span>
                               </span>
                           </div>
                        </div>
                        <div class="fl describe">
                            <p>颜色：白色</p>
                            <p>尺码：37</p>
                        </div>
                    </div>
                    <div class="newPrice">
                    ${newArr[k].price}
                    </div>
                    <div class="buyNum">
                        <div class="numbox clr">
                            <span class="jian"> － </span>
                            <div class="fl numChange">${newArr[k].num}</div>
                            <span class="jia"> ＋ </span>
                        </div>
                    </div>
                    <div class="sum">${(newArr[k].price * newArr[k].num).toFixed(1)}</div>
                    <div class="dele">
                        <a href="javascript:;">删除</a>
                    </div>
                </li> `);
                  node.appendTo('.cartContent .goodsCart');
                  
                }
                checkFunc();
                isCheckedAll();
                // console.log(sum());
            }
        })
        
    }
    function checkFunc(){
        //全选 直接获取
        $('.selectAll,.allOpera').find('input').click(function(){
            //    console.log($(this));
            var allCkecks = $('.itemCart').find('input');
            // console.log(allCkecks.size());
            if($(this).hasClass("checked")){
                $(this).add(allCkecks).removeClass('checked');

            }else{
                $(this).add(allCkecks).addClass('checked');
            }
            isCheckedAll();
        })

        //每一个勾选，后添加，事件委托
        $('.goodsCart').on('click','.itemCart input',function(){
            // console.log($(this));
            if($(this).hasClass('checked')){
                $(this).removeClass('checked');
            }else{
                $(this).addClass('checked');
                // $(this).closest('.itemCart').css('background','#b8d8ee');

            }
            isCheckedAll();
        })

        //两个全选必须同时具有相同的样式
        $('.selectAll input').click(function(){
            // console.log($(this).attr("class"));
            var str = $(this).attr("class");
            $('.allOpera input').attr('class',str);
        })
        $('.allOpera input').click(function(){
            // console.log($(this).attr("class"));
            var str = $(this).attr("class");
            $('.selectAll input').attr('class',str);
        })
       
    }
    //计算总的购物车数量，已购数量，已购总钱
    function isCheckedAll(){
        var allChecks = $('.goodsCart').find('li');
        // console.log(allChecks.size());

        var isAll = true;//假设全被选中
        var total = 0;//选中的钱数
        var count = 0;//选中的数量
        var totalCount = 0;//购物车中的总数量

        allChecks.each(function(index,item){
            // console.log($(this));
            // console.log( parseFloat($(item).find('.sum').html().trim()));
            // console.log($(item).find('.numbox .numChange').html());
            if(!$(item).find('input').hasClass('checked')){
                isAll = false;
            }else{
                count += parseInt($(item).find('.numChange').html().trim());
                total += parseFloat($(item).find('.newPrice').html().trim()) * parseInt($(item).find('.numChange').html().trim());
            }
            totalCount +=parseInt($(item).find('.numChange').html().trim());
        })
        
        $('.cartTitle .tt').html(`我的购物车 ${totalCount}`);
        $('.allgoods .checkedNum').html(count);
        $('.allgoods .checkedMoney').html(total.toFixed(1));
        $('.allmoney .checkedMoney').html(`商品应付总计: ${total.toFixed(1)}`);

        //是否全被选中
        if(isAll){
            $('.selectAll,.allOpera').find('input').addClass('checked');
        }else{
            $('.selectAll,.allOpera').find('input').removeClass('checked');

        }
    }
    function changeCar(){
        //从页面和cookie中一起删除
        $('.goodsCart').on('click','.itemCart .dele a',function(){
            var id = $(this).closest('.itemCart').remove().attr('id');
            var cookieArr = JSON.parse($.cookie('goods'));
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1);
                    // console.log(cookieArr);
                    break;
                }
            }
            cookieArr.length == 0 ? $.cookie('goods',null) : $.cookie('goods',JSON.stringify(cookieArr),{expires:7});
            alert($.cookie('goods'));

            return false;
        })
    
        //数量加减
        $('.goodsCart').on('click','.numbox span', function(){
            // 这样的写法一定只能具有一个类名
            var id = $(this).closest('.itemCart').attr('id');
            var cookieArr = JSON.parse($.cookie('goods'));
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    break;
                }
            }
            if(this.className == 'jian'){
                cookieArr[i].num == 0 ? cookieArr[i].num == 0 : cookieArr[i].num --;
            }else{
                cookieArr[i].num ++;
            }
            $(this).siblings('div').html(cookieArr[i].num);
            var price = parseFloat($(this).closest('.buyNum').siblings('.newPrice').html().trim());
            $(this).closest('.buyNum').siblings('.sum').html((cookieArr[i].num * price).toFixed(1));
            $.cookie('goods',JSON.stringify(cookieArr),{expires:7});
            isCheckedAll();

        })
    }
    return{
        downLoad,
        addCarData,
        changeCar
        // checkFunc,
        // isCheckedAll
        
    }
})