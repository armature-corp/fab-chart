'use strict';

System.register(['chart.js', 'aurelia-framework'], function (_export, _context) {
	"use strict";

	var Chart, inject, bindable, customElement, _createClass, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, CHART_TYPES, ChartElement;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

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

	return {
		setters: [function (_chartJs) {
			Chart = _chartJs.default;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
		}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			CHART_TYPES = {
				LINE: 'line',
				BAR: 'bar',
				RADAR: 'radar',
				POLAR: 'polarArea',
				PIE: 'pie',
				DOUGHNUT: 'doughnut'
			};

			_export('ChartElement', ChartElement = (_dec = inject(Element), _dec2 = customElement('chart'), _dec(_class = _dec2(_class = (_class2 = function () {
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
					this.chartjs = new Chart(this.canvasElement, {
						type: this.type,
						data: this.data,
						options: this.options
					});
				};

				ChartElement.prototype.detached = function detached() {
					this.chartjs.destroy();
				};

				return ChartElement;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return ChartElement.CHART_TYPES.LINE;
				}
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			})), _class2)) || _class) || _class));

			_export('ChartElement', ChartElement);
		}
	};
});