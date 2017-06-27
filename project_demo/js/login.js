/* 
* @Author: Marte
* @Date:   2017-04-20 18:17:42
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-20 18:23:06
*/

$(document).ready(function(){
    $('.tel').click(function(event) {
        /* Act on the event */
        $(this).addClass('active').siblings().removeClass('active');
        $('#email').hide();
        $('.tel-place').show();
    });
    $('.email').click(function(event) {
        /* Act on the event */
        $(this).addClass('active').siblings().removeClass('active');
        $('#email').show();
        $('.tel-place').hide();
    });
});