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
function call() {
    var a = document.getElementById('main').innerHTML = ' '
    document.getElementById('main').style.backgroundColor = 'white'
}
$('.contact').on('click', function () {
    $('#main').hide();
    $('#realcon').show()
    $('#network').hide();
    $('#ans_call').hide();

})

$('.home2').on('click', function () {
    $('#realcon').hide()
    $('#num_dial').hide()
    $('#main').show();
    $('#network').hide();
    $('#ans_call').hide();

})

$('#_pad').click(function () {
    // console.log('kiii');
    $('#realcon').hide()
    $('#main').hide()
    $('#num_dial').show();
    $('#ans_call').hide();
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
$('#green_call').click(function green() {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').show();
    $('#simglo').html(' ')
    $('#sim_airtel').html(' ')
    $('#c_sim').html(' ')
    $('#simglo').append('<div class="sim" >glo ng</div>');
    $('#sim_airtel').append('<div class="sim">Airtel</div>');
    $('#c_sim').append('Choose SIM for this call');

})
document.getElementById('network').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();

}, true)
document.getElementById('net_modal').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').show();
}, false)

var info = []
var low = ['temi', 'tobi', 'tolu', 'emma', 'victoria', 'tomi', 'mum', 'victor', 'pelumi', 'kenn', 'tutu', 'ola', 'dipo']
function loop(low) {
    svg = ''
    for (let i = 0; i < low.length; ) {
        svg += `<div id='name${i}'> ${low[1]}`
        // console.log(svg);
       i++
    }
    var lak = document.getElementsByClassName('.name').innerHTML = svg;
}

$('.str_call').on('click', function (grt) {
    // document.getElementsByClassName('name').appendChild(grt);
    // $('.name').append(`#name${grt}`)
    loop(low)
 $('.name').html(low[0])

    // console.log(`name${grt[0]}`);
    // console.log(grt);
})

// $('.str_call').on('click', function () {

//     var a=  $("div").filter(".name").text()
//     for (let z = 0; z < low.length; z++) {
//         var a=  $("div").filter(".name").text(low[z])
//         console.log();
//     }


//      console.log(a);
// })
$('#sim_airtel').click(function () {

    var e = $('#maindiv').text()
    var f = e.substr(1, 3)
    var g = e.charAt(0)
    var j = e.charAt(e.length - 1)

    // console.log(e);
    if (f == '126' && g == '*' && j == '#') {
        // console.log('hii');
        // console.log(g);
        var h = e.substr(5, 12)
        var i = h.length;
        if (i == 12 && j == '#') {
            console.log('yhyh');
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').show();
            $('#net_modal').html(' ')
            $('#net_modal').css({
                'padding': '12px',
                'height': '60px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');

            setTimeout(() => {
                $('#realcon').show()
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').show();
                $('#net_modal').html(' ')
                $('#network').css({
                    'padding': '180px 45px',

                })
                $('#net_modal').css({
                    'padding': '10px',
                    'height': '120px',
                    'width': '250px',
                    'backgroundColor': 'rgb(34,34,34)',
                })
                $('#net_modal').append('<div class= "recharge">Dear customer, your recharge is successful. Your new account balance is N200. Dial *121# for your balance</div> <button class="btn d_click text-primary">ok</button>');

                // console.log('card');
                $('.d_click').on('click', function (params) {
                    console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#num_dial').hide();
                    $('#network').hide();
                })
            }, 3000);
        } else {
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').show();
            $('#net_modal').html(' ')
            $('#net_modal').css({
                'padding': '12px',
                'height': '60px',
                // 'height': '60px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');
            setTimeout(() => {
                $('#realcon').show()
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').show();
                $('#net_modal').html(' ')
                $('#net_modal').css({
                    'padding': '12px',
                    'height': '80px',
                    'backgroundColor': 'rgb(34,34,34)',
                })
                $('#net_modal').append('<div id="ussd" >Invalid activation code... </div> <button id="d_click" class="btn d_click text-primary">ok</button>');
                $('#d_click').css({
                    'margin-left': '130px',
                    'margin-top': '-15px',

                })
                $('.d_click').on('click', function (params) {
                    // console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#num_dial').hide();
                    $('#network').hide();
                })

            }, 3500);

        }

    } else {
        if (e == '') {

            setTimeout(() => {
                var a = Math.floor(Math.random() * 1000000000 + 1)
                var b = '080' + a
                // loop(info)
                // var rname = ['temi', 'jj', 'tomi', 'tolu', 'pelumi', 'vic', 'mum', 'tutu']
                // function loop(rname[i]) {/
                // var love =  ''
                //     for (let i = 0; i < rname.length; i++) {
                //         console.log([rname[i]]);
                //         love =  `${rname[i]} <br>`
                //     }
                //     console.log(love);
                //     console.log(rname[1]);
                // }
                var basic = {
                    // name:  love,
                    sim: 'airtel',
                    number: b,
                }

                // corname[i])); 
                var cont = info.push(basic)
                // console.log(info.name);
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                // $('#net-modal').hide();
                $('#disp_num').html(low[0])
            }, 500);
        }
        else {
            setTimeout(() => {
                //    console.log(e);
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                // $('#net-modal').hide();
                $('#disp_num').text(e)
            }, 500);
        }
    }
})

$('.str_call').on('click', function () {

    setTimeout(() => {
        $('#realcon').show()
        $('#main').hide()
        $('#num_dial').hide();
        $('#ans_call').hide();
        $('#network').show();
        $('#simglo').html(' ')
        $('#sim_airtel').html(' ')
        $('#c_sim').html(' ')
        $('#simglo').append('<div class="sim" >glo ng</div>');
        $('#sim_airtel').append('<div class="sim">Airtel</div>');
        $('#c_sim').append('Choose SIM for this call');
    }, 500);
    // setTimeout(() => {
    // //    console.log(e);
    // $('#realcon').show()
    // $('#main').hide()
    // $('#ans_call').hide();
    // $('#num_dial').hide();
    // $('#network').show();
    // // $('#net-modal').hide();
    // // $('#disp_num').text(b)
    // }, 500);
})