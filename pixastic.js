
function resetImg() {
    Pixastic.revert(document.getElementById('image'));
    };

function blurImg() {
    Pixastic.process(document.getElementById("image"), "blurfast", { amount: $('#sliderBl').val()});
};

function brightImg() {
    Pixastic.process(document.getElementById("image"), "brightness", {
        brightness : $("#sliderBr").val(),
        contrast : $("#sliderCon").val(),
        //legacy : $("#value-legacy").attr("checked")
    });
};

function colorImg()  {
    Pixastic.process(document.getElementById("image"), "coloradjust", {red: $('#sliderRe').val(), green: $('#sliderGr').val(), blue: $('#sliderBlue').val()});
};



function cropImg()  {
    Pixastic.process(document.getElementById("image"), "crop", {rect: {left: $('#x').val(), top: $('#y').val(), width: $('#w').val(), height: $('#h').val()}});
};


function desaturateImg()  {
    Pixastic.process(document.getElementById("image"), "desaturate", {average : false});
};

function edgeImg()  {
    Pixastic.process(document.getElementById("image"), "edges2");
};

function flipHImg()  {
    Pixastic.process(document.getElementById("image"), "fliph");
};

function flipVImg()  {
    Pixastic.process(document.getElementById("image"), "flipv");
};

function glowImg()  {
    Pixastic.process(document.getElementById("image"), "glow", {amount: $('#sliderGlowA').val(), radius: $('#sliderGlowR').val()});
};

function hslImg()  {
    Pixastic.process(document.getElementById("image"), "hsl", {hue: $('#sliderHue').val(), saturation: $('#sliderSat').val(), lightness: $('#sliderLight').val()});
};

function invertImg() {
    Pixastic.process(document.getElementById("image"), "invert");
};

function lightenImg() {
    Pixastic.process(document.getElementById("image"), "lighten", { amount: $('#sliderLighten').val()});
};

function mosaicImg()  {
    Pixastic.process(document.getElementById("image"), "mosaic", {blockSize: $('#sliderMosaic').val()});
};

function noiseImg()  {
    Pixastic.process(document.getElementById("image"), "noise", {mono: true, amount: $('#sliderNoiseA').val(), strength: $('#sliderNoiseS').val()});
};

function posterImg()  {
    Pixastic.process(document.getElementById("image"), "posterize", {levels: $('#sliderPoster').val()});
};

function rotateImg()  {
    Pixastic.process(document.getElementById("image"), "rotate", {angle: 90});
};

function sharpenImg()  {
    Pixastic.process(document.getElementById("image"), "sharpen", {amount : $('#sliderSharpen').val()});
};

function solarizeImg()  {
    Pixastic.process(document.getElementById("image"), "solarize");
};

function unsharpImg()  {
    Pixastic.process(document.getElementById("image"), "unsharpmask", {amount : $('#sliderUnsharpA').val(), radius: $('#sliderRadius').val(), threshold: $('#sliderThres').val()});
};
