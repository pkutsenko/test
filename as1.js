/* eslint-disable */
console.log(document.readyState)
window.onload =  function() {
  console.log(document.readyState)
  alert('ok');
};
console.log('ok');
var rsi_now=new Date();
var rsi_csid='C16061';var asi_csids=asi_csids||[];asi_csids.push(rsi_csid);function rsiClient(Ea){this._rsiaa=Ea;this._rsiba=1;this._rsica=1;this._rsida=0;this._rsiea=0;this._rsifa="160224";this._rsiga="pix04.revsci.net";this._rsiha="js";this._rsiia="b";this._rsija="3";this._rsika=3;this._rsila=1;this._rsima=0;this._rsina=new Array();this._rsioa=0;this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=[];this._rsita=null;this._rsiua=null;this._rsiva=0;this.DM_cat=function(Fa){this._rsipa=Fa;};this.DM_name=function(Ga){this._rsiqa=Ga;};this.DM_keywords=function(st){this._rsira=st;};this.DM_event=function(Ha){this._rsisa.push(Ha);};this.DM_addToLoc=function(n,v){this._rsita=_rsiwa(this._rsita,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsixa(n),_rsixa(v));};this.DM_setLoc=function(u){this._rsita=u;};this.rsi_c=function(Ea){this._rsiaa=Ea;};this.rsi_ral=function(Ia){this._rsiba=Ia;};this.rsi_riu=function(Ja){this._rsica=Ja;};this.rsi_tiu=function(Ka){this._rsida=Ka;};this.rsi_m=function(La){this._rsiea=La;};this.rsi_s=function(Ma){this._rsiga=Ma;};this.rsi_t=function(Na){this._rsiha=Na;};this.rsi_en=function(Oa){this._rsiia=Oa;};this.rsi_cn=function(Pa){this._rsija=Pa;};this.rsi_us=function(Qa){this._rsika=Qa;};this.rsi_ra=function(ra){this._rsila=ra;};this.rsi_ieac=function(ac){this._rsima=ac;};this.DM_tag=function(){var Ra;if(this._rsioa==0||this._rsiea==1){if(typeof(DM_prepClient)=="function"){try{DM_prepClient(this._rsiaa,this);}catch(ignore){}}var Sa=this._rsiya();if(this._rsiha=="gif"){Ra=new Image(2,3);Ra.src=Sa;this._rsina[this._rsina.length]=Ra;}else if(this._rsiha=="js"){var Ta=document.createElement("script");Ta.language="JavaScript";Ta.type="text/javascript";Ta.src=Sa;Ta.async=true;Ta.defer=true;var Ua=(document.body==null)?document.getElementsByTagName("head")[0]:document.body;if(this._rsima&&_rsiza()){Ua.appendChild(Ta);}else{Ua.insertBefore(Ta,Ua.firstChild);}Ra=Ta;}this._rsioa=1;}this.rsi_r();return Ra;};this._rsiya=function(){var Va="";Va="DM_LOC="+_rsixa(this._rsita);if(this._rsipa){Va+="&DM_CAT="+_rsixa(this._rsipa);}if(this._rsisa&&this._rsisa.length){for(var x=0;x<this._rsisa.length;++x){Va+="&DM_EVT="+_rsixa(this._rsisa[x]);}}if(this._rsira){Va+="&DM_KYW="+_rsixa(this._rsira);}if(this._rsica==1&&this._rsiua){Va+="&DM_REF="+_rsixa(this._rsiua);}if(this._rsida==1){Va+="&DM_TIT="+_rsixa(document.title);}if(this._rsiqa){Va+="&DM_NAM="+_rsixa(this._rsiqa);}var Wa="//";var Xa="/"+this._rsiaa+"/"+this._rsiia+this._rsija+"/0/"+this._rsika+"/"+this._rsifa+"/";var Ya=Math.floor(Math.random()*1000000000)+"."+this._rsiha;var Za=Wa+this._rsiga+Xa+Ya+"?"+Va+"&C="+_rsixa(asi_csids)+"&L="+this._rsiva;var $a=Za.length;if($a>=2000){if(Za.charAt(1998)=='%'){Za=Za.substr(0,1998);}else if(Za.charAt(1999)=='%'){Za=Za.substr(0,1999);}else{Za=Za.substr(0,2000);}if(Za.charAt(Za.length-3)=='%'&&Za.charAt(Za.length-2)=='2'&&Za.charAt(Za.length-1)=='5'){Za=Za.substr(0,Za.length-3);}}return Za;};this.rsi_r=function(){var ab=window.document.location;var bb=window.document.referrer;var cb=0;var db=0;if(this._rsiba==1){var eb=window;while(true){try{if(eb.document.location.length>0)ab=eb.document.location;if(eb.document.referrer.length>0)bb=eb.document.referrer;cb=db;}catch(notAllowed){}if(eb==window.top||eb==eb.parent){break;}eb=eb.parent;db++;}}this._rsiva=db-cb;this._rsiua=this._rsila?_rsiAa(bb.toString()):bb.toString();if(this._rsiva==0){this._rsita=(this._rsila)?_rsiAa(ab.href):ab.href;}else{this._rsita=this._rsiua;}this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=[];};this.rsi_r();}var _rsixa;if(typeof(encodeURIComponent)=="function"){_rsixa=encodeURIComponent;}else{var _rsiBa=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsixa=function(v){return v.toString().replace(_rsiBa,_rsiCa);}}function _rsiwa(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsiAa(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsiDa(i){var fb=i.toString(16).toUpperCase();return fb.length<2?"0"+fb:fb;}function _rsiCa(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsiDa(i);if(i<2048)return "%"+_rsiDa(0xC0+(i>>6))+"%"+_rsiDa(0x80+(i&0x3F));if(i<65536)return "%"+_rsiDa(0xE0+(i>>12))+"%"+_rsiDa(0x80+(i>>6&0x3F))+"%"+_rsiDa(0x80+(i&0x3F));return "%"+_rsiDa(0xF0+(i>>18))+"%"+_rsiDa(0x80+(i>>12&0x3F))+"%"+_rsiDa(0x80+(i>>6&0x3F))+"%"+_rsiDa(0x80+(i&0x3F));}function _rsiza(){return(navigator.appName=='Microsoft Internet Explorer');}window[rsi_csid]=new rsiClient(rsi_csid);
if(window[rsi_csid])window[rsi_csid].rsi_c("F09828");
if(window[rsi_csid]){window[rsi_csid].rsi_ra(0);window[rsi_csid].rsi_r();}else{rsi_ra(0);rsi_r();}
if(window[rsi_csid])window[rsi_csid].rsi_m(1);else rsi_m(1);
if(window[rsi_csid])window[rsi_csid].rsi_ral(1);else rsi_ral(1);
if(window[rsi_csid])window[rsi_csid].rsi_r();else rsi_r();
if(window[rsi_csid])window[rsi_csid].DM_addEncToLoc("bpid",'goo');else DM_addEncToLoc("bpid",'goo');
var asi_uid = 'BAtKftWwnqMWok_UA-HxiI_PT1vy';
function asi_addElem(e){var p=document.body==null?document.getElementsByTagName('head')[0]:document.body;p.insertBefore(e,p.firstChild);}
function asi_makeIFrame(u,h,w){var e=document.createElement("iframe");e.height=h?h:0;e.width=w?w:0;e.frameBorder=0;e.src=u;return e;}
function asi_makeJS(u){var e=document.createElement("script");e.language="JavaScript";e.type="text/javascript";e.async=true;e.src=u;return e;}
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
function asi_scheme(){return "http"+(location.protocol=="https:"?"s":"");}
function asi_addOnSegs(wa){var xa=DM_onSegsAvailable;var ya=rsi_csid.toLowerCase();return function(za,Aa){wa(za,Aa);if(typeof(xa)=="function"&&Aa==ya){xa(za,Aa);}};}

asi_makeGIF('//sync.search.spotxchange.com/partner?adv_id=7127&uid=BLf2ogmFq27bHpPhzl0tvUJzk24_');
if(window[rsi_csid])window[rsi_csid].DM_tag();else DM_tag();
