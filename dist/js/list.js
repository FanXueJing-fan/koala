define(['jquery'], function($){

    function downLoad(){
        $.ajax({
            type:'get',
            url:'../data/goods.json',
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                    $(`<div class="goodsContainer">
                    <div class="goods-item">
                        <div class="goods-img">
                            <a href="goodDesc.html?id=${arr[i].id}">
                                <img src="${arr[i].imgs[0]}" alt="">
                            </a>
                            <img src="images/p1010.png" alt="">
                            <p class="tag-first">扫货价</p>
                            <p class="tag-second">新品</p>
                        </div>
                        <div class="bottom-part">
                            <h5 class="goods-title">
                                <a href="goodDesc.html?id=${arr[i].id}">
                                ${arr[i].title}
                                </a>
                            </h5>
                            <div class="price">
                                <span>￥</span>${arr[i].price}
                            </div>
                            <div class="vip">
                            <div class="price-vip">
                                <img src="images/blackcard.png" alt="">
                                <span>￥</span>${arr[i].vip}
                            </div>
                            </div>
                            <a class="addCar" href="goodDesc.html?id=${arr[i].id}">立即购买</a>
                        </div>
                    </div>
                </div>`).appendTo('#box .goods-list');
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    return{
        downLoad
    }
})