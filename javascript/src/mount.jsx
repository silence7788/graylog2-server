'use strict';

var $ = require('jquery'); // excluded and shimed

$(document).ready(() => {
    require('./components/users/mount');
    require('./components/source-tagging/mount');
    require('./components/start-page/mount');
    require('./components/sources/mount');
    require('./components/dashboard/mount');
    require('./components/search/mount');
});
