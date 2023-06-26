$(document).ready(function() {
//    var check = true
    $.getJSON('lang.json', function(json) {
        $('#changeLang').click(function() {
            let lang

            check = !check
            lang = check == true ? 'es' : 'en';
            document.getElementById("contact_lang").value=lang;
            changeLang(lang)
                // $('.lang').each(function(index, value) {
                //     $(this).text(json[lang][$(this).attr('key')])
                // })
                // $('.langImg').each(function(index, value) {
                //     $(this).attr('src', json[lang][$(this).attr('key')]);
                // })
                // $('.langCarru').each(function(index, value) {
                //     $(this).css('background-image', 'url(' + json[lang][$(this).attr('key')] + ')')
                // })
                // $('.langPlaceholder').each(function(index, value) {
                //     $(this).attr("placeholder", json[lang][$(this).attr('key')]);
                // })
                // $('.langBtn').each(function(index, value) {
                //     $(this).attr("value", json[lang][$(this).attr('key')]);
                // })



        });
        $('.lan').click(function() {
            let lan = $(this).attr('data-valie');
            changeLang(lan)
                // alert('okik' + $(this).attr('data-valie'))
        })

        function changeLang(lang) {
            $('.lang').each(function(index, value) {                
                $(this).text(json[lang][$(this).attr('key')])
            })
            $('.lang-href').each(function(index, value) {
                $(this).text(json[lang][$(this).attr('key')])
                $(this).attr('href', 'mailto:' + json[lang][$(this).attr('key')]);
            })

            $('.langImg').each(function(index, value) {
                $(this).attr('src', json[lang][$(this).attr('key')]);
            })
            $('.langCarru').each(function(index, value) {
                $(this).css('background-image', 'url(' + json[lang][$(this).attr('key')] + ')')
            })
            $('.langPlaceholder').each(function(index, value) {
                $(this).attr("placeholder", json[lang][$(this).attr('key')]);
            })
            $('.langBtn').each(function(index, value) {
                $(this).attr("value", json[lang][$(this).attr('key')]);
            })

        }

    })


})
