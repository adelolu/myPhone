var network = document.getElementById('network0')
var amount = document.getElementById('amt')
arr = []
ay = []
document.getElementById('gene').addEventListener('click', generate)
function generate() {
    var pin = Math.floor(Math.random() * 10000000000000 + 1)

    card = {
        name: network.value,
        amount: amount.value,
        pin: pin,
    }
    arr.push(card)
    localStorage.setItem('store', JSON.stringify(arr))
    var get_arr = JSON.parse(localStorage.getItem('store'))
    loop(get_arr)

}
var get_arr = JSON.parse(localStorage.getItem('store'))

function remove(key) {
    let ac = $("#maindiv").text()
    ae = ac.slice(0, 5)
    let ab = document.getElementById('num_dial').style.display
    if (ae == '*126*' || ae == '*123*' && ab == 'block') {
        localStorage.setItem('store', JSON.stringify(arr))
        var get_arr = JSON.parse(localStorage.getItem('store'))
        if (ae == '*126*') {
            document.getElementById('maindiv').innerText = `*126*${get_arr[`${key}`].pin}`
        } else {
            document.getElementById('maindiv').innerText = `*123*${get_arr[`${key}`].pin}`
        }
    } else {
    }

    var move = arr.splice(key, 1)
    ay.push(move)
    localStorage.setItem('card', JSON.stringify(ay))
    var get_car = JSON.parse(localStorage.getItem('card'))
    localStorage.setItem('used', JSON.stringify(move))
    var get_use = JSON.parse(localStorage.getItem('used'))
    localStorage.setItem('store', JSON.stringify(arr))
    var get_arr = JSON.parse(localStorage.getItem('store'))
    document.getElementById(`ptr${key}`).style.display = 'none'
    loop(get_arr)
}

function loop(get_arr) {
    svg = ''
    for (let i = 0; i < get_arr.length; i++) {
        svg += `<div id='ptr${i}'> ${get_arr[i].name}  ${get_arr[i].amount}  ${get_arr[i].pin} <button id='del' onclick='remove(${i})'> Load card</button> </div> <div id ='sim_airtel' onclick='lala(${i})'></div>`
    }
    document.getElementById('res').innerHTML = svg;
}


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
var get_use = JSON.parse(localStorage.getItem('used'))
function call() {
    var a = document.getElementById('main').innerHTML = ' '
    document.getElementById('main').style.backgroundColor = 'white'
}
$('.contact').on('click', function () {
    $('#main').hide(500);
    $('#realcon').show(500)
    $('#network').hide();
    $('#ans_call').hide();
    $('#network2').hide();
    $('#network3').hide();
})

$('.home2').on('click', function () {
    $('#realcon').hide(2000)
    $('#num_dial').hide('fade')
    $('#main').show('slide');
    $('#network').hide(2000);
    $('#ans_call').hide(2000);
    $('#network3').hide(2000);
    $('#network2').hide(2000);
})
var aab = ' '
$('#_pad').click(function yaya() {
    $('#realcon').hide(500)
    $('#main').hide()
    $('#num_dial').show(500);
    $('#ans_call').hide();
    $('#network2').hide();
    $('#network3').hide();
    $('#network').hide();
    setTimeout(() => {
        var aaa = document.getElementById('maindiv').innerHTML
        aab = aaa
    }, 3000);

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
    $('#realcon').show(500)
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').show('slide');
    $('#net_modal').show(1000);
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
    $('#realcon').show(1000)
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)

document.getElementById('network3').addEventListener('click', function () {
    $('#realcon').show(500)
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)

document.getElementById('network2').addEventListener('click', function () {
    $('#realcon').show(1000)
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)
$('.str_call').on('click', function () {

    setTimeout(() => {
        cla = document.getElementsByClassName('str_call')
        for (let s = 0; s < cla.length; s++) {
            cla[s].addEventListener('click', real)

        }
        $('#realcon').show(500)
        $('#main').hide()
        $('#num_dial').hide();
        $('#ans_call').hide();
        $('#network').show(500);
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
var b = '';
function real(l) {
    b = l.target.parentElement.children[0].children[1].children[0].innerText;
}

$('#sim_airtel').click(function () {
    var e = document.getElementById('maindiv').innerHTML
    var f = e.substr(1, 3)
    var g = e.charAt(0)
    var j = e.charAt(e.length - 1)
    get_car = JSON.parse(localStorage.getItem('card'))
    if (f == '121' && g == '*' && j == '#') {

        $('#realcon').show(500)
        $('#ans_call').hide();
        $('#main').hide()
        $('#num_dial').hide();
        $('#network').hide();
        $('#network3').show('fade');
        $('#network2').hide();
        $('#net_modal3').html(' ')
        $('#net_modal3').css({
            'padding': '12px',
            'height': '60px',
            'z-index': '3',
            'backgroundColor': 'rgb(34,34,34)',
        })
        $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');
        setTimeout(() => {
            $('#realcon').show(500)
            $('#main').hide()
            $('#ans_call').hide();
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show(500);
            $('#net_modal3').html(' ')
            $('#network3').css({
                'padding': '180px 45px',

            })
            $('#net_modal3').css({
                'padding': '10px',
                'height': '100px',
                'width': '250px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            var get_amt = JSON.parse(localStorage.getItem('money'))
            $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
            $('#reg').text(`Dear customer, your account balance is N${get_amt}.`)
            $('.d_click').on('click', function (params) {
                $('#realcon').show(500)
                $('#main').hide()
                $('#ans_call').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#num_dial').hide();
                $('#network3').hide();
            })



        }, 3000);
    } else if (f == '126' && g == '*' && j == '#') {
        var get_use = JSON.parse(localStorage.getItem('used'))
        var h = e.substr(5, 13)
        i = parseInt(h)
        var i = h.length;
        te = get_use[0].name
        td = get_use[0].pin
        if (i == 13 && j == '#' && te == 'airtel' && h == td) {
            for (let i = 0; i < get_car.length; i++) {
                var ii = get_car[i][0].pin;
                if (ii == td && e == ii) {
                    $('#realcon').show(500)
                    $('#ans_call').hide();
                    $('#main').hide()
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network3').show(500);
                    $('#network2').hide();
                    $('#net_modal3').html(' ')
                    $('#net_modal3').css({
                        'padding': '10px',
                        'height': '60px',
                        'backgroundColor': 'rgb(34,34,34)',
                    })
                    $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" ></div></div> ');
                    $("#ussd").html('USSD code running...')
                    setTimeout(() => {
                        $('#realcon').show(500)
                        $('#main').hide()
                        $('#ans_call').hide();
                        $('#num_dial').hide();
                        $('#network').hide();
                        $('#network2').hide();
                        $('#net_modal3').html(' ')
                        $('#net_modal3').css({
                            'padding': '12px',
                            'height': '80px',
                            'backgroundColor': 'rgb(34,34,34)',
                        })
                        $('#net_modal3').append('<div id="ussd" >This card has being used by you</div> <button id="d_click" class="btn d_click text-primary">ok</button>');
                        $('#d_click').css({
                            'margin-left': '130px',
                            'margin-top': '-15px',

                        })
                        $('.d_click').on('click', function (params) {
                            $('#realcon').show(500)
                            $('#main').hide()
                            $('#ans_call').hide();
                            $('#network').hide();
                            $('#num_dial').hide();
                            $('#network2').hide();
                            $('#network3').hide();
                        })

                    }, 3500);
                    break;
                }
            }

            $('#realcon').show(400)
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show(100);
            $('#network2').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '12px',
                'height': '60px',
                'z-index': '3',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');

            setTimeout(() => {
                $('#realcon').show(500)
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network3').show(1000);
                $('#net_modal3').html(' ')
                $('#network3').css({
                    'padding': '175px 45px',

                })
                $('#net_modal3').css({
                    'padding': '10px',
                    'height': '135px',
                    'width': '250px',
                    'backgroundColor': 'rgb(34,34,34)',
                })
                tt = get_use[0].amount
                tu = parseInt(tt)
                var get_amt = JSON.parse(localStorage.getItem('money'))
                amt = tu + get_amt
                localStorage.setItem('money', JSON.stringify(amt))
                var get_amt = JSON.parse(localStorage.getItem('money'))
                $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                $('#reg').text(`Dear customer, your recharge of ${tt} is successful. Your new account balance is N${get_amt}. Dial *121# for your balance`)
                $('.d_click').on('click', function () {
                    $('#realcon').show(500)
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#num_dial').hide();
                    $('#network3').hide();
                })
            }, 3000);
        } else {
            $('#realcon').show(500)
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show(500);
            $('#network2').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '10px',
                'height': '60px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" ></div></div> ');
            $("#ussd").html('USSD code running...')
            setTimeout(() => {
                $('#realcon').show(500)
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
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
                    $('#realcon').show(500)
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
        $('#place_sim').html('Airtel')
        $('#place_sim').css({
            'color': 'orange'
        })

        if (e.length == 0) {

            if (b.length != 0) {
                setTimeout(() => {
                    $('#realcon').hide()
                    $('#main').hide()
                    $('#ans_call').show(3000);
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#network3').hide();
                    $('#disp_num').html(b)
                }, 500);
            } else {
                setTimeout(() => {
                    var a = Math.floor(Math.random() * 1000000000 + 1)
                    var d = '080' + a
                    $('#realcon').hide()
                    $('#main').hide()
                    $('#ans_call').show(3000);
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#network3').hide();
                    $('#disp_num').html(d)
                }, 500);
            }
        } else if (e.length !== 0) {
            setTimeout(() => {
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show('shake');
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#network3').hide();
                $('#disp_num').text(e)
            }, 500);
        }
    }

})
document.getElementById('sim_airtel').addEventListener('click', real)

var song = document.getElementById('coco')
function print(txt) {
    document.getElementById("disp_sec").innerHTML = txt;
}
document.getElementById('net_modal').addEventListener('click', function () {
    var aa = document.getElementById('ans_call').style.display
    $("#disp_sec").html(' ')
    var get_amt = JSON.parse(localStorage.getItem('money'))
    var get_glo = JSON.parse(localStorage.getItem('glo'))
    if (get_amt <= 0 || get_glo <= 0 && aa == 'block') {

        song.src = 'audio/recharge.mp3'
        song.play()
        setTimeout(() => {
            song.pause()
            song.src = 'audio/temi.mp3'
            $('#realcon').show(500)
            $('#num_dial').hide()
            $('#main').hide();
            $('#network').hide();
            $('#ans_call').hide();
            $('#network3').hide();
            $('#network2').hide();

        }, 9000);
    } else {
        sttop = setTimeout(() => {
            var aa = document.getElementById('ans_call').style.display
            if (aa == 'block') {
                setTimeout(() => {
                    song.play()
                    print('calling...')

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
                                    return `${formattedMM}:${formattedSS} `;
                                }
                            }, 1000)
                        }, 10);


                    }, 10000);
                }, 500);

            }
            var kk = document.getElementById('place_sim').innerText
            if (aa == 'block' && kk == 'Airtel') {

                setTimeout(() => {
                    startTime = Date.now();

                    timer = setInterval(function printTime() {
                        elapsedTime = Date.now() - startTime;
                        let diffInHrs = elapsedTime / 3600000;
                        let hh = Math.floor(diffInHrs);

                        let diffInMin = (diffInHrs - hh) * 60;
                        let mm = Math.floor(diffInMin);

                        let diffInSec = (diffInMin - mm) * 60;
                        let ss = Math.floor(diffInSec);

                        let diffInMs = (diffInSec - ss) * 100;
                        let ms = Math.floor(diffInMs);
                        var get_amt = JSON.parse(localStorage.getItem('money'))
                        z = mm * 60 + ss
                        y = z * 0.5
                        amt = get_amt - y
                        localStorage.setItem('money', JSON.stringify(amt))
                        var get_amt = JSON.parse(localStorage.getItem('money'))

                        if (get_amt <= 0) {
                            song.pause()
                            song.src = ' '
                            setTimeout(() => {
                                amt = 0
                                localStorage.setItem('money', JSON.stringify(amt))
                                song.src = 'audio/recharge.mp3'
                                song.play()
                                clearInterval(timer)
                                clearInterval(timerInterval)
                                setTimeout(() => {
                                    clearTimeout(sttop)
                                    song.pause()
                                    song.src = 'audio/temi.mp3'
                                    $('#realcon').show(500)
                                    $('#num_dial').hide()
                                    $('#main').hide();
                                    $('#network').hide();
                                    $('#ans_call').hide();
                                    $('#network3').hide();
                                    $('#network2').hide();
                                }, 9000);
                            }, 100);
                        }
                    }, 1000)
                }, 10000);
            } else if (aa == 'block' && kk == 'glo ng') {

                setTimeout(() => {
                    startTime = Date.now();

                    timer = setInterval(function printTime() {
                        elapsedTime = Date.now() - startTime;
                        let diffInHrs = elapsedTime / 3600000;
                        let hh = Math.floor(diffInHrs);

                        let diffInMin = (diffInHrs - hh) * 60;
                        let mm = Math.floor(diffInMin);

                        let diffInSec = (diffInMin - mm) * 60;
                        let ss = Math.floor(diffInSec);

                        let diffInMs = (diffInSec - ss) * 100;
                        let ms = Math.floor(diffInMs);
                        var get_glo = JSON.parse(localStorage.getItem('glo'))
                        z = mm * 60 + ss
                        y = z * 0.5
                        glo = get_glo - y
                        localStorage.setItem('glo', JSON.stringify(glo))
                        var get_glo = JSON.parse(localStorage.getItem('glo'))

                        if (get_glo <= 0) {
                            song.pause()
                            song.src = ' '
                            setTimeout(() => {
                                glo = 0
                                localStorage.setItem('glo', JSON.stringify(glo))
                                song.src = 'audio/recharge.mp3'
                                song.play()
                                clearInterval(timer)
                                clearInterval(timerInterval)
                                setTimeout(() => {
                                    clearTimeout(sttop)
                                    song.pause()
                                    song.src = 'audio/temi.mp3'
                                    $('#realcon').show(500)
                                    $('#num_dial').hide()
                                    $('#main').hide();
                                    $('#network').hide();
                                    $('#ans_call').hide();
                                    $('#network3').hide();
                                    $('#network2').hide();
                                }, 9000);
                            }, 100);
                        }
                    }, 1000)
                }, 10000);
            }
        }, 500);
    }
})
$('#end_call').click(function () {
    setTimeout(() => {
        var zz = document.getElementById('place_sim').innerText
        if (zz == 'Airtel') {
            var a = $('#disp_sec').text()

            if (a != '' && a !== 'calling...') {
                song.pause()
                song.src = 'audio/temi.mp3'
                clearInterval(timerInterval);
                clearInterval(timer)
                elapsedTime = 0;
                e = a.slice(a.length - 3, a.length - 1)
                m = a.slice(1, 2)
                n = parseInt(m)
                o = parseInt(e)
                p = n * 60 + o
                var get_amt = JSON.parse(localStorage.getItem('money'))
                var c = p * 0.5
                amt = get_amt - c

                setTimeout(() => {

                    localStorage.setItem('money', JSON.stringify(amt))
                    var get_amt = JSON.parse(localStorage.getItem('money'))

                    $('#realcon').show(500)
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').show(500);
                    $('#network3').hide();
                    $('#net_modal2').html(' ')
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
                    $('#after_call').text(`Dear customer, your last call lasted for ${a}. Your new account balance is N${get_amt}. Dial *121# for your balance`)



                }, 100);
            } else {
            }
        } else if (zz == 'glo ng') {
            var a = $('#disp_sec').text()
            var get_glo = JSON.parse(localStorage.getItem('glo'))
            if (a != '' && a !== 'calling...') {
                song.pause()
                song.src = 'audio/temi.mp3'
                clearInterval(timerInterval);
                clearInterval(timer)
                elapsedTime = 0;
                e = a.slice(a.length - 3, a.length - 1)
                m = a.slice(1, 2)
                n = parseInt(m)
                o = parseInt(e)
                p = n * 60 + o
                var c = p * 0.5
                glo = get_glo - c

                setTimeout(() => {

                    localStorage.setItem('glo', JSON.stringify(glo))
                    var get_glo = JSON.parse(localStorage.getItem('glo'))

                    $('#realcon').show(500)
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').show(500);
                    $('#network3').hide();
                    $('#net_modal2').html(' ')
                    $('#network2').css({
                        'padding': '170px 45px',

                    })
                    $('#net_modal2').css({
                        'padding': '10px',
                        'height': '120px',
                        'width': '250px',
                        'z-index': '3',
                        'backgroundColor': 'rgb(34,34,34)',
                    })

                    $('#net_modal2').append('<div id="after_call" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                    $('#after_call').text(`Dear customer, your last call lasted for ${a}. Your new account balance is N${get_glo}. Dial #124*1# for your balance`)

                }, 100);
            }
        }
    }, 100);
})
$('#simglo').click(function () {
    var e = document.getElementById('maindiv').innerHTML

    var f = e.substr(1, 3)
    var g = e.charAt(0)
    var j = e.charAt(e.length - 1)

    if (e == '#124*1#') {

        $('#realcon').show(500)
        $('#ans_call').hide();
        $('#main').hide()
        $('#num_dial').hide();
        $('#network').hide();
        $('#network3').show(500);
        $('#network2').hide();
        $('#net_modal3').html(' ')
        $('#net_modal3').css({
            'padding': '12px',
            'height': '60px',
            'z-index': '3',
            'backgroundColor': 'rgb(34,34,34)',
        })
        $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');
        setTimeout(() => {
            $('#realcon').show(500)
            $('#main').hide()
            $('#ans_call').hide();
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show(500);
            $('#net_modal3').html(' ')
            $('#network3').css({
                'padding': '180px 45px',

            })
            $('#net_modal3').css({
                'padding': '10px',
                'height': '100px',
                'width': '250px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            var get_glo = JSON.parse(localStorage.getItem('glo'))
            $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
            $('#reg').text(`Dear customer, your account balance is N${get_glo}.`)
            $('.d_click').on('click', function (params) {
                $('#realcon').show(500)
                $('#main').hide()
                $('#ans_call').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#num_dial').hide();
                $('#network3').hide();
            })



        }, 3000);
    } else if (f == '123' && g == '*' && j == '#') {
        var get_use = JSON.parse(localStorage.getItem('used'))
        get_car = JSON.parse(localStorage.getItem('card'))
        var h = e.substr(5, 13)
        var i = h.length;
        te = get_use[0].name
        td = get_use[0].pin
        if (i == 13 && j == '#' && te == 'glo' && h == td) {
            for (let i = 0; i < get_car.length; i++) {
                var ii = get_car[i][0].pin;
                if (ii == td && aab == ' ') {
                    $('#realcon').show(500)
                    $('#ans_call').hide();
                    $('#main').hide()
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network3').show(500);
                    $('#network2').hide();
                    $('#net_modal3').html(' ')
                    $('#net_modal3').css({
                        'padding': '10px',
                        'height': '60px',
                        'backgroundColor': 'rgb(34,34,34)',
                    })
                    $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" ></div></div> ');
                    $("#ussd").html('USSD code running...')
                    setTimeout(() => {
                        $('#realcon').show(500)
                        $('#main').hide()
                        $('#ans_call').hide();
                        $('#num_dial').hide();
                        $('#network').hide();
                        $('#network2').hide();
                        $('#net_modal3').html(' ')
                        $('#net_modal3').css({
                            'padding': '12px',
                            'height': '80px',
                            'backgroundColor': 'rgb(34,34,34)',
                        })
                        $('#net_modal3').append('<div id="ussd" >This card has being used by you</div> <button id="d_click" class="btn d_click text-primary">ok</button>');
                        $('#d_click').css({
                            'margin-left': '130px',
                            'margin-top': '-15px',

                        })
                        $('.d_click').on('click', function (params) {
                            $('#realcon').show(500)
                            $('#main').hide()
                            $('#ans_call').hide();
                            $('#network').hide();
                            $('#num_dial').hide();
                            $('#network2').hide();
                            $('#network3').hide();
                        })

                    }, 3500);
                    break;
                } else {
                    $('#realcon').show(500)
                    $('#ans_call').hide();
                    $('#main').hide()
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network3').show(500);
                    $('#network2').hide();
                    $('#net_modal3').html(' ')
                    $('#net_modal3').css({
                        'padding': '12px',
                        'height': '60px',
                        'z-index': '3',
                        'backgroundColor': 'rgb(34,34,34)',
                    })
                    $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');

                    setTimeout(() => {
                        $('#realcon').show(1000)
                        $('#main').hide()
                        $('#ans_call').hide();
                        $('#num_dial').hide();
                        $('#network').hide();
                        $('#network3').show(500);
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

                        tt = get_use[0].amount
                        tou = parseInt(tt)

                        var get_glo = JSON.parse(localStorage.getItem('glo'))
                        glo = get_glo + tou
                        localStorage.setItem('glo', JSON.stringify(glo))
                        var get_glo = JSON.parse(localStorage.getItem('glo'))
                        $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                        $('#reg').text(`Dear customer, your recharge of ${tt} successful. Your new account balance is N${get_glo}. Dial #124*1# for your balance`)
                        $('.d_click').on('click', function (params) {
                            $('#realcon').show(500)
                            $('#main').hide()
                            $('#ans_call').hide();
                            $('#network').hide();
                            $('#network2').hide();
                            $('#num_dial').hide();
                            $('#network3').hide();
                        })
                    }, 3000);
                }
            }

        } else {
            $('#realcon').show(500)
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show(500);
            $('#network2').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '10px',
                'height': '60px',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" ></div></div> ');
            $("#ussd").html('USSD code running...')
            setTimeout(() => {
                $('#realcon').show(500)
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
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
                    $('#realcon').show(500)
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
        $('#place_sim').html('glo ng')
        $('#place_sim').css({
            'color': 'aqua'
        })

        if (e.length == 0) {

            if (b.length != 0) {
                setTimeout(() => {

                    $('#realcon').hide()
                    $('#main').hide()
                    $('#ans_call').show(500); 
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#network3').hide();
                    $('#disp_num').html(b)
                }, 500);
            } else {
                setTimeout(() => {
                    var a = Math.floor(Math.random() * 1000000000 + 1)
                    var f = '070' + a
                    $('#realcon').hide()
                    $('#main').hide()
                    $('#ans_call').show(500);
                    $('#num_dial').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#network3').hide();
                    $('#disp_num').html(f)
                }, 500);
            }
        } else if (e.length !== 0) {
            setTimeout(() => {
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#network3').hide();
                $('#disp_num').text(e)
            }, 500);
        }
    }


})
document.getElementById('simglo').addEventListener('click', real)
document.getElementById('on').addEventListener('click', disp)

function disp(params) {
    var a = document.getElementById('black').style.display
    if (a == 'none') {
        $('#black').show()
        // $('#main').hide()
       

    } else {
        $('#black').hide()
        $('#realcon').hide()
        $('#main').show()
        $('#ans_call').hide();
        $('#num_dial').hide();
        $('#network').hide();
        $('#network2').hide();
        $('#network3').hide();
        clearInterval(timer)
        clearInterval(timerInterval)
    }
    ;

}

function dragStart(event) {
    console.log(event);
    event.target.clientX
    event.target.clientY
    event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) {
    console.log(event);
    event.target.clientX
    event.target.clientY

    // document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    console.log(event);
    event.target.clientX
    event.target.clientY
    console.log(event.currentTarget = event.target.clientY);

    event.target.appendChild( event.target.clientX);
}