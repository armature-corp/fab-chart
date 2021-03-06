var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
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

import Chart from 'chart.js';
import { inject, bindable, customElement } from 'aurelia-framework';

const CHART_TYPES = {
	LINE: 'line',
	BAR: 'bar',
	RADAR: 'radar',
	POLAR: 'polarArea',
	PIE: 'pie',
	DOUGHNUT: 'doughnut'
};

export let ChartElement = (_dec = inject(Element), _dec2 = customElement('chart'), _dec(_class = _dec2(_class = (_class2 = class ChartElement {

	static get CHART_TYPES() {
		return CHART_TYPES;
	}

	constructor(element) {
		_initDefineProp(this, 'type', _descriptor, this);

		_initDefineProp(this, 'data', _descriptor2, this);

		_initDefineProp(this, 'options', _descriptor3, this);

		this.rootElement = null;
		this.canvasElement = null;

		this.rootElement = element;
	}

	update() {
		this.chartjs.update();
	}

	attached() {
		this.canvasElement = this.rootElement.querySelector('canvas');
		this.chartjs = new Chart(this.canvasElement, {
			type: this.type,
			data: this.data,
			options: this.options
		});
	}

	detached() {
		this.chartjs.destroy();
	}

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
	enumerable: true,
	initializer: function () {
		return ChartElement.CHART_TYPES.LINE;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
	enumerable: true,
	initializer: function () {
		return null;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
	enumerable: true,
	initializer: function () {
		return null;
	}
})), _class2)) || _class) || _class);