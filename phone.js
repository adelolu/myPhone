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
var get_amt = JSON.parse(localStorage.getItem('money'))
amt = get_amt
console.log(get_amt);
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
    $('#net_modal').show();
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

document.getElementById('network3').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)

document.getElementById('network2').addEventListener('click', function () {
    $('#realcon').show()
    $('#main').hide()
    $('#num_dial').hide();
    $('#ans_call').hide();
    $('#network').hide();
    $('#network2').hide();
    $('#network3').hide();


}, true)

function calll() {
    var r = document.getElementById('ppl').innerText
    // var r = $("#ppl").text()
    $("#disp_num").text(r)
    // var r = $(".name").text()

    // var s = $(this)
    // console.log(s);
    // $("#disp_num").text(s)
    // var w = $(".con_list").children('div.con_info').text()
    // var v = w.innerText
    // console.log(v);
    // console.log(w);
}

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
            // $('#realcon').show()
            // $('#ans_call').hide();
            // $('#main').hide()
            // $('#network2').hide();
            // $('#network').hide();
            // $('#num_dial').hide();
            // $('#network3').show();
            // // $('#net_modal3').show();
            // // $('#net_modal').hide();
            // $('#net_modal3').html(' ')

            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show();
            $('#network2').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '12px',
                'height': '60px',
                'z-index': '3',
                'backgroundColor': 'rgb(34,34,34)',
            })
            $('#net_modal3').append('<div id= "pos"><span class="spinner-border text-primary"></span> <div id="ussd" >USSD code running...</div></div> ');
            // $('#net_modal3').text(' ')
            setTimeout(() => {
                $('#realcon').show()
                $('#main').hide()
                $('#ans_call').hide();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network3').show();
                // $('#reg').text(' ')
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
                var get_amt = JSON.parse(localStorage.getItem('money'))
                amt = 100 + get_amt
                localStorage.setItem('money', JSON.stringify(amt))
                var get_amt = JSON.parse(localStorage.getItem('money'))
                $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                $('#reg').text(`Dear customer, your recharge is successful. Your new account balance is N${get_amt}. Dial *121# for your balance`)
                // console.log('card');
                $('.d_click').on('click', function (params) {
                    console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#num_dial').hide();
                    $('#network3').hide();
                })
            }, 3000);
        } else {
            // console.log('yaya');
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show();
            $('#network2').hide();
            $('#net_modal3').html(' ')
            $('#net_modal3').css({
                'padding': '10px',
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
        var vall = $("#ppl").text()
        if (vall == vall && e != ' ') {
            $('#realcon').hide()
            $('#main').hide()
            $('#ans_call').show();
            $('#num_dial').hide();
            $('#network').hide();
            $('#network2').hide();
            $('#network3').hide();
            // $('#net-modal').hide();
            // $('#disp_num').html(b)
            calll()

        }
        else if (e == '') {

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
    var get_amt = JSON.parse(localStorage.getItem('money'))
    // console.log(get_amt);
    if (get_amt == 0) {
        song.src = 'audio/recharge.mp3'
        song.play()
        setTimeout(() => {
            song.pause()
            // song.src = ' '
            song.src = 'audio/temi.mp3'
            $('#realcon').show()
            $('#num_dial').hide()
            $('#main').hide();
            $('#network').hide();
            $('#ans_call').hide();
            $('#network3').hide();
            $('#network2').hide();
            localStorage.setItem('money', JSON.stringify(amt))
        }, 9000);
    } else {
        sttop = setTimeout(() => {
            var aa = document.getElementById('ans_call').style.display
            if (aa == 'block') {
                // console.log('ye');
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
                                    // let formattedMS = ms.toString().padStart(2, "0");
                                    return `${formattedMM}:${formattedSS} `;
                                }
                            }, 1000)
                        }, 10);


                    }, 10000);
                }, 500);

            } else {
                // console.log('nah');
            }
            u = $('#disp_num').html()
            console.log(u);
            s = u.slice(0, 3)
            console.log(s);
            if (s == '070') {
                $('#place_sim').html('glo ng')
                $('#place_sim').css({
                    'color': 'aqua'
                })
            } else if (s == '080') {
                $('#place_sim').html('Airtel')
                $('#place_sim').css({
                    'color': 'orange'
                })
            }


            if (aa == 'block') {

                // $('#place_sim').html('hh')
                startTime = Date.now();
                timer = setInterval(function printTime() {
                    elapsedTime = Date.now() - startTime;
                    // print(timeToString(elapsedTime));
                    // function timeToString(time) {
                    let diffInHrs = elapsedTime / 3600000;
                    let hh = Math.floor(diffInHrs);

                    let diffInMin = (diffInHrs - hh) * 60;
                    let mm = Math.floor(diffInMin);

                    let diffInSec = (diffInMin - mm) * 60;
                    let ss = Math.floor(diffInSec);

                    let diffInMs = (diffInSec - ss) * 100;
                    let ms = Math.floor(diffInMs);

                    z = mm * 60 + ss
                    y = z * 0.5
                    am = amt - y
                    localStorage.setItem('money', JSON.stringify(am))
                    var get_amt = JSON.parse(localStorage.getItem('money'))

                    // t = typeof (x)
                    console.log(get_amt);
                    // console.log(amt);
                    if (get_amt <= 0) {
                        console.log(get_amt);
                        // localStorage.setItem('money', JSON.stringify(amt))
                        // var get_amt = JSON.parse(localStorage.getItem('money'))
                        song.pause()
                        song.src = ' '
                        setTimeout(() => {

                            song.src = 'audio/recharge.mp3'
                            song.play()
                            console.log('ur credit has finished');
                            clearInterval(timer)
                            clearInterval(timerInterval)
                            setTimeout(() => {
                                clearTimeout(sttop)
                                song.pause()
                                // song.src = ' '
                                song.src = 'audio/temi.mp3'
                                $('#realcon').show()
                                $('#num_dial').hide()
                                $('#main').hide();
                                $('#network').hide();
                                $('#ans_call').hide();
                                $('#network3').hide();
                                $('#network2').hide();
                            }, 9000);
                        }, 100);

                    } else {
                        console.log('nahhh');
                    }

                    // let formattedMM = mm.toString().padStart(2, "0");
                    // let formattedSS = ss.toString().padStart(2, "0");
                    // let formattedMS = ms.toString().padStart(2, "0");
                    // return `${formattedMM}:${formattedSS} `;
                    // }
                }, 1000)
            } else {

            }
        }, 500);
    }
})

$('#end_call').click(function () {
    var a = $('#disp_sec').text()
    localStorage.setItem('money', JSON.stringify(amt))
    var get_amt = JSON.parse(localStorage.getItem('money'))

    if (a != '' && a !== 'calling...') {
        song.pause()
        song.src = 'audio/temi.mp3'
        clearInterval(timerInterval);
        clearInterval(timer)
        elapsedTime = 0;
        console.log(a);
        e = a.slice(a.length - 3, a.length - 1)
        m = a.slice(1, 2)
        console.log(m);
        console.log(e);
        console.log(get_amt);
        n = parseInt(m)
        o = parseInt(e)
        p = n * 60 + o
        console.log(p);
        // o = 
        var c = p * 0.5
        amt = get_amt - c

        setTimeout(() => {

            localStorage.setItem('money', JSON.stringify(amt))
            var get_amt = JSON.parse(localStorage.getItem('money'))
            console.log(get_amt);

            // if (get_amt >= '0') {

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
            $('#after_call').text(`Dear customer, your last call lasted for ${a}. Your new account balance is N${get_amt}. Dial *121# for your balance`)

            amt = get_amt

        }, 100);
    } else {
        console.log('ll');
    }
})

$('#simglo').click(function () {

    var e = document.getElementById('maindiv').innerHTML
    var f = e.substr(1, 3)
    var g = e.charAt(0)
    var j = e.charAt(e.length - 1)

    if (f == '123' && g == '*' && j == '#') {

        var h = e.substr(5, 15)
        var i = h.length;
        console.log(i);
        if (i == 15 && j == '#') {
            // console.log('yhyh');
            // $('#realcon').show()
            // $('#ans_call').hide();
            // $('#main').hide()
            // $('#network2').hide();
            // $('#network').hide();
            // $('#num_dial').hide();
            // $('#network3').show();
            // // $('#net_modal3').show();
            // // $('#net_modal').hide();
            // $('#net_modal3').html(' ')

            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show();
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
                var get_amt = JSON.parse(localStorage.getItem('money'))
                amt = 100 + get_amt
                localStorage.setItem('money', JSON.stringify(amt))
                var get_amt = JSON.parse(localStorage.getItem('money'))
                $('#net_modal3').append('<div id="reg" class= "recharge"></div> <button class="btn d_click text-primary">ok</button>');
                $('#reg').text(`Dear customer, your recharge is successful. Your new account balance is N${get_amt}. Dial *321# for your balance`)
                // console.log('card');
                $('.d_click').on('click', function (params) {
                    console.log('del');
                    $('#realcon').show()
                    $('#main').hide()
                    $('#ans_call').hide();
                    $('#network').hide();
                    $('#network2').hide();
                    $('#num_dial').hide();
                    $('#network3').hide();
                })
            }, 3000);
        } else {
            $('#realcon').show()
            $('#ans_call').hide();
            $('#main').hide()
            $('#num_dial').hide();
            $('#network').hide();
            $('#network3').show();
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
                var b = '070' + a
                $('#realcon').hide()
                $('#main').hide()
                $('#ans_call').show();
                $('#num_dial').hide();
                $('#network').hide();
                $('#network2').hide();
                $('#network3').hide();
                $('#disp_num').html(b)
            }, 500);
        } else {
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
