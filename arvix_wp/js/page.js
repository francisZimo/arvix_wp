$(function(){


    //$(document).ready(function(){
    //    $(window).resize(function(){
    //        full($('.nav_wrap'),$('.banner_wrap'),$('.banner'));
    //        full($('.area_ul'),$('.detail_wrap'),$('.detail_ul'));
    //        full_ex($('.partner'),$('.footer_inner'),$('.partners'));
    //    });
    //});

    var $area_li=$('.area_ul>li');
    for(var i=0;i<$area_li.length;i++){
        $area_li.eq(i).find('.ico').css({'background-position':-i*100+'px '+'0px '})
    }

})
window.onload=window.onresize=function(){

    full($('.nav_wrap'),$('.banner_wrap'),$('.banner'));
    full($('.area_ul'),$('.detail_wrap'),$('.detail_ul'));
    full_ex($('.partner'),$('.footer_inner'),$('.partners'));
}
function full(up_obj,down_obj,inner_obj){

    var client_height=document.documentElement.clientHeight;
    var inner_objw=inner_obj.width();
    var inner_bojh=inner_obj.height();
    var wrap_h=up_obj.height();
    var down_h=client_height-wrap_h;
    down_obj.height(down_h);
    inner_obj.css({'marginTop':(down_obj.height()-inner_bojh)/2+'px','marginLeft':(down_obj.width()-inner_objw)/2+'px'});

}

function full_ex(up_obj,down_obj,inner_obj){

    var client_height=document.documentElement.clientHeight;
    var inner_objw=inner_obj.width();
    var inner_bojh=inner_obj.height();
    var wrap_h=up_obj.height();
    var down_h=client_height-wrap_h;
    down_obj.height(down_h);
    inner_obj.css({'marginLeft':(down_obj.width()-inner_objw)/2+'px'});

}