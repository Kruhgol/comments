module.exports = function(){
    return new Textval();
}

function Textval(){

    // функция преобразования строки где неразрешенные теги преобразуются в текст
    var changeStr = function(str){
        // проверка на наличие скриптов, если есть то предупреждение
        //console.log(str);
        // регулярное выражение на проверку наличия скриптов
        regScript = /^.*<script>.*$/g ;
        var isScript = regScript.test(str);
        if (isScript){
            return false;
        } else {
            // заменяем все запрещенные теги на текст
            str = str.replace(/</g, "&lt;");  
            str = str.replace(/>/g, "&gt;");
            // разрешенные теги оставляем как теги
            str = str.replace(/&lt;code&gt;/g, "<code>");
            str = str.replace(/&lt;\/code&gt;/g, "</code>");
            str = str.replace(/&lt;strong&gt;/g, "<strong>");
            str = str.replace(/&lt;\/strong&gt;/g, "</strong>");
            str = str.replace(/&lt;i&gt;/g, "<i>");
            str = str.replace(/&lt;\/i&gt;/g, "</i>");
            str = str.replace(/&lt;a/g, "<a");
            str = str.replace(/<a.*"&gt;/g, function(p1){
                p1 = p1.replace(/&gt;/g, '>')
                return p1;
            });
            str = str.replace(/&lt;\/a&gt;/g, "</a>");
        }
        // возвращем преобразованную строку 
        return str;
    }
    // функция проверки строки на валидацию
    var isTextValide = function(str) {
        // регулярное выражение на наличие разрешенных тегов
        var regResolvedTeg=/<code>(?=.*<\/code>)|<i>(?=.*<\/i>)|<strong>(?=.*<\/strong>)|<a\s*href=\"[a-zA-Z\/0-9]*\"\stitle=\"[^'"]*\">(?=.*<\/a>)/g ;
        // регулярное выражение для валидности вложеных тегов
        regValidChildTeg = /^<([asci]).*>.*<([asci]).*>(?=.*<\/\2.*>).*<\/\1.*>$/;
        // регулярное выражение на проверку вложеного не закрытого тега
        regChildNotCloseTeg = /^<([asci]).*>.*<\/?([a-z0-9]*)>(?!.*<\/\2>).*<\/\1.*>$/;
        // регулярное выражение на проверку тегов в строке
        regIsTegInString = /^.*<\/?[asci].*>.*$/g;

        // проверяем на наличие тегов, если тегов нет то возвращаем 1
        if (str.match(regIsTegInString) == null){
          return true;
        }

        // получаем массив разрешенных тегов которые присутствуют в строке
        tegsArr = str.match(regResolvedTeg);
        if (tegsArr == null){
            return false;
        }

        // reg = /^.*(<i>.*(<i>)+.*<\/i>).*$/g
        // isRepeatTeg = reg.test(str);
        // if (isRepeatTeg){
        //     alert("Текст не валиден!ddddd")
        //     return false;
        // }

        //созададим два массива
        //массив регулярных выражений для нахождения разрешенных тегов и их вложений
        var arr=[];
        //массив регулярных выражений на проверку валидности содержимого тегов
        var arrValidate = [];
        for (var i=0;i<tegsArr.length;i++){
            if(tegsArr[i][1]==='a'){
                arr.push(new RegExp(tegsArr[i]+'.*</a>', "g"));
                arrValidate.push(new RegExp('^'+tegsArr[i]+'.*<([a-z0-9]*)>(?!.*[(</\\1>)]).*'+'.*</a>$'));
            } else {
                arr.push(new RegExp(tegsArr[i]+('.*</'+tegsArr[i].substring(1)),"g"))
                arrValidate.push(new RegExp('^'+tegsArr[i]+'.*<([a-z0-9]*)>(?!.*</\\1>).*</'+tegsArr[i].substring(1)+'$'));
            }
        }    
        // массив разрешенных тегов с их содержимым
        var strArr = [];
        for (var i=0; i<arr.length; i++){
            strArr[i] = str.match(arr[i]);
        }
        // проверка элементов массива strArr на наличие вложеных тегов
        var strValidateArr = [];
        for (var i=0; i<strArr.length; i++){
            if(regValidChildTeg.test(strArr[i])){
                // если есть вложеный валидный тег то ьольше его не проверяем
                continue;
            } else {
                //  если вложеного тега нет то проверяем элемент
                strValidateArr.push(strArr[i])
            }
        }
        // если тегов нет то возвращаем 1
        if(!strValidateArr[0]){
            return true;
        }
        // проверяем содержимое тегов на валидность
        for (var i=0; i<strValidateArr.length; i++){
            if(regChildNotCloseTeg.test(strValidateArr[i])){
                return false;
            }
        }
        // если строка валидна то возвращаем 1
        return true;

    }

    this.isvaltext = function(str){
        str = changeStr(str);
        if(str){
            if(isTextValide(str)){
                return str;
            } else {
                return false;
            }
        }
    }

}