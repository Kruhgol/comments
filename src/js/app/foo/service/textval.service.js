
//factory service for validiting comentText

module.exports = function(){
    return new Textval();
}

function Textval(){
    //function for transforming str with tegs to str with allowed tags
    //tag script is forbidden
    //change <, > =>  &lt; , &gt;
    //@param {String} 
    //if str is valid - return {String}
    //if str is invalid - return false

    var changeStr = function(str){

        regScript = /^.*<script>.*$/g ;
        var isScript = regScript.test(str);
        if (isScript){
            return false;
        } else {
            str = str.replace(/</g, "&lt;");  
            str = str.replace(/>/g, "&gt;");
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
        return str;
    }

    //function for checking of validity
    //@param {String} 
    //return {Boolean}
 
    var isTextValide = function(str) {
        //Checking for alowed tags
        var regResolvedTeg=/<code>(?=.*<\/code>)|<i>(?=.*<\/i>)|<strong>(?=.*<\/strong>)|<a\s*href=\"[a-zA-Z\/0-9]*\"\stitle=\"[^'"]*\">(?=.*<\/a>)/g ;
        // Checking for validity of child tags
        regValidChildTeg = /^<([asci]).*>.*<([asci]).*>(?=.*<\/\2.*>).*<\/\1.*>$/;
        // Checking for child not closed tag
        regChildNotCloseTeg = /^<([asci]).*>.*<\/?([a-z0-9]*)>(?!.*<\/\2>).*<\/\1.*>$/;
        // Checking for tags in str
        regIsTegInString = /^.*<\/?[asci].*>.*$/g;

        if (str.match(regIsTegInString) == null){
          return true;
        }

        tegsArr = str.match(regResolvedTeg);
        if (tegsArr == null){
            return false;
        }

        //RegExp Array for finding alowed tags
        var arr = [];
        //RegExp Array for checking tags validity
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
        // Array with alowed tags content
        var strArr = [];
        for (var i=0; i<arr.length; i++){
            strArr[i] = str.match(arr[i]);
        }

        //Check for child tags
        var strValidateArr = [];
        for (var i=0; i<strArr.length; i++){
            if(regValidChildTeg.test(strArr[i])){
                // if is child tag
                continue;
            } else {
                //  if isn't child tag
                strValidateArr.push(strArr[i])
            }
        }
        //if isn't tags return true
        if(!strValidateArr[0]){
            return true;
        }
        // Check for validity
        for (var i=0; i<strValidateArr.length; i++){
            if(regChildNotCloseTeg.test(strValidateArr[i])){
                return false;
            }
        }
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