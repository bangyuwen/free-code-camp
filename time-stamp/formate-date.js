module.exports = function getFormattedDate(input) {
  
    input = parseInt(input) || input
    var date = new Date(input);

    var year = date.getFullYear()
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var monthName = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ]
    
    month = monthName[month];
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    var str = `${month} ${day}, ${date.getFullYear()}`;
    var unixDate = Date.parse(input)

    console.log(input, year, month)
    
    return {
      'unix': unixDate,
      'natural': str
    }
}
