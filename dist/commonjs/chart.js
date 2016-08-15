'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ChartElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _aureliaFramework = require('aurelia-framework');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var CHART_TYPES = {
	LINE: 'line',
	BAR: 'bar',
	RADAR: 'radar',
	POLAR: 'polarArea',
	PIE: 'pie',
	DOUGHNUT: 'doughnut'
};

var ChartElement = exports.ChartElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.customElement)('chart'), _dec(_class = _dec2(_class = (_class2 = function () {
	_createClass(ChartElement, null, [{
		key: 'CHART_TYPES',
		get: function get() {
			return CHART_TYPES;
		}
	}]);

	function ChartElement(element) {
		_classCallCheck(this, ChartElement);

		_initDefineProp(this, 'type', _descriptor, this);

		_initDefineProp(this, 'data', _descriptor2, this);

		_initDefineProp(this, 'options', _descriptor3, this);

		this.rootElement = null;
		this.canvasElement = null;

		this.rootElement = element;
	}

	ChartElement.prototype.update = function update() {
		this.chartjs.update();
	};

	ChartElement.prototype.attached = function attached() {
		this.canvasElement = this.rootElement.querySelector('canvas');
		this.chartjs = new _chart2.default(this.canvasElement, {
			type: this.type,
			data: this.data,
			options: this.options
		});
	};

	ChartElement.prototype.detached = function detached() {
		this.chartjs.destroy();
	};

	return ChartElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return ChartElement.CHART_TYPES.LINE;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
})), _class2)) || _class) || _class);