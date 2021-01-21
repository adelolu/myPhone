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
    $('#network2').hide();
    $('#network3').hide();


})

$('.home2').on('click', function () {
    $('#realcon').hide()
    $('#num_dial').hide()
    $('#main').show();
    $('#network').hide();
    $('#ans_call').hide();
    $('#network3').hide();
    $('#network2').hide();
})

$('#_pad').click(function () {
    // console.log('kiii');
    $('#realcon').hide()
    $('#main').hide()
    $('#num_dial').show();
    $('#ans_call').hide();
    $('#network2').hide();
    $('#network3').hide();
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

    if (d == '') {
        $('#del_icon').css({
            'color': 'rgba(148, 143, 143,0.3)',
        })

    }

})
$('#green_call').click(function green() {
    var a = document.getElementById('maindiv').innerText
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').show();
    // $('#net_modal').show();
    $('#network2').hide();
    $('#network3').hide();
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
    $('#network2').hide();
    $('#network3').hide();


}, true)
// document.getElementById('net_modal').addEventListener('click', function () {
//     $('#realcon').show()
//     $('#main').hide()
//     $('#num_dial').hide();
//     $('#ans_call').hide();
//     $('#network').show();
//     $('#network2').hide();
//     $('#network3').hide();

// }, false)
document.getElementById('network3').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)
// document.getElementById('net_modal3').addEventListener('click', function () {
//     $('#realcon').show()
//     $('#main').hide()
//     $('#num_dial').hide();
//     $('#ans_call').hide();
//     $('#network').show();
//     $('#network2').hide();
//     $('#network3').hide();

// }, false)

document.getElementById('network2').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)
// document.getElementById('net_modal2').addEventListener('click', function () {
//     $('#realcon').show()
//     $('#main').hide()
//     $('#num_dial').hide();
//     $('#ans_call').hide();
//     $('#network').hide();
//     $('#network2').show();
//     $('#network3').hide();

// })

// var info = []
// var low = ['temi', 'tobi', 'tolu', 'emma', 'victoria', 'tomi', 'mum', 'victor', 'pelumi', 'kenn', 'tutu', 'ola', 'dipo']
// function loop(low) {
//     svg = ''
//     for (let i = 0; i < low.length;) {
//         svg += `<div id='name${i}'> ${low[1]}`
//         // console.log(svg);
//         i++
//     }
//     var lak = document.getElementsByClassName('.name').innerHTML = svg;
// }

$('#sim_airtel').click(function () {
    // console.log('lala');
    // var e = $('#maindiv').text()
    var e = document.getElementById('maindiv').innerHTML
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
            // console.log('yhyh');
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#network2').hide();
            $('#network').hide();
            $('#num_dial').hide();
            $('#network3').show();
            $('#net_modal3').show();
            $('#net_modal').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '12px',
                'height': '60px',
                'z-index': '3',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');

            setTimeout(() => {
                $('#realcon').show()
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network3').show();
                $('#net_modal3').html(' ')
                $('#network3').css({
                    'padding': '180px 45px',

                })
                $('#net_modal3').css({
                    'padding': '10px',
                    'height': '120px',
                    'width': '250px',
                    'backgroundColor': 'rgb(34,34,34)',
                })
                $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                $('#reg').text(`Dear customer, your recharge is successful. Your new account balance is N${amt}. Dial *121# for your balance`)
                // console.log('card');
                $('.d_click').on('click', function (params) {
                    console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#network').hide();
                    $('#num_dial').hide();
                    $('#network3').hide();
                })
            }, 3000);
        } else {
            console.log('yaya');
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show();
            $('#network2').hide();
            // $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '12px',
                'height': '60px',
                // 'height': '60px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" ></div></div> ');
            $("#ussd").html('USSD code running...')
            setTimeout(() => {
                $('#realcon').show()
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                // $('#network3').show();
                $('#net_modal3').html(' ')
                $('#net_modal3').css({
                    'padding': '12px',
                    'height': '80px',
                    'backgroundColor': 'rgb(34,34,34)',
                })
                $('#net_modal3').append('<div id="ussd" >Invalid activation code... </div> <button id="d_click" class="btn d_click text-primary">ok</button>');
                $('#d_click').css({
                    'margin-left': '130px',
                    'margin-top': '-15px',

                })
                $('.d_click').on('click', function (params) {
                    // console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#network').hide();
                    $('#num_dial').hide();
                    $('#network2').hide();
                    $('#network3').hide();
                })

            }, 3500);

        }
    } else {
        if (e == '') {
            setTimeout(() => {
                var a = Math.floor(Math.random() * 1000000000 + 1)
                var b = '080' + a

                // var basic = {
                //     // name:  love,
                //     sim: 'airtel',
                //     number: b,
                // }

                // corname[i])); 
                // var cont = info.push(basic)
                // console.log(info.name);
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#network3').hide();
                // $('#net-modal').hide();
                $('#disp_num').html(b)
            }, 500);
        } else {
            setTimeout(() => {
                //    console.log(e);
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#network3').hide();
                // $('#net-modal').hide();
                $('#disp_num').text(e)
                console.log('hhh');
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
        $('#network2').hide();
        $('#network3').hide();
        $('#simglo').html(' ')
        $('#sim_airtel').html(' ')
        $('#c_sim').html(' ')
        $('#simglo').append('<div class="sim" >glo ng</div>');
        $('#sim_airtel').append('<div class="sim">Airtel</div>');
        $('#c_sim').append('Choose SIM for this call');
    }, 500);
})
var song = document.getElementById('coco')
function print(txt) {
    document.getElementById("disp_sec").innerHTML = txt;
}
document.getElementById('net_modal').addEventListener('click', function () {
    // $('#net_modal').click(function () {
    $("#disp_sec").html(' ')
    setTimeout(() => {
        var aa = document.getElementById('ans_call').style.display
        if (aa == 'block') {
            console.log('ye');
            setTimeout(() => {
                song.play()
                setTimeout(() => {
                    song.pause()
                    song.src = ' '
                    setTimeout(() => {
                        song.src = 'audio/omo.mp3'
                        song.play()
                        startTime = Date.now();
                        timerInterval = setInterval(function printTime() {
                            elapsedTime = Date.now() - startTime;
                            print(timeToString(elapsedTime));
                            function timeToString(time) {
                                let diffInHrs = time / 3600000;
                                let hh = Math.floor(diffInHrs);

                                let diffInMin = (diffInHrs - hh) * 60;
                                let mm = Math.floor(diffInMin);

                                let diffInSec = (diffInMin - mm) * 60;
                                let ss = Math.floor(diffInSec);

                                let diffInMs = (diffInSec - ss) * 100;
                                let ms = Math.floor(diffInMs);

                                let formattedMM = mm.toString().padStart(2, "0");
                                let formattedSS = ss.toString().padStart(2, "0");
                                // let formattedMS = ms.toString().padStart(2, "0");
                                return `${formattedMM}:${formattedSS} `;
                            }
                        }, 1000)
                    }, 10);


                }, 10000);
            }, 500);

        } else {
            console.log('nah');
        }
    }, 1000);
})
function name(params) {
    var amt = 200;
}
$('#end_call').click(function () {
    var a = $('#disp_sec').text()


    if (a != '') {
        console.log('red');
        song.pause()
        song.src = ' '
        clearInterval(timerInterval);
        elapsedTime = 0;
        console.log(a);
        e = a.slice(a.length - 3, a.length - 1)
        var c = e * 1.5
        var b = amt - c
        // console.log(c);
        // console.log(e);
        // console.log(amt);
        setTimeout(() => {
            $('#realcon').show()
            $('#main').hide()
            $('#ans_call').hide();
            $('#num_dial').hide();
            $('#network').hide();
            $('#network2').show();
            $('#network3').hide();
            $('#net_modal2').html(' ')
            // $('#net_modal').hide()
            $('#network2').css({
                'padding': '180px 45px',

            })
            $('#net_modal2').css({
                'padding': '10px',
                'height': '120px',
                'width': '250px',
                'z-index': '3',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal2').append('<div id="after_call" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
            $('#after_call').text(`Dear customer, your last call lasted for ${a}. Your new account balance is N${b}. Dial *121# for your balance`)
        }, 100);
    } else {
        console.log('ll');
    }
})