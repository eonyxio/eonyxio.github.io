
function startAnim(blockName, blockWidth) {
    function restart() {
        $('#' + blockName + '.tech-stack').first().css({
            'margin-left': '0px'
        });
        start();
    }

    function start() {
        var techStack = $('#' + blockName + '.tech-stack').first(),
            duration = (blockWidth * 20);

        techStack.animate({
            'margin-left': '-' + blockWidth + 'px'
        }, duration, 'linear', restart);
    }

    $('#' + blockName + '.tech-stack img').hover(() => {
        $('#' + blockName + '.tech-stack').first().stop();
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