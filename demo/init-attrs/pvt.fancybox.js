// check isset
var PVT = PVT || {};

// module name
PVT.fancybox = {};

(function (window, document, $, undefined) {
    'use strict';

    PVT.fancybox.open = function (url, args, undefined) {
        var options = {
            width: 500,
            height: 300
        };

        var obj = $.extend({}, options, args);

        $.fancybox.open({
            href        : url,
            width       : obj.width,
            height      : obj.height,
            autoSize    : false,
            type        : 'inline',
            padding     : 0,
            openEffect  : 'none',
            closeEffect : 'none',
            tpl: {
                closeBtn: '<a title="Fechar" class="fancybox-close" href="#"></a>'
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
