// check isset
var PVT = PVT || {};

// module name
PVT.fancybox = {};

(function (window, document, $, undefined) {
    'use strict';

    PVT.fancybox.open = function (url, args, undefined) {
        var options = {
            width:  500,
            height: 300,
            type: 'inline',
            autoSize: false,
            padding: 0,
            helpers: {
                overlay : true,
                locked: false
            }
        },
        obj = $.extend({}, options, args);

        $.fancybox.open({
            href: url,
            width: obj.width,
            height: obj.height,
            autoSize: obj.autoSize,
            type: obj.type,
            padding: obj.padding,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                error: '<p class="fancybox-error">O conteúdo solicitado não pode ser carregado.</p>',
                closeBtn: '<a title="Fechar" class="fancybox-close" href="javascript:;"></a>',
                next: '<a title="Próxima" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Anterior" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            helpers: {
                overlay : obj.helpers.overlay,
                css: {}
            },
            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up',   // page down
                    39: 'left', // right arrow
                    40: 'up'    // down arrow
                },
                prev: {
                    8: 'right',  // backspace
                    33: 'down',   // page up
                    37: 'right',  // left arrow
                    38: 'down'    // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70]  // letter "f" - toggle fullscreen
            }
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },
            beforeShow: function () {

            },
            afterShow: function() {

            },
            afterClose: function() {

            }
        });
    };

}(this, document, jQuery));
