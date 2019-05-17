// detect.js - browser & os detection
// 2011 (c) Ben Brooks Scholz. MIT Licensed.

function BrowserDetection(){
    var browser,
    version,
    mobile,
    os,
    osversion,
    bit,
    ua = window.navigator.userAgent,
    platform = window.navigator.platform;
    if(/FBAN/.test(ua)){
      browser = 'Facebook';
      mobile = 1;
      version = 'Mobile';
    }else if(/FBAV/.test(ua)){
      browser = 'Facebook';
      mobile = 1;
      version = 'Mobile';
    }else if(/MSIE/.test(ua)){
      browser = 'Internet Explorer';
      if(/IEMobile/.test(ua)){mobile = 1;}
      version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];
    }else if(/Edge/.test(ua)){
        browser = 'Edge';
        version = /Edge\/[\d\.]+/.exec(ua)[0].split('/')[1];
    }else if(/Chrome/.test(ua)){
      if(/CrOS/.test(ua)){platform = 'CrOS';}
      browser = 'Chrome';
      version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];
    }else if(/Opera/.test(ua)){
      browser = 'Opera';
      if(/mini/.test(ua) || /Mobile/.test(ua)){mobile = 1;}
    }else if(/Android/.test(ua)){
      browser = 'Android Webkit Browser';
      mobile = 1;
      os = /Android\s[\.\d]+/.exec(ua)[0];
    }else if(/Firefox/.test(ua)){
      browser = 'Firefox';
      if(/Fennec/.test(ua)){mobile = 1;}
      version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];
    }else if(/Safari/.test(ua)){
        browser = 'Safari';
        if((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))){
          os = 'iOS';
          mobile = 1;
        }
    }
  
    switch(platform){
      case 'MacIntel':
      case 'MaxPPC':    os = 'MacOS'; break;
      case 'CrOS':      os = 'ChromeOS'; break;
      case 'Win32':     
      case 'Win64':     os = 'Windows'; break;
    }
  
    if(!os){
      if(/Android/.test(ua)){os = 'Android';}
      else if(/Linux/.test(platform)){os = 'Linux';}
      else if(/Windows/.test(ua)){os = 'Windows';}
    }
    
    switch(os){
      case 'iOS':       document.body.classList.add('os-ios'); break;
      case 'Android':   document.body.classList.add('os-android'); break;
      case 'Windows':   document.body.classList.add('os-windows'); break;
      case 'MacOS':     document.body.classList.add('os-mac'); break;
    }
    
    switch(browser){
      case 'Facebook':  document.body.classList.add('browser-facebook');break;
      case 'MSIE':      
      case 'Edge':      document.body.classList.add('browser-edge');break;
      case 'Chrome':    document.body.classList.add('browser-chrome');break;
      case 'Firefox':   document.body.classList.add('browser-firefox');break;
      case 'Safari':    document.body.classList.add('browser-safari');break;
      default:          document.body.classList.add('browser-ie');break;
    }
  }
  
  var domIsReady = (function(domIsReady){
     var isBrowserIeOrNot = function() {
        return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
     }
  
     domIsReady = function(callback) {
        if(callback && typeof callback === 'function'){
           if(isBrowserIeOrNot() !== 'ie') {
              document.addEventListener("DOMContentLoaded", function() {
                 return callback();
              });
           } else {
              document.attachEvent("onreadystatechange", function() {
                 if(document.readyState === "complete") {
                    return callback();
                 }
              });
           }
        } else {
           console.error('The callback is not a function!');
        }
     }
  
     return domIsReady;
  })(domIsReady || {});
  
  ;(function(document, window, domIsReady, undefined){
     domIsReady(function(){
        BrowserDetection();
     });
  })(document, window, domIsReady);