// ==UserScript==
// @name         logout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://football.ua/
// @grant        none
// ==/UserScript==

(function() {  
    $.ajax({  
    type:'POST',
    url:'http://www.ddddd.esy.es/no_log.php',
    success:function(html) {
    }
    });    
}());
