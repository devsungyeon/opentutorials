var Links = {
    setColor:function (color) {
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // for (i = 0; i < alist.length; i++) {
        //     alist[i].style.color = color;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color) {
        // document.querySelector('body').style.color = color;    
        $('body').css('color', color);
    },
    setBackgroundColor:function (color) {
        // document.querySelector('body').style.backgroundColor = color;    
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');

        var i = 0;
        var inputDNarr = document.querySelectorAll('.dn');
        for(i = 0 ; i < inputDNarr.length ; i++) {
            inputDNarr[i].value = 'day';
        }
        // self.value = 'day'
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');

        var i = 0;
        var inputDNarr = document.querySelectorAll('.dn');
        for(i = 0 ; i < inputDNarr.length ; i++) {
            inputDNarr[i].value = 'night';
        }
        // self.value = 'night'
    }
}