direction = 'right';
position = 0;
lengthInterval = 100;
clicks = 0;

$("h1").offset({
    left: position,
    top: position
})

function moving() {
    if (direction === 'right') {
        $("h1").offset({
            left: position
        })
        position++;
        if (position > 200) {
            position = 0;
            direction = 'down'
        }
    } else if (direction === 'down') {
        $("h1").offset({
            top: position
        })
        position++;
        if (position > 200) {
            position = 200;
            direction = 'left'
        }
    } else if (direction === 'left') {
        $("h1").offset({
            left: position
        })
        position--;
        if (position < 0) {
            position = 200;
            direction = 'up'
        }
    } else if (direction === 'up') {
        $("h1").offset({
            top: position
        })
        position--;
        if (position < 0) {
            position = 0;
            direction = 'right'
        }
    }
}
interval = setInterval(moving, lengthInterval);
$("h1").click(function() {
    clearInterval(interval);
    lengthInterval /= 2;
    clicks++;

    if (clicks > 9) {
        $("h1").text("you win!")
    } else {
        interval = setInterval(moving, lengthInterval);
        console.log(clicks)
    }
})