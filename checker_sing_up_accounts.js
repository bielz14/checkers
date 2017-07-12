// ==UserScript==
// @name         auto-registration_page3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.lowadi.com/jeu/
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js

// ==/UserScript==

(function() {  
    function getRandomArbitary(min, max)
    {
        return Math.random() * (max - min) + min;
    }
    if(/\/www.lowadi.com\/site\/logIn/.test(window.location.href) || /\/www.lowadi.com\/site\/logIn?publicite=1/.test(window.location.href)){
        //кликаем по баттону регистрации
        function clickRegistration(){
            $('a.button-style-20')[0].click();
        }
        //генерируем число с плавающей точкой (десятичная дробь) для время ожидания клика по кнопке регистрации
        var timeWait1  = getRandomArbitary(1, 10); 
        setTimeout(clickRegistration, timeWait1*1000);   
    }
    if(/\/www.lowadi.com\/inscription\/inscription/.test(window.location.href)){  
        $.getJSON('http://www.ddddd.esy.es/ajaxDB.php', function(data) { 
            var event = 0; 

            var account_number;
            var account_id = 0;
            for(var i = 0; i<data.length; i++){
                if(data[i]['was_registration'] == 0){
                    account_id = data[i]['id_mail'];
                    account_number = i;
                    break;
                }
            }
            function inputData(){ 
                if(account_id!=0){
                    event++;
                    switch(event){
                        case 1: 
                            //фокусируеимся на поле ввода никнейма и вводим его
                            //document.getElementById("doSignUpLogin").focus();
                            $("#doSignUpLogin").focus().val(data[account_number]['name']); // вставить текст в активное поле (взяли в фокус)
                            break;

                        case 2:
                            //фокусируеимся на поле ввода пароля
                            //Вводим пароль
                            $("#doSignUpPassword").focus().val(data[account_number]['password']); // вставить текст в активное поле (взяли в фокус)
                            break;

                        case 3:

                            $("#doSignUpPasswordBis").focus().val(data[account_number]['password']); 
                            break;


                        case 4:
                            //фокус на html элементе select для выбора дня рождения и установка значения дня рождения
                            var day = data[account_number]['date'].substring(8, 10);
                            if(day === null) day = parseInt(getRandomArbitary(1, 31), 10);
                            if(parseInt(day.substring(0,1), 10) == 0)day = data[account_number]['date'].substring(9, 10);
                            $('#doSignUpBirthdateDay').focus().val(day); 

                            var monday = data[account_number]['date'].substring(5, 7);
                            if(monday === null) monday = parseInt(getRandomArbitary(1, 12), 10);
                            if(parseInt(monday.substring(0,1), 10) == 0)monday = data[account_number]['date'].substring(6, 7);
                            $('#doSignUpBirthdateMonth').focus().val(monday);

                            var year = data[account_number]['date'].substring(0, 4);
                            if(parseInt(year, 10) > 2009 || year === null) year = parseInt(getRandomArbitary(1920, 2009), 10);
                            $('#doSignUpBirthdateYear').focus().val(year);
                            if(day.length == 1) day = '0'+day; 
                            if(monday.length == 1) monday = '0'+monday; 
                            $('#doSignUpBirthdate').val(year+'-'+monday+'-'+day); 
                            break;

                        case 5: 
                            $('#doSignUpEmail').focus().val(data[account_number]['email']);
                            break;

                        case 6:
                            $('#terms')[0].click();
                            break;

                        case 7:
                            $.ajax({	
                                type:'POST',
                                url:'http://www.ddddd.esy.es/insert.php',
                                dataType:'json',
                                data:{'id': account_id},
                                success:function(html) {
                                }
                            });
                            $('.button-text-20')[0].click();
                            break;
                    }
                } 
            }
            var timeWait2  = getRandomArbitary(1, 10); 

            setTimeout(inputData, timeWait2*1000); 

            var timeWait3  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000);

            var timeWait4  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000+timeWait4*1000);

            var timeWait5  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000+timeWait4*1000+timeWait5*1000);

            var timeWait6  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000+timeWait4*1000+timeWait5*1000+timeWait6*1000);

            var timeWait7  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000+timeWait4*1000+timeWait5*1000+timeWait6*1000+timeWait7*1000);

            var timeWait8  = getRandomArbitary(1, 10); 
            setTimeout(inputData, timeWait2*1000+timeWait3*1000+timeWait4*1000+timeWait5*1000+timeWait6*1000+timeWait7*1000+timeWait8*1000);
        });
    }


    if(/\/www.lowadi.com\/jeu/.test(window.location.href) || /\/www.lowadi.com\/jeu\/?identification=1/.test(window.location.href))$('span.grid-cell')[0].click();

    if(/\/www.lowadi.com\/elevage\/bureau\/crediter/.test(window.location.href))$('a.level-2.grid-table.width-100.align-middle.special')[0].click();
}());
