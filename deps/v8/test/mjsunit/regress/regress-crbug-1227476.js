// Copyright 2021 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

assertThrows(
    () => {
      let ar = new Int32Array();
      ar.__defineGetter__(-2, function() {});
    }, TypeError);
