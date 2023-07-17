"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CruzeiroCrawler = void 0;
var baseCrawler_1 = require("./lib/rakoon/crawlers/baseCrawler");
var CruzeiroCrawler = /** @class */ (function (_super) {
    __extends(CruzeiroCrawler, _super);
    function CruzeiroCrawler() {
        var _this = _super.call(this) || this;
        _this.SELECTORS = {};
        _this.BASE_URL = 'https://estrelabet.com/ptb/bet/fixture-detail/48851733';
        return _this;
    }
    ;
    return CruzeiroCrawler;
}(baseCrawler_1.BaseCrawler));
exports.CruzeiroCrawler = CruzeiroCrawler;
