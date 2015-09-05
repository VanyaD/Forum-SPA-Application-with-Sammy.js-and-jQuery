/**
 * Created by vanya on 9/4/2015.
 */

var templates = (function () {
    function get(name) {
        var promise = new Promise(function (resolve, reject) {
            var url = 'templates/' + name + '.handlebars'; // da vidia tova zashto ne raboti
            $.get(url, function (templateHtml) {
                var template = Handlebars.compile(templateHtml);
                resolve(template);
            });
        });
        return promise;
    }

    return {
        get: get
    };
}());
