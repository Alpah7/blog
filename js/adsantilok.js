/*
 * jQuery Anti Adblock
 * @copyright Hendriono http://modification-blog.blogspot.com
 * Edited Didik Ariyana http://didikariyana16.blogspot.com
 * @version 1.00 (9 Maret 2011)
 */
var standby = false;

function CekBlok() {
    if ($(".adsantilok").height() == "0") {
        TutupHalaman();
    }
}

function TutupHalaman() {
    if (!standby) {
        var h = 0;
        h = jQuery(window).height();
        jQuery("#energysaving").show().css({
            height: "0",
            width: "0",
            left: "50%",
            top: "50%"
        }).animate({
            width: "100%",
            height: h,
            left: "0",
            top: "0",
            opacity: "1"
        }, 1000);
        standby = true;
    }
}
document.write('<link rel="stylesheet" href="'+ linkcss +'" type="text/css">');

function jAntiBlock() {
    jQuery(function () {
        jQuery(document).ready(function () {
            setTimeout("CekBlok();", 1000);
            jQuery("body").append('<div id="energysaving"><img src="https://lh3.googleusercontent.com/-aucopBKJ9zA/VvWTsdwpy0I/AAAAAAAAD6U/dPl4SVfq-OwqNYTWt0Ip9yZzRFJDweX2wCCo/s600-Ic42/chinochan-ad.png" height="500" width="500" alt="Stop-AdBlock" /><p>Anda tidak suka iklan?<br /><span>Sama, Saya juga. <br/>Tapi anda harus tahu bahwa iklan sangat membantu blog ini agar tetap tersedia dan membuat saya termotivasi untuk terus menulis hal-hal yang menarik pada blog ini.<br/> Mohon pertimbangannya untuk menonaktifkan perangkat lunak blokir iklan (misal: Adblock) khusus untuk blog ini. <br/><i><b>Setelah Anda menonaktifkan AdBlock, silahkan Reload kembali Halaman ini dengan menekan F5.</b></i><br/> Dan saya meminta Maaf jika anda merasa Iklan diBlog ini Mengganggu anda<br/>Sebagai ucapan terima kasih, saya akan memberikan apresiasi yang setinggi-tingginya jika suatu hari kita bertemu dikehidupan nyata.<br/>' + adminblog + '</span></p><div id="copyrightOnlineLeaf">Copyright 2016 <font style="color: #666666;"> DH</font> - All rights reserved</div></div>');
        });
    });
}
jAntiBlock();// JavaScript Document
