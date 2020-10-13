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
                  var node = $(`<li class="itemCart clr">
                    <div>
                        <input type="checkbox">
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
                    <div>
                        <div class="numbox clr">
                            <span class="iconfont icon-jianhao fl"></span>
                            <div class="fl numChange">${newArr[k].num}</div>
                            <span class="iconfont icon-addTodo-nav fl"></span>
                        </div>
                    </div>
                    <div class="sum">${(newArr[k].price * newArr[k].num).toFixed(1)}</div>
                    <div class="dele">
                        <a href="javascript:;">删除</a>
                    </div>
                </li> `);
                  node.appendTo('.cartContent .goodsCart');
                  
                }
                console.log(sum());
            }
        })
    }
    function sum(){
        var cookieStr = $.cookie('goods');
        var sum = 0;
        if(cookieStr){
            cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num++;
            }
        }
        return sum;
    }
    return{
        downLoad,
        addCarData
    }
})