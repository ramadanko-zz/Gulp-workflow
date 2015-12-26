/**
 * Created by mohammed on 25/12/15.
 */
$(function() {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function(data) {
        var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    }); //getJSON

}); //function
