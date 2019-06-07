$(document).ready(function() {

    //show date time
    function dayTimeFormat() {
        var date = new Date;
        var month = date.getMonth()+1;
        var day = date.getDate();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + '' + ampm;
        var vlTime = month + '-' + day + '-' + year;
        $('.time time').attr('datetime',vlTime);
        $('.time time').text(strTime);
        return strTime;
    }
    dayTimeFormat();
    $(function () {
        setInterval(dayTimeFormat, 1000);
    });

    //day and night modes
    $('.fa-moon').click(function() {
        $(this).addClass('active');
        $('.fa-sun').removeClass('active');
        $('body').addClass('night');
        $('body').removeClass('day');
    });
    $('.fa-sun').click(function() {
        $(this).addClass('active');
        $('.fa-moon').removeClass('active');
        $('body').addClass('day');
        $('body').removeClass('night');
    });

});