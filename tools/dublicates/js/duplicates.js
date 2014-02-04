;
(function ($) {
    'use strict'

    Array.prototype.removeVal = function () {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    var findDuplicates = function () {
        var linksArrayRaw = [];

        var input = $('#input').val();

        input.replace(/[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g, function () {
            linksArrayRaw.push(Array.prototype.slice.call(arguments, 1, 4));
        });

        var linksArray = [];

        for (var n = 0, l = linksArrayRaw.length; n < l; n++) {
            linksArray.push(linksArrayRaw[n][1]);
        }

        var cloneOfLinksArray = linksArray;
        var duplicates = [];

        for (var i = linksArray.length - 1; i > 0; i--) {
            var currentValue = cloneOfLinksArray[i];

            cloneOfLinksArray.length = cloneOfLinksArray.length - 1;

            var ifDuplicated = cloneOfLinksArray.indexOf(currentValue);

            if (ifDuplicated != -1) {
                duplicates.push(currentValue);

                $('#label').show();
                cloneOfLinksArray.removeVal(linksArray[i]);
            }
        }
        $('#list').html('');
        for (var s = 0, m = duplicates.length; s < m; s++) {

            var node = '<li><input type="text" style="width: 100%;" value="' + duplicates[s] + '" /></li>';
            $('#list').append(node);
        }

        $('input').on('focus, click', function () {
            $(this).select();
        });
    };

    $('#action').on('click', findDuplicates);


})(jQuery);
