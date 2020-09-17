function fadeMenu() {
    return new Promise(resolve => {
        $("#menu").fadeOut('slow', function () {
            $("#game").show();
            resolve('Menu faded')
        });
    })
}

function countdown() {
    return new Promise(resolve => {
        var num = 3;
        $(`<h2 id="countdown">${num}</h2>`).appendTo('#game');
        var x = setInterval(function () {
            if (num < 1) {
                clearInterval(x);
                $("#countdown").hide();
                resolve('Countdown complete')
            }
            num--;
            $("#countdown").html(`${num}`);
            console.log(num);
        }, 1000)
    })
}

async function startGame() {
    await fadeMenu();
    await countdown();
}