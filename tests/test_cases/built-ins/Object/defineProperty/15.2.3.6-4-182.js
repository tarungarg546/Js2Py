// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-182
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is available String values that convert to
    numbers (15.4.5.1 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "0", {
            value: 12
        });

        return arrObj[0] === 12;
    }
runTestCase(testcase);
