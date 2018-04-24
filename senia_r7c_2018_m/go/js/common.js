$(document).ready(function(e) {
    var activeSlide = $(".page1");
    var actionEl = activeSlide.find("[data-action]");
    var actionDe = activeSlide.find("[data-delay]");
    var checkBtn = false;
    //setInterval(function(){
    //console.log(document.getElementById('o2').getBoundingClientRect().left)
    //},500);
    actionEl.each(function() {
        var motion = $(this).data("action");
        //  var delaydiv = $(this).data("delay");
        $(this).css({
            // "visibility": "visible",
            // "opacity": "1"
        }).addClass("animated " + motion);
    });
    actionDe.each(function() {
        // var motion = $(this).data("action");
        var delaydiv = $(this).data("delay");
        $(this).addClass("animated " + delaydiv);
    });
    var flag = false;
    var pzw = $(".pz_f").width();
    var pzwl = $(".pz_f").offset().left;
    var carIDwidth = $("#carID").width();
    var pzr = pzw + pzwl;
    var pznum = 0;
    var endnum = "";
    var u = navigator.userAgent;

    function shownum(pznum) {
        $(".pznum").show();
        $(".pzagain").show();
        var endnum = pznum;
        $(".pznum span").find("i").text(endnum.toFixed(0));
    }
    $("#gameAgain").click(function() {
        $(".cardynamic").removeClass("go");
        $(".cardynamic").removeClass("stop");
        $(".chelun .l,.chelun .r").removeClass("stop");
        $(".pznum").hide();
        $(".pzagain").hide();
        $(".pznum span").find("i").text("0");
        $(".youxiqian").show();
        if (u.indexOf('iPhone') > -1) {
            //苹果手机
            var cl = $("#carID").position().left;
            var ct = $("#carID").position().top;
            $(".cardynamic").removeClass("go");
            $(".cardynamic").css({
                "top": ct,
                "left": "initial",
                "right": "-2.4rem"
            });
            $(".chelun .l,.chelun .r").removeClass("noanimation");
        };
    });



    $('#startCj').click(function() {
        var recid2017 = GetCookie("dzrecid_2017" + "201803261");
        var time = GetCookie("dzrecid_2017" + recid2017);
        time = parseInt(time);
        var body = "action=UpdataFieldMByRecIDNew&actid=" + "201803261" + "&fm=" + escapeStr(time) + "&id1=" + recid2017; //报名参数
        $.getJSON("http://api.market.bitauto.com/webapi/Api/Handler1.ashx?callback=?", body, function(data) {
            if (data.success) {
                startCj(recid2017);
            } else {
                if (data.result == "-2") {
                    alert('您已经参加过此活动~');
                }
            }
        });
    })

    function startCj(recid) {
        var gameUrl = "http://api.market.bitauto.com/webapi/Api/ChouJiang.ashx";
        var body = "Action=choujiang&ActivitiesID=" + "201803261" + "&LoginUserID=" + recid + "&rm=" + 9999 * Math.random();
        if (checkBtn == false) {
            checkBtn = true;
            $.getJSON(gameUrl + "?callback=?", body, function(data) {
                if (data.success) {
                    var item = data.result;
                    var msg = data.message;
                    showMsg(item, msg, recid);
                    checkBtn = false;
                } else {
                    var item1 = data.result;
                    var msg = data.message;
                    showMsg(item1, msg, recid);
                    checkBtn = false;
                }
            });
        }
    }


    var showMsg = function(item, msg, recid) {
        if (item == -4) {
            SetCookie('dzrecid_2017' + recid, recid);
            alert('对不起,您已参与了抽奖,请勿重复参与！');
        } else if (item == -3) {
            alert('对不起,此抽奖活动已结束！');
        } else if (item == -1) {
            alert('请您先报名再参加抽奖！');
        } else {
            switch (parseInt(item)) {
                case 0:
                    alert('很遗憾没中奖，感谢您的参与!');
                    break;
                case 836:
                    if (msg == "无线耳机") {
                        alert('恭喜您获得Bose QuietControl 30 无线耳机');
                    }
                    break;
                case 837:
                    if (msg == "蓝牙小音箱") {
                        alert('恭喜您获得JBL Pulse2 音乐脉动2 炫彩蓝牙小音箱');
                    }
                    break;
                case 838:
                    if (msg == "200元京东卡") {
                        alert('恭喜您获得京东E卡经典卡200面值（电子卡）');
                    }
                    break;
                case 839:
                    if (msg == "优酷会员季卡") {
                        alert('恭喜您获得优酷会员季卡');
                    }
                    break;
                default:
                    alert('很遗憾没中奖，感谢您的参与!');
                    break;
            }
            SetCookie('dzrecid_2017' + recid, recid);
        }
    }


    $('.paizhao').click(function() {
        var recid2017 = GetCookie("dzrecid_2017201803261");
        if (recid2017 == null || recid2017 == "" || recid2017 == undefined) {
            alert('请先报名再参加游戏~');
        } else {

            if (!flag) {
                $(".youxiqian").hide();
                $(".cardynamic").addClass("go");
                flag = true;
            } else {
                var cl = $("#carID").position().left;
                var ct = $("#carID").position().top;
                if (u.indexOf('iPhone') > -1) {
                    //苹果手机
                    $(".cardynamic").removeClass("go");
                    $(".cardynamic").css({
                        "top": ct,
                        "left": cl
                    });
                    $(".chelun .l,.chelun .r").addClass("noanimation");
                };
                $(".cardynamic").addClass("stop");
                $(".chelun .l,.chelun .r").addClass("stop");
                $(".pz_f img").attr({
                    src: "images/pz_e.png"
                });
                var youxiaojuli = (pzw + carIDwidth) / 2;
                var fenshupx = 100 / youxiaojuli;
                var weizhi = Math.abs($("#o1").offset().left - $("#o2").offset().left);
                var feshu = 0;
                if (weizhi == 0) {
                    feshu = 100;
                } else if (weizhi >= youxiaojuli) {
                    feshu = 0;
                } else {
                    feshu = 100 - (weizhi * fenshupx);
                }
                shownum(feshu);
                SetCookie('dzrecid_2017' + recid2017, feshu);
                flag = false;
                return
            }
        }　
        // -28 =127.5= 283
    });
})