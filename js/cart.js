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
                    <a href="goodDesc.html?id=${goodsArr[j].id}">
                        <img src="${goodsArr[j].imgs[0]}" alt="">
                    </a>
                    <p class="itemTitle">
                        <a href="goodDesc.html?id=${goodsArr[j].id}">${goodsArr[j].title}</a>
                    </p>
                    <div class="itemInfor">
                        <p class="itemMoney">
                        ￥${goodsArr[j].price}
                            <span>￥${goodsArr[j].vip}</span>
                        </p>
                        <a href="goodDesc.html?id=${goodsArr[j].id}">3898 人已评价</a>
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
    return{
        downLoad
    }
})