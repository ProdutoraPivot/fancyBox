// check isset
var PVT = PVT || {};

// module name
PVT.fancybox = {};

(function (window, document, $, undefined) {
    'use strict';

    PVT.fancybox.open = function (args, undefined) {
        $.fancybox.open( 
        	,
        	{
        		tpl: {
	                closeBtn : '<a title="Fechar" class="fancybox-item fancybox-close" href="javascript:;"></a>'
	            }
        	} 
		);
    };

}(this, document, jQuery));
