System.register("chunks:///_virtual/mainController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,r,o,e;return{setters:[function(t){n=t.inheritsLoose},function(t){r=t.cclegacy,o=t._decorator,e=t.Component}],execute:function(){var i;r._RF.push({},"f1014jHxTNFg5tptwnfLdx0","mainController",void 0);var c=o.ccclass;o.property,t("mainController",c("mainController")(i=function(t){function r(){return t.apply(this,arguments)||this}return n(r,t),r.prototype.start=function(){},r}(e))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./mainController.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});