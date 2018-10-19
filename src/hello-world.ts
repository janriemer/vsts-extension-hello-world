import VssControls = require('VSS/Controls');

import _ = require('lodash');

VSS.ready(function() {
    console.log("Hello World!");
    // just calling a method to see whether it works
    console.log(VssControls.getId());

    // calling a method from lodash to see whether it works
    _.forEach([2,3,4], val => {
        console.log(val);
    });
});