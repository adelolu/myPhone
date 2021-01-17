function date() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date()
    var day = date.getDay();
    var mdate = date.getDate()
    var month = date.getMonth()
    document.getElementById('date').innerHTML = `${days[day]} ${mdate} ${months[month]}`
}
date()
function call(params) {
    var a = document.getElementById('main').innerHTML = ' '
    document.getElementById('main').style.backgroundColor = 'white'
}
$('.contact').on('click', function () {
    $('#main').hide();
    $('#realcon').show()
    $('#network').hide();

})

$('.home2').on('click', function () {
    $('#realcon').hide()
    $('#num_dial').hide()
    $('#main').show();
    $('#network').hide();

})

$('#_pad').click(function () {
    // console.log('kiii');
    $('#realcon').hide()
    $('#main').hide()
    $('#num_dial').show();
    $('#network').hide();

})
$('.pick_num').on('click', function () {
    var a = $(this).text()
    document.getElementById('maindiv').innerText += a;
    $('#del_icon').css({
        'color': 'gray',
    })
})
$('.pick_num').on('mousedown', function () {
    var a = $(this).css({
        'box-shadow': '5px 5px 50px rgb(148, 143, 143)',
        'background-color': 'rgba(148, 143, 143,0.3)',
    })
})
$('.pick_num').on('mouseup', function () {
    var a = $(this).css({
        'box-shadow': 'none',
        'background-color': 'transparent',
    })
})
$('#del_icon').click(function () {
    var a = $('#maindiv').text()
    c = a.slice(0, a.length - 1)
    $('#maindiv').text(c)
    var d = $('#maindiv').text();
    if (d != '') {
        $('#del_icon').css({
            'color': 'gray',
        })
    }
    if (d == '') {
        // console.log('hii');
        $('#del_icon').css({
            'color': 'rgba(148, 143, 143,0.3)',
        })

    }
})
$(function (params) {
    var d = $('#maindiv').text();
    // console.log('hii');

    if (d == '') {
        //  console.log('hii');
        $('#del_icon').css({
            'color': 'rgba(148, 143, 143,0.3)',
        })

    }

})
$('#green_call').click(function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#network').show();
    $('#simglo').html(' ')
    $('#sim_airtel').html(' ')
    $('#c_sim').html(' ')
    $('#simglo').append('<div class="sim" >glo ng</div>');
    $('#sim_airtel').append('<div class="sim">Airtel</div>');
    $('#c_sim').append('Choose SIM for this call');

})
// $('#network').click(function () {
//     $('#realcon').show()
//     $('#main').hide()
//     $('#num_dial').hide();
//     $('#network').hide();
// })
$('#sim_airtel').click(function () {

    var e = $('#maindiv').text()
    var f = e.substr(1, 3)
    var g = e.charAt(0)

    console.log('jii');
    if (f == '126' && g == '*') {
        // console.log('hii');
        // console.log(g);
        var h = e.substr(5, 12)
        var i = h.length;
        var j = e.charAt(e.length - 1)
        if (i == 12 && j == '#') {
            console.log('yhyh');
            $('#realcon').show()
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').show();
            $('#net_modal').html(' ')
            $('#net_modal').css({
                'padding': '12px',
                'height': '50px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');



        }

    }else{
        console.log('invalid');
    }
})