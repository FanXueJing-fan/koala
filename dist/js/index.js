define(['jquery'], function($){
    function bannerDate(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.banner;
                for(var i = 0; i < newArr.length; i++){
                    $(`<li><a href="javascript:;"> <img src="images/banner/${newArr[i]}" alt=""></a></li>`).appendTo('.banner .bannerImgs');

                    var point = $(` <li class="pointListItem"></li>`);
                    if( i == 0){
                        point.addClass('pointList-active');   
                    }
                    point.appendTo('.bannerPoint .pointList');
                    
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
     }
    function bannerTab(){
        var iNow = 0;
        var aImgs = null;
        var aBtns = null;
        var timer = null;
        
        timer = setInterval(function(){
            iNow++;
            tab();
        },4000)
    
        function tab(){
            if(!aImgs){
                aImgs = $('.banner .bannerImgs').find('li');
            }
            if(!aBtns){
                aBtns = $('.bannerPoint .pointList').find('li');
            }
            if(iNow == 3){
                iNow = 0;
            }
            if(iNow == -1){
                iNow = 2;
            }
            aImgs.hide().css('opacity',0.2).eq(iNow).show().animate({opacity:1}, 500);
            aBtns.removeClass('pointList-active').eq(iNow).addClass('pointList-active');
        }

        $('.banner').mouseenter(function(){
            clearInterval(timer);
            $('.bannerArr').css('display','block');
        }).mouseleave(function () { 
            $('.bannerArr').css('display','none');
            timer = setInterval(function(){
                iNow++;
                tab();
            },4000)

        });

        $(".prev").click(function(){
            iNow--;
            tab();
        })
        $(".next").click(function(){
            iNow++;
            tab();
        })

        $('.pointList').on('click','.pointListItem',function(){
            iNow = $(this).index();
            tab();
        })
    }
    function navData(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
               var newArr = result.nav;
               for(var i = 0; i < newArr.length; i++){
                    var dropObj = newArr[i].child;
                    var node = $(`<li class="sortTitle">
                        <div class="sortList-item">
                            <span class="iconfont icon-${newArr[i].icon}"></span>
                            ${newArr[i].txt}
                            <span class="xiangyou">></span>
                        </div>   
                            <div class="dropSort clr">
                                <div class="goodsSort fl ">  </div>
                                <div class="brandBox fr"> <div class="brandList clr"> </div>  </div>
                                <div class="imgBox fr">
                                <a href="javascript:;">
                                    <img src="../images/${dropObj.img}.png" alt="">
                                </a>
                                </div>
                            </div>
                        </li>`);
                        node.appendTo('#sortList');
                       
                         var listArr = dropObj.list;
                         
                         for(var j = 0; j < listArr.length; j++){
                            var node1 = $(`<div class="goodsList fl">
                                <p>
                                    <a href="javascript:;">${listArr[j].title}</a>
                                </p>  
                                <div>   
                                </div>                       
                            </div>`);
                            node1.appendTo(node.find('.goodsSort'));
                         

                            for(var k = 0; k < listArr[j].classify.length; k++){
                                var node2 = $(`
                                <a href="javascript:;">${listArr[j].classify[k]}</a>`);
                                node2.appendTo(node1.find('div'));
                            }
                         }
                        

                         
                         var brandArr = dropObj.brand;
                         for(var j = 0; j < brandArr.length; j++){
                             $(`<a href="javascript:;" class="fl">
                                  <img src="${brandArr[j]}" alt="">
                              </a>`).appendTo(node.find('.brandList'));
                         }

                        
                    } 
                
            },
            error:function(msg){
                console.log(msg);
             }
        })
    }
    function navTab(){
        $('#sortList').on('mouseenter','li', function(){
            $(this).find('.dropSort').show();
        })
        $('#sortList').on('mouseleave','li', function(){
            $(this).find('.dropSort').hide();
        })
    }
    function sportDate(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.sport;
                for(var i = 0; i < newArr.length; i++){
                    $(`<li>
                    <a href="javascript:;">
                        <h3 class="partCon-c-h">${newArr[i].title}</h3>
                        <p class="partCon-c-p">${newArr[i].desc}</p>
                        <img class="partCon-c-i" src="${newArr[i].img}" alt="">
                    </a>
                </li>`).appendTo(".partCon-c .partCon-c-list");
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function sportTabData(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.sportTab;
                for(var i = 0; i < newArr.length; i++){
                    var listArr = newArr[i];
                    var node = $('<div class="partCon-r-list "> </div>');
                    node.appendTo('.partCon-r');
                    for(var j = 0; j < listArr.length; j++){
                        $(`<div class="partCon-r-item  clr">
                        <a class="partCon-r-i fl" href="javascript:;">
                            <img src="${listArr[j].img}" alt="">
                        </a>
                        <div>
                            <h3 class="partCon-r-desc">
                                <a href="javascript:;">
                                ${listArr[j].title}
                                </a>
                            </h3>
                            <p class="partCon-r-price">
                                <span>￥</span>
                                <strong>${listArr[j].cur}</strong>
                                <span>
                                    ￥
                                    <del>${listArr[j].pre}</del>
                                </span>
                            </p>
                        </div>
                    </div>`).appendTo(node);
                    }
                    var point = $(`<li class=" partCon-r-h-list"></li>`)
                    if( i == 0){
                        point.addClass('partCon-r-h-active');
                    }
                    point.appendTo('.partCon-r-h ul');
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function sportTab(){
        var iNow = 0;
        var aDivs = null;
        var aBtns = null;
        var timer = null;
        
        timer = setInterval(function(){
            iNow++;
            tab();
        },3000)
    
        function tab(){
            if(!aDivs){
                aDivs = $('.partCon-r .partCon-r-list');
            } 
            
            if(!aBtns){
                aBtns = $('.partCon-r ul').find('li');
            }
            if(iNow == 3){
                iNow = 0;
            }
            aDivs.hide().css('opacity',0).eq(iNow).show().animate({opacity:1}, 500);
            aBtns.removeClass('partCon-r-h-active').eq(iNow).addClass('partCon-r-h-active');
        }

        $('.partCon-r').mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function () { 
            timer = setInterval(function(){
                iNow++;
                tab();
            },3000)

        });

        $('.partCon-r-h ul').on('mouseenter','li', function(){
            iNow = $(this).index();
            tab();
        })

    }
    function brandData(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.sportBrand;
                for(var i = 0; i < newArr.length; i++){
                    $(` <a href="javascript:;">
                    <img src="${newArr[i]}" alt="">
                    <span class="follow"></span>
                    <span class="toast">已关注</span>
                </a>`).appendTo('.partBrand-list');
                }
                
                $('.partBrand-list').on('mouseenter', 'a', function(){
                    $(this).find('.follow').css('display','block');
                }).on('mouseleave', 'a', function(){
                    $(this).find('.follow').css('display','none');
                    $(this).find('.toast').animate({opacity:0}, 500);
                })

                $('.partBrand-list').on('click','.follow', function(){
                    $(this).addClass('followed');
                    $(this).siblings('span').animate({opacity:1}, 500);
                })
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function hotTabData(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.hotTab;
                for(var i = 0; i < newArr.length; i++){
                    $(`<li class="brandCont-item">
                    <a href="javascript:;">
                        <img src="${newArr[i].img}" alt="">
                        <div class="brandCont-txt">
                            <p class="name">${newArr[i].title}</p>
                            <p class="desc">${newArr[i].desc}</p>
                        </div>
                    </a>
                </li>`).appendTo('.brandCont-tab')
                }
            },
            error:function(msg){

            }
        })
    }
    function hotTab(){
        var iNow = 0;
        var aLis = null;
        var line = $('.brandCont-line');
        var timer = null;
        
        timer = setInterval(function(){
            iNow++;
            tab();
        },3000)
    
        function tab(){
            if(!aLis){
                aLis = $('.brandCont-tab').find('li');
            }
            if(iNow == 3){
                iNow = 0;
            }
            
            aLis.hide().css('opacity',0.2).eq(iNow).show().animate({opacity:1}, 500);
            line.animate({left:-220 + 73.3*(iNow+1)},2000);
        }

        $('.brandCont-l').mouseenter(function(){
            clearInterval(timer);
            $('.brandCont-prev ,.brandCont-next').css('display','block');
        }).mouseleave(function () { 
            $('.brandCont-prev ,.brandCont-next').css('display','none');
            timer = setInterval(function(){
                iNow++;
                tab();
            },3000)

        });

        $(".brandCont-prev").click(function(){
            iNow--;
            tab();
        })
        $(".brandCont-next").click(function(){
            iNow++;
            tab();
        })
    }
    function hotBrand(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.hotBrand;
                for(var i = 0; i < newArr.length; i++){
                    $(` <li class="recomBrand">
                    <div class="brandInfor">
                        <img class="brandLogo" src="${newArr[i].img}" alt="">
                        <p class="brandDesc">${newArr[i].desc}</p>
                    </div>
                    <div class="brandMsak">
                        <a href="javascript:;" class="focusBtn">+关注</a>
                        <p class="focusNum">
                            2292531人关注该品牌
                        </p>
                        <a class="enterBrand" href="javascript:;">进入品牌</a>
                    </div>
                </li>`).appendTo('.brandCont-r');
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    function guess(){
        $.ajax({
            type:'get',
            url:'../data/nav.json',
            success:function(result){
                var newArr = result.guess;
                for(var i = 0; i < newArr.length; i++){
                    $(`<li class="guessItem fl">
                    <a class="guessItemImg" href="javascript:;">
                        <img src="${newArr[i].img}" alt="">
                    </a>
                    <div class="guessItemTit">
                        <a href="javascript:;">${newArr[i].txt}</a>
                    </div>
                    <div class="guessItemPrice clr">
                        <div class="fl curPrice">
                            <span class="symbol">￥</span>${newArr[i].cur}
                            <span class="prePrice">
                                ￥<del>${newArr[i].pre}</del>
                            </span>
                        </div>
                        <a class="comment fr" href="javascript:;">59248人已评价</a>
                    </div>
                </li>`).appendTo('.guessList');
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    function allGoodsTab(){
        $('#header-category ').on('mouseenter','.navFrame', function(){
            $(this).find('#sortList').css('display','block');
        })
        $('#header-category ').on('mouseleave','.navFrame', function(){
            $(this).find('#sortList').css('display','none');
        })
    }
    function fixedFunc(){
        $(window).scroll(function(){
            var t = $(document).scrollTop();
            if(t > 30){
                $('#topSearch').show();
            }else{
                $('#topSearch').hide();
            }
            var asidetop = $(document).scrollTop();
            if(asidetop > 680){
                $('#asideLeft,#asideRight').css({"position":"fixed","top":"66px"})
            }else{
                $('#asideLeft,#asideRight').css({"position":"absolute","top":"525px"})

            }
        })
    }
    return {
        bannerDate,
        bannerTab,
        navData,
        navTab,
        sportDate,
        sportTabData,
        sportTab,
        brandData,
        hotTabData,
        hotTab,
        hotBrand,
        guess,
        allGoodsTab,
        fixedFunc
    }
})