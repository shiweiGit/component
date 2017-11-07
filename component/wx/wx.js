success: function(data){ //debugger
	// 微信支付
	var data = data.data;
		wx.config({
	    debug: false,
	    appId: data.appId,
	    timestamp: data.timeStamp,
	    nonceStr: data.nonceStr,
	    signature:data.sign,
	    jsApiList: [
	        'checkJsApi',
	        'chooseWXPay'
	    ]                                            
	});        
  	wx.ready(function () {
      wx.chooseWXPay({
        appId: data.appId,  
        timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
        package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: data.sign, // 支付签名
        success: function (res) {
	        // 支付成功后的回调函数
	         if (res.errMsg == "chooseWXPay:ok") {  
		        //支付成功
		        window.location.href=""
		    } else {  
		        alert(res.errMsg);  
		    }  
        },  
		cancel: function(res) {  
		    //支付取消  
		}  
       });
      });                                                          
             
  },
  error: function(data){
  
  }
	
	
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"> </script>