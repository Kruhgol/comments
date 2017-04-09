
//filter for output date in comment

module.exports = function(){
        return function(param){
            var months = {
                '01':'января',
                '02':'февраля',
                '03':'марта',
                '04':'апреля',
                '05':'мая',
                '06':'июня',
                '07':'июля',
                '08':'августа',
                '09':'сентября',
                '10':'октября',
                '11':'ноября',
                '12':'декабря'
            }
            var getMonth = function(d){
                return months[d.slice(6,8)]
            }

            var regTime = /\d{2}:\d{2}/;
            var date = param.slice(9, 11) + ' ' + getMonth(param)+ ' ' + param.slice(1, 5);
            var time = param.match(regTime)
            var value = date + ' в ' + time;
            return value;
        }
    }