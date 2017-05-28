/*Display arguments of the url on the page in next format:
 <full url>
 <arg1> - <value1>
 <arg2> - <value2> ... etc.
 */

function getUrl() {
    var args = {};
    var urlSearch = window.location.search.substring(1);
    var urlQuery = urlSearch.split("&");

    for (count = 0; count < urlQuery.length; count++) {
        var arguments = urlQuery[count].split("=");
        args[arguments[0]] = arguments[1];
        }

    return args;
}

console.log('<' + window.location + '>');
for (count2 = 0; count2 < Object.keys(getUrl()).length; count2++) {
    console.log('<' + Object.keys(getUrl())[count2] + '>' + ' - ' + '<' + Object.values(getUrl())[count2] + '>');
}
