// ==UserScript==
// @name         log2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.lowadi.com/site/logIn?publicite=1
// @grant        none
// ==/UserScript==

(function() {  
    function getRandomArbitary(min, max)
    {
        return Math.random() * (max - min) + min;
    }

    if(/\/www.lowadi.com/.test(window.location.href) || /\/www.lowadi.com\/site\/logIn?publicite=1/.test(window.location.href)){  
        $.getJSON('http://www.ddddd.esy.es/ajaxDB.php', function(data) { 
            var event = 0; 
            var account_number;
            var account_id = 0;
            for(var i = 0; i<data.length; i++){
                if(data[i]['log'] == 0){
                    account_id = data[i]['id_mail'];
                    account_number = i;
                    break;
                }
            }
            
            function inputData(){ 
                if(account_id!=0 && data[account_number]['was_registration'] == 1){
                    event++;
                    switch(event){
                        case 1: 
                        $('#header-login-label')[0].click();
                        break;
                        case 2:
                            var login = data[account_number]['name'];
                            $('#login').focus().val(login); 
                            break;
                        case 3:
                            var password = data[account_number]['password'];
                            $('#password').focus().val(password);
                            break;
                        case 4:
                            $('#autoidentification')[0].click();
                            break;
                            
                            case 5:
                          $.ajax({  
                                type:'POST',
                                url:'http://www.ddddd.esy.es/insert2.php',
                                dataType:'json',
                                data:{'id': account_id},
                                success:function(html) {     
                                }
                            }); 
                            $('#authentificationSubmit')[0].click();
                            break;    
                    }
                } 
            }
            var timeWait1  = getRandomArbitary(1, 3); 

            setTimeout(inputData, timeWait1*1000); 

            var timeWait2  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait1*1000+timeWait2*1000);

            var timeWait3  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait1*1000+timeWait2*1000+timeWait3*1000);

            var timeWait4  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait1*1000+timeWait2*1000+timeWait3*1000+timeWait4*1000);
            
              var timeWait5  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait1*1000+timeWait2*1000+timeWait3*1000+timeWait4*1000+timeWait5*1000);
        });
    }
    if(/\/www.lowadi.com\/jeu\/?identification=1/.test(window.location.href))$('span.grid-cell')[0].click();
    if(/\/www.lowadi.com\/elevage\/bureau\/crediter/.test(window.location.href))$('a.level-2.grid-table.width-100.align-middle.special')[0].click();
}());