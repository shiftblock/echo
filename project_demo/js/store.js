/* 
* @Author: Marte
* @Date:   2017-04-24 12:34:57
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-24 15:01:30
*/

$(document).ready(function(){
    $.ajax({
        url:'json/store.json',
        type: 'GET',
        dataType: 'json',
        //data: {param1: 'value1'},
    })
    .done(function(data) {
        console.log("success");
        console.log(data.item);
        $.each(data.item, function(index, val) {
             /* iterate through array or object */
             // console.log(val);
             var gOlist="<li>"+"<img src='"+val['it-img']+"' alt='' />"
                        +"<div class='des'>"
                            +"<h2>"+val['it-h2']+"</h2>"
                            +"<h3>"+val['it-h3']+"+</h3>"
                            +"<h4>"+val['it-h4']+"</h4>"
                        +"</div>"
                        +"<div class='price'>"
                            +"<span>"+val['it-price']+"</span>"
                            +"<span class='disc'>"+val['it-discount']+"</span>"
                        +"</div></li>";
             $(gOlist).appendTo($('.goods-list'));
        });
        $('aside ul li').click(function(event) {
            /* Act on the event */
            $(this).addClass('active').siblings().removeClass();
            console.log($(window).height());
        });
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});