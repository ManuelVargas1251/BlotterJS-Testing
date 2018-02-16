// cannot put blotter js code in here because scope.appendTo(elem); gives error


// mapping function to translate the pages X coordinate to the text graphic range
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


// on html, change material offset according to mouse x postion
$("html").mousemove(function (event) {
    //console.log("pageX: " + event.pageX)

    let xpos = Math.ceil(event.pageX / 10) * 10

    let mouseValue = xpos.map(
        0, $(window).width(),
        0.0186, 0.1)

    //console.log("pageX mod 1: " + mouseValue)

    // material.uniforms.uOffset.value = event.pageX % 1
    material.uniforms.uOffset.value = mouseValue

})
