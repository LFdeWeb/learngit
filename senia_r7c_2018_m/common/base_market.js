/**
 * Created by luwp on 2018/3/27.
 */
var userObj = {};
var ckbtn = false;
$(document).ready(function() {
    userObj.ActivitiesID = 201803261;
    userObj.checkBtn = false;
    userObj.url = BitautoMarketSk.webapiCommonurl + "Api/Handler1.ashx";
    userObj.txtArr = [$.trim($('#LoginName').val()), $.trim($('#LoginPhone').val()), '', $.trim($('#sex option:selected').text()), $.trim($('#prov option:selected').text()), $.trim($('#city option:selected').text()), $.trim($('#dealer option:selected').text()), $.trim($('#chexing option:selected').text()), $.trim($('#buytime option:selected').text()), ''];
    userObj.isPostYiPai = "0"; //车易通对接状态\1表示对接，0表示不对接
    LoadingProvInfo();
    $('#prov').change(function() {
        LoadingCityInfo($(this).find('option:selected').text());
    });
    $('#city').change(function() {
        LoadingDealerInfo($(this).find('option:selected').text());
    });
    LoadProvdealer();
    $('#provs').change(function() {
        var prov = $(this).find('option:selected').text();
        if (prov != "省份") {
            loadCitydealer(prov);
            selProvByDealerInfo(prov);
        }
    });
    $('#citys').change(function() {
        var city = $(this).find('option:selected').text();
        if (city != "城市") {
            selCityByDealerInfo(city);
        }
    });

    $('#denging').on("click", subForm);
 

});



function subForm() {
    userObj.name = checlUserInfo($('#LoginName').val(), 0);
    userObj.phone = checlUserInfo($('#LoginPhone').val(), 1);
    userObj.email = checlUserInfo($('#email').val(), 2);
    userObj.sex = checlUserInfo($('#sex option:selected').text(), 3);
    userObj.prov = checlUserInfo($('#prov option:selected').text(), 4);
    userObj.city = checlUserInfo($('#city option:selected').text(), 5);
    userObj.dealer = checlUserInfo($('#dealer option:selected').text(), 6);
    userObj.chexing = checlUserInfo($('#chexing option:selected').text(), 7);
    userObj.buytime = checlUserInfo($('#buytime option:selected').text(), 8);
    userObj.provId = "";
    userObj.cityId = "";
    userObj.dealerId = $('#dealer option:selected').val();
    if (checkFrom(userObj)) {
        for (var u in userObj) {
            userObj[u] = userObj[u] == undefined ? "" : userObj[u];
        }
        dengingLogin(userObj);
    }
}

function checlUserInfo(mag, i) {
    if ($.trim(mag) == userObj.txtArr[i]) {
        return "";
    } else {
        return mag;
    }
}
/*
 注册表单验证
 */
function checkFrom(userObj) {
    if (exist("LoginName")) {
        if (userObj.name == "") {
            alert('请填写姓名');
            return false;
        } else {
            if (GetStringRealLength(userObj.name) > 20) {
                alert('请输入正确的姓名');
                return false;
            }
        }
    }
    if (exist("sex")) {
        if (userObj.sex == "") {
            alert('请选择性别');
            return false;
        }
    }
    if (exist("LoginPhone")) {
        if (userObj.phone == "") {
            alert('请填写手机号');
            return false;
        } else {
            if (!isMobile(userObj.phone)) {
                alert('请填写正确的手机号，如:13012345678');
                return false;
            }
        }
    }

    if (exist("email")) {
        if (userObj.email != "") {
            if (!isMail(userObj.email)) {
                alert('请填写正确的邮箱号，如:yiche@qq.com');
                return false;
            }
        }
    }

    if (exist("prov")) {
        if (userObj.prov == "") {
            alert('请选择省份');
            return false;
        }

    }
    if (exist("city")) {
        if (userObj.city == "") {
            alert('请选择城市');
            return false;
        }
    }

    if (exist("dealer")) {
        if (userObj.dealer == "") {
            alert('请选择经销商');
            return false;
        }
    }
    if (exist("buytime")) {
        if (userObj.buytime == "") {
            alert('请选择预计购车时间');
            return false;
        }
    }

    if (exist("chexing")) {
        if (userObj.chexing == "") {
            alert('请选择意向车型');
            return false;
        }
    }
    if (!$('.agree_input_xy').is(':checked')) {
        alert('请确认  我已阅读并同意《隐私政策》里的各项内容');
        return false;
    }

    return true;
}
/*
 注册表单重置
 */
function Empty() {
    $('#LoginName').val(userObj.txtArr[0]);
    $('#LoginPhone').val(userObj.txtArr[1]);
    $('#sex').val('1');
    $('#prov').val('-1');
    $('#city').val('-1');
    $('#dealer').val('-1');
    $('#chexing').val('-1');
    $('#buytime').val('-1');
}
/*
 注册表单提交
 */
function dengingLogin(userObj) {
    var YOrderTypeID = 1; //订单类型
    var YDealerID = ""; //经销商ID 销售提供
    var YLocationID = ""; //地区id
    var YUserIP = ""; //用户IP
    var YCarSerialId = ""; //车型ID 销售提供
    var YCarId = ""; //车款ID 销售提供
    //消息推送参数开始
    var msgUserId = 0; //易车会员ID
    var msgAddress = 0; //地址
    var msgbsid = "58"; //车型品牌
    var msgcsid = ""; //车型
    try {
        if (Bitauto.Login.result.isLogined == true) {
            msgUserId = Bitauto.Login.result.userId;
        }
    } catch (err) {

    }

    try {
        YLocationID = bit_locationInfo.cityId
    } catch (e) {

    }
    try {
        YUserIP = bit_locationInfo.IP;
    } catch (e1) {

    }
    var xcweblog = "";
    try {
        xcweblog = XCWEBLOG_ID;
    } catch (err1) {}

    var filedgstr = "";
    var marketfromad = request("marketfromad");
    try {
        var fgcx = request("fgcx");
        if (fgcx == "yes") {
            if (filedgstr == "") {
                filedgstr = "6";
            } else {
                filedgstr += "(6)";
            }
        }
    } catch (err2) {

    }

    if (marketfromad == "") {
        filedgstr += marketfromad;
    } else {
        filedgstr += "(" + marketfromad + ")";
    }
    var SMARTCODE = request("SMARTCODE");
    var cityName = "";
    try {
        cityName = bit_locationInfo.cityName;
    } catch (e) {}

    var str = escapeStr(',' + userObj.name + ',' + userObj.phone + ',' + userObj.prov + ',' + userObj.city + ',' + userObj.dealer + ',' + filedgstr + ',' + userObj.sex + ',' + userObj.chexing + ',' + ',' + userObj.buytime + ',' + ',' + ',,,' + xcweblog + ',' + userObj.provId + ',' + userObj.cityId + ',' + userObj.dealerId);
    var body = "isonlyphone=3&istdata=1&SMARTCODE=" + escapeStr(SMARTCODE) + "&strC=" + escapeStr(cityName); //常规参数
    body += "&isPostYiPai=" + userObj.isPostYiPai + "&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
    //消息推送传参开始
    body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
    //消息推送传参结束
    body += "&action=insert&actid=" + userObj.ActivitiesID + "&data=" + str; //报名参数

    if (userObj.checkBtn == false) {
        userObj.checkBtn = true;
        $.getJSON(userObj.url + "?callback=?", body, function(data) {
            if (data.success) {
                userObj.checkBtn = false;
                SetCookie('dzrecid_2017' + userObj.ActivitiesID, data.result);
                alert('报名成功，感谢您的关注！');
                Empty();
            } else {
                if (data.result == '-2') {
                    userObj.checkBtn = false;
                    alert('此手机号已报过名，请勿重复报名');
                } else if (data.result == '-10') {
                    userObj.checkBtn = false;
                    alert('此活动报名已结束！');
                } else {
                    userObj.checkBtn = false;
                    alert('服务器繁忙中...');
                }
            }
        });
    }
}
/*
省份城市联动
 */
function LoadingProvInfo() {
    var prostr = "<option value=\"-1\">" + userObj.txtArr[4] + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (prostr.indexOf(delInfo.prov) < 0) {
            prostr += "<option  value=" + delInfo.provId + ">" + delInfo.prov + "</option>";
        }
    }
    $('#prov').html(prostr);
}

function LoadingCityInfo(prov) {
    var ctystr = "<option value=\"-1\">" + userObj.txtArr[5] + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (ctystr.indexOf(delInfo.city) < 0) {
            if (delInfo.prov == prov) {
                ctystr += "<option value=" + delInfo.cityId + ">" + delInfo.city + "</option>";
            }
        }
    }
    $('#city').html(ctystr);
}

function LoadingDealerInfo(city) {
    var delstr = "<option value=\"-1\">" + userObj.txtArr[6] + "</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (delInfo.city == city) {
            delstr += "<option value=" + delInfo.dealerId + ">" + delInfo.dealer + "</option>";
        }
    }
    $('#dealer').html(delstr);
}



function LoadProvdealer() {
    var provstr = "<option value=\"-1\">省份</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (provstr.indexOf(delInfo.prov) < 0) {
            provstr += "<option value=" + delInfo.provId + ">" + delInfo.prov + "</option>";
        }
    }
    $('#provs').html(provstr);
}

function loadCitydealer(prov) {
    var citystr = "<option value=\"-1\">城市</option>";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (citystr.indexOf(delInfo.city) < 0) {
            if (delInfo.prov == prov) {
                citystr += "<option value=" + delInfo.cityId + ">" + delInfo.city + "</option>";
            }
        }
    }
    $('#citys').html(citystr);
}



function selProvByDealerInfo(prov) {
    var str = "";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (delInfo.prov == prov) {
            str += "<ul class=\"roll-item\"><li>" + delInfo.dealer + " </li><li>地    址：" + delInfo.address + " </li><li>销售热线：" + delInfo.phone + "</li></ul>";
        }
    }
    $('#dealerInfo').html(str);
}

function selCityByDealerInfo(city) {
    var str = "";
    for (var i = 0; i < JSonData.Information.length; i++) {
        var delInfo = JSonData.Information[i];
        if (delInfo.city == city) {
            str += "<ul class=\"roll-item\"><li>" + delInfo.dealer + " </li><li>地    址：" + delInfo.address + " </li><li>销售热线：" + delInfo.phone + "</li></ul>";
        }
    }
    $('#dealerInfo').html(str);
}


