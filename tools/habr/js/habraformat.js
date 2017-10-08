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
            '    <meta name="description"   content="KharkivCSS"/>',
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
        // Replace amp
        input = input.replace(/<i class="amp"><\/i>/gi, '<img alt="AMP" src="https://habrastorage.org/web/6af/b93/148/6afb93148d3447d3b68bf13d32f36d93.png">');
        // Replace pwa
        input = input.replace(/<i class="pwa"><\/i>/gi, '<img alt="pwa" src="https://habrastorage.org/web/dc5/696/b7f/dc5696b7fbef409eb5e2921500a26c3d.png">');
        // Replace ff
        input = input.replace(/<i class="ff"><\/i>/gi, '<img alt="Firefox" src="https://habrastorage.org/web/658/e68/375/658e68375138497db4e8be50a3c603e8.png">');
        // Replace codepen
        input = input.replace(/<i class="cp"><\/i>/gi, '<img alt="codepen" src="https://habrastorage.org/web/75b/af7/c56/75baf7c564444166b143369dd9e97586.png">');
        // Replace github
        input = input.replace(/<i class="gh"><\/i>/gi, '<img alt="Github" src="https://habrastorage.org/web/090/49e/c0e/09049ec0e7d3404e8b0c6e369b826001.png">');
        // Replace chrome
        input = input.replace(/<i class="ch"><\/i>/gi, '<img alt="Chrome" src="https://habrastorage.org/web/7a5/e0c/2da/7a5e0c2da5a6439eafd2f18a6be6c55f.png">');
        // Replace ie
        input = input.replace(/<i class="ie"><\/i>/gi, '<img alt="IE" src="https://habrastorage.org/web/46d/4ab/086/46d4ab086f8d4d0093653f539db4d177.png">');
        // Replace podcast
        input = input.replace(/<i class="pc"><\/i>/gi, '<img alt="podcast" src="https://habrastorage.org/web/259/2f4/069/2592f40697cc49dc939e9fc3983fc737.png">');
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

        var contest = '<table><tbody><tr><td><a href="#webdev"><b>Веб-разработка</b></a></td></tr><tr><td><a href="#css"><b>CSS</b></a></td></tr><tr><td><a href="#js"><b>Javascript</b></a></td></tr><tr><td><a href="#browser"><b>Браузеры</b></a></td></tr><tr><td><a href="#intresting"><b>Занимательное</b></a></td></tr></tbody></table>\n\n';

        var final1 = '<p>Просим прощения за возможные опечатки или неработающие/дублирующиеся ссылки. Если вы заметили проблему — напишите пожалуйста в личку, мы стараемся оперативно их исправлять. </p>\n\n';

        var final2 = '<a href="'  + $('#lastDigestUrl').val() + '">Дайджест за прошлую неделю</a>.<br>Материал подготовили <a class="user_link" href="http://habrahabr.ru/users/dersmoll/">dersmoll</a> и <a class="user_link" href="http://habrahabr.ru/users/alekskorovin/">alekskorovin</a>.';

        input = firstLine + secondLine + thirdLine + contest + input + final1 + final2;

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
