// cannot put blotter js code in here because scope.appendTo(elem) gives error


// mapping function to translate the pages X coordinate to the text graphic range
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// mouse event handler
// on html, change material offset according to mouse x postion
$("html").mousemove(function (event) {

    // print xpos
    // console.log("pageX: " + event.pageX)

    // round the mouse position
    let xpos = Math.ceil(event.pageX / 10) * 10

    // map the ranges of the window width with the offset value
    let mouseValue = xpos.map(
        // window x0, xf
        0, $(window).width(),

        // blotter material offset x0, xf
        0.0186, 0.1
    )

    //console.log("pageX': " + mouseValue)

    // set the material offset to the mouse value
    material.uniforms.uOffset.value = mouseValue
})