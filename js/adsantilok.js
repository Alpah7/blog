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
            jQuery("body").append('<div id="energysaving"><br></br><br></br><img class='img-responsive jembut' src="https://lh3.googleusercontent.com/-1wnZJX2L4YI/VvputzGCoXI/AAAAAAAAD8U/xD93WB_Fl7sRO5aBgXRGplJV3SD7rgd9wCCo/s512-Ic42/chinoads.png" height="400" width="400" alt="Stop-AdBlock" /><div id="copyrightOnlineLeaf">Copyright 2016 <font style="color: #666666;"> LinuxSec</font> - All rights reserved</div></div>');
        });
    });
}
jAntiBlock();// JavaScript Document
