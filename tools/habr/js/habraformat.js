; (function ($) {
    'use strict'

    var loadDigestNumber = function() {
        var $numberEl = $('#number'),
            newNumber = 0,
            storage = window.localStorage,
            savedNumber = storage.getItem("digestNumber");

        if(savedNumber) {
            newNumber = savedNumber;
            newNumber++;
            $numberEl.val(newNumber);
        }
    };

    loadDigestNumber();


    var getCurrentDate = function() {
        var $day1El = $('#day1'),
            $day2El = $('#day2'),
            $monthEl = $('#month'),
            $yearEl = $('#year'),
            currentTime = new Date(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            previousDay = 0,
            year = currentTime.getFullYear();

        $day2El.val(day);
        previousDay = day - 7;
        if(previousDay >= 0) {
            $day1El.val(previousDay);
        }
        $monthEl.find('option:nth-child('+month+')').attr("selected", true);
        $yearEl.val(year);
    };

    getCurrentDate();

    var habraformatMe = function() {
        var $input = $('#input'),
            $output = $('#output'),
            input = $input.val();

        var linesToReplace = [
            '<!DOCTYPE html>',
            '<html>',
            '<head>',
            '    <title>Digest</title>',
            '    <meta name="description"',
            '          content="KharkivCSS"/>',
            '    <meta name="keywords" content="KharkivCSS"/>',
            '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>',
            '    <link rel="stylesheet" href="css/style.css" />',
            '</head>',
            '<body>',
            '<div class="main">',
            '</body>',
            '</html>'
        ];

        // Removing of header/footer
        for(var i = 0, l = linesToReplace.length; i < l; i++) {
            input = input.replace(linesToReplace[i] + '\n', '');
        }

        var setupDigestNumber = function() {
            var $numberEl = $('#number'),
                currentNumber = $numberEl.val(),
                newNumber = 0,
                storage = window.localStorage,
                savedNumber = storage.getItem("digestNumber");

            if(currentNumber.length) {
                if(storage) {
                    storage.setItem("digestNumber", currentNumber);
                }
            }
        };

        setupDigestNumber();

        var firstLine = $('#firstLine').text() +
            + $('#number').val() + ' ('
            + $('#day1').val() + ' — '
            + $('#day2').val() + ' '
            + $('#month').val() + ' '
            + $('#year').val() + ') '
            + '\n\n';
        var secondLine = $('#secondLine').text() + '\n\n';

        var thirdLine = '<p><img src="' + $('#mainImgURL').val() + '"/></p>\n<habracut />\n\n';

        // Remove divs
        input = input.replace(/<div>\n/gi, '');
        input = input.replace(/<\/div>\n/gi, '');
        // Replace en
        input = input.replace(/<i class="en"><\/i>/gi, '<img alt="en" src="http://habrastorage.org/storage3/2e2/522/737/2e2522737ec404a9f76047e108dfaea0.gif"/>');
        // Replace habr
        input = input.replace(/<i class="habr"><\/i>/gi, '<img alt="habr" src="http://habrastorage.org/storage2/c57/b92/af4/c57b92af4ee0d37f787c211a068b1b95.png"/>');
        // Replace fun
        input = input.replace(/<i class="fun"><\/i>/gi, '<img alt=":)" src="http://habrastorage.org/storage3/fb1/fc6/10f/fb1fc610f94ee43acd4f894c3166ced7.gif"/>');
        // Replace vidoe
        input = input.replace(/<i class="yt"><\/i>/gi, '<img alt="video" src="http://habrastorage.org/storage3/976/d3e/38a/976d3e38a34b003f86f91795524af9f8.gif"/>');
        // Remove indention
        input = input.replace(/    </gi, '<');
        // Replace Вебразработка
        input = input.replace(' id="development" class="ico_development">', '><img src="http://habr.habrastorage.org/post_images/b70/f9f/eae/b70f9feaeee78b42a0c78c3731555e73.gif"/> ');
        // Replace CSS
        input = input.replace(' id="css" class="ico_css">', '><img src="http://habr.habrastorage.org/post_images/36c/2c6/966/36c2c69660dd21085a2dcb71d7246ae6.gif"/> ');
        // Replace JavaScript
        input = input.replace(' id="js" class="ico_js">', '><img src="http://habr.habrastorage.org/post_images/49d/04e/fb9/49d04efb96fb6ce31cde9be5dc12a874.gif"/> ');
        // Replace Веб-инструменты
        input = input.replace(' class="ico_services" id="services">', '><img src="http://habr.habrastorage.org/post_images/c59/524/8ce/c595248cea9cbeab42ab6633d54d3782.gif"/> ');
        // Replace Браузеры
        input = input.replace(' id="browser" class="ico_brows">', '><img src="http://habr.habrastorage.org/post_images/c59/524/8ce/c595248cea9cbeab42ab6633d54d3782.gif"/> ');
        // Replace Новости
        input = input.replace(' id="news" class="ico_news">', '><img src="http://habr.habrastorage.org/post_images/281/994/c0f/281994c0fe695abbe6d963faed1cffb6.gif"/> ');
        // Replace Сайты с интересным дизайном
        input = input.replace(' id="design" class="ico_design">', '><img src="http://habr.habrastorage.org/post_images/a27/ea0/6f7/a27ea06f7d56f6b750420fcbc5c63da8.gif"/> ');
        // Replace Сайты с интересным дизайном
        input = input.replace(' id="design" class="ico_design">', '><img src="http://habr.habrastorage.org/post_images/a27/ea0/6f7/a27ea06f7d56f6b750420fcbc5c63da8.gif"/> ');
        // Replace Сайты с интересным дизайном
        input = input.replace(' id="design3" class="ico_design">', '><img src="http://habr.habrastorage.org/post_images/a27/ea0/6f7/a27ea06f7d56f6b750420fcbc5c63da8.gif"/> ');
        // Replace Demo
        input = input.replace(' id="demo" class="ico_demo">', '><img src="http://habr.habrastorage.org/post_images/c59/524/8ce/c595248cea9cbeab42ab6633d54d3782.gif"/> ');
        // Replace Занимательное
        input = input.replace(' id="interesting" class="ico_interesting">', '><img src="http://habr.habrastorage.org/post_images/d4b/289/ef0/d4b289ef0a00e969108c25d0c3d75f58.gif"/> ');

        var final1 = '<p>Просим прощения за возможные опечатки или неработающие/дублирующиеся ссылки. Если вы заметили проблему — напишите пожалуйста в личку, мы стараемся оперативно их исправлять. </p>\n\n';

        var final2 = '<a href="'  + $('#lastDigestUrl').val() + '">Дайджест за прошлую неделю</a>.<br>Материал подготовили <a class="user_link" href="http://habrahabr.ru/users/dersmoll/">dersmoll</a> и <a class="user_link" href="http://habrahabr.ru/users/alekskorovin/">alekskorovin</a>.';

        input = firstLine + secondLine + thirdLine + input + final1 + final2;

        $output.val(input);
    };



    var updateImg = function() {
        var $img = $('#mainImg'),
            imgURL = $('#mainImgURL').val();

        $img.attr('src', imgURL);
    }

    $('#action').on('click', habraformatMe);

    $('#mainImgURL').on('change', updateImg);

    function nWin() {
      var w = window.open();
      var html = $("#output").val();

        $(w.document.body).html(html);
    }

    $('#check').on('click', nWin);



})(jQuery);
