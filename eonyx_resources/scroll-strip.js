
function startAnim(elementID, elementWidth) {
    function restart() {
        $('#' + elementID + '.tech-stack').first().css({
            'margin-left': '0px'
        });
        start();
    }

    function start() {
        var techStack = $('#' + elementID + '.tech-stack').first(),
            duration = (elementWidth * 20);

        techStack.animate({
            'margin-left': '-' + elementWidth + 'px'
        }, duration, 'linear', restart);
    }

    $('#' + elementID + '.tech-stack img').hover(() => {
        $('#' + elementID + '.tech-stack').first().stop();
    }, () => { start(); });

    start();
}

function setupAnim(id) {
    var stripWidth = $('#' + id + ' .tech-stack-item').length * (92);
    $('#' + id + ' .tech-stack-list').parent().append($('#' + id + ' .tech-stack-list').clone());
    startAnim(id, stripWidth);
}

setupAnim('tech-stack-1')
$('#tech-stack-1').parent().append($('#tech-stack-1').clone().attr('id', 'tech-stack-2').css('margin-left', '-2300px'));
setupAnim('tech-stack-2')