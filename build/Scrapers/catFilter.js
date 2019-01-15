"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductCategories = function () {
    function ProductCategories() {
        _classCallCheck(this, ProductCategories);

        this.filter = {
            "ingek-blúzok": {
                "promod": 'ing-bluz',
                "hm": 'ingek-es-bluzok'
            },
            "pulóverek-kardigánok": {
                "promod": 'pulover-kardigan',
                "hm": 'kardiganok-es-puloverek'
            },
            "ruhák": {
                "promod": 'ruha',
                "hm": 'ruhak'
            }
        }, this.fetchList = {
            "promod": ['pulover-kardigan', 'ing-bluz', 'ruha'],
            "hm": ['kardiganok-es-puloverek', 'ingek-es-bluzok', 'ruhak']
        };
    }
    // use this method to parse the incoming product names to the specific store format


    _createClass(ProductCategories, [{
        key: "parseInput",
        value: function parseInput(query, store) {
            var _this = this;

            var result = [];
            query.forEach(function (cat) {
                result.push(_this.filter[cat][store]);
            });
            return result;
        }
    }]);

    return ProductCategories;
}();

var productCategories = new ProductCategories();

exports.default = productCategories;
//# sourceMappingURL=catFilter.js.map