// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The [[Value]] property of the newly constructed object
    is set by following steps:
    8. If Result(1) is not NaN and 0 <= ToInteger(Result(1)) <= 99, Result(8) is
    1900+ToInteger(Result(1)); otherwise, Result(8) is Result(1)
    9. Compute MakeDay(Result(8), Result(2), Result(3))
    10. Compute MakeTime(Result(4), Result(5), Result(6), Result(7))
    11. Compute MakeDate(Result(9), Result(10))
    12. Set the [[Value]] property of the newly constructed object to
    TimeClip(UTC(Result(11)))
es5id: 15.9.3.1_A5_T5
description: 6 arguments, (year, month, date, hours, minutes, seconds)
includes:
    - $FAIL.js
    - environment.js
    - numeric_conversion.js
    - Date_constants.js
    - Date_library.js
---*/

if (-2208960001000 !== new Date(1899, 11, 31, 23, 59, 59).valueOf()) {
  $FAIL("#1: Incorrect value of Date");
}

if (-2208960000000 !== new Date(1899, 12, 1, 0, 0, 0).valueOf()) {
  $FAIL("#2: Incorrect value of Date");
}

if (-2208960000000 !== new Date(1900, 0, 1, 0, 0, 0).valueOf()) {
  $FAIL("#3: Incorrect value of Date");
}

if (28799000 !== new Date(1969, 11, 31, 23, 59, 59).valueOf()) {
  $FAIL("#4: Incorrect value of Date");
}

if (28800000 !== new Date(1969, 12, 1, 0, 0, 0).valueOf()) {
  $FAIL("#5: Incorrect value of Date");
}

if (28800000 !== new Date(1970, 0, 1, 0, 0, 0).valueOf()) {
  $FAIL("#6: Incorrect value of Date");
}

if (946713599000 !== new Date(1999, 11, 31, 23, 59, 59).valueOf()) {
  $FAIL("#7: Incorrect value of Date");
}

if (946713600000 !== new Date(1999, 12, 1, 0, 0, 0).valueOf()) {
  $FAIL("#8: Incorrect value of Date");
}

if (946713600000 !== new Date(2000, 0, 1, 0, 0, 0).valueOf()) {
  $FAIL("#9: Incorrect value of Date");
}

if (4102473599000 !== new Date(2099, 11, 31, 23, 59, 59).valueOf()) {
  $FAIL("#10: Incorrect value of Date");
}

if (4102473600000 !== new Date(2099, 12, 1, 0, 0, 0).valueOf()) {
  $FAIL("#11: Incorrect value of Date");
}

if (4102473600000 !== new Date(2100, 0, 1, 0, 0, 0).valueOf()) {
  $FAIL("#12: Incorrect value of Date");
}
