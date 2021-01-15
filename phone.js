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

// document.getElementById('contact').addEventListener('click', call())
function call(params) {
    var a = document.getElementById('main').innerHTML = ' '
    document.getElementById('main').style.backgroundColor = 'white'
}
$('.contact').on('click', function () {
    $('#main').hide();
    $('#realcon').show()
})

$('.home2').on('click', function () {
    $('#realcon').hide()
    $('#num_dial').hide()
    $('#main').show();
})

$('#_pad').click(function () {
    // console.log('kiii');
    $('#realcon').hide()
    $('#main').hide()
    $('#num_dial').show();
})
$('.pick_num').on('click', function () {
    var a = $(this).text()
    document.getElementById('maindiv').innerText += a;
})
$('.pick_num').on('mousedown', function () {
    var a = $(this).css({
        'box-shadow': '0 0px 10px rgb(148, 143, 143)',
        'background-color': 'rgba(148, 143, 143,0.3)',
    })
    $(this).after(a)
})


