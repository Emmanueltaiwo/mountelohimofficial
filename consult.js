
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?57041';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Continue to chat",
  "borderRadius":"25",
  "marginLeft":"20",
  "marginBottom":"50",
  "marginRight":"50",
  "position":"left"
},
"brandSetting":{
  "brandName":"Mount Elohim Hospital",
  "brandSubTitle":"Typically replies within a day",
  "brandImg":"mtlogo.png",
  "welcomeText":"Hi there!, Welcome to mount Elohim Hospital,\nHow can I help you?",
  "messageText":"I would love to book for a consultation",
  "backgroundColor":"#0a5f54",
  "ctaText":"Start Chat",
  "borderRadius":"25",
  "autoShow":true,
  "phoneNumber":"2348069024736"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);