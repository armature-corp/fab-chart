import Chart from 'chart.js';
import {inject, bindable, customElement} from 'aurelia-framework';

const CHART_TYPES = {
	LINE:     'line',
	BAR:      'bar',
	RADAR:    'radar',
	POLAR:    'polarArea',
	PIE:      'pie',
	DOUGHNUT: 'doughnut'
};

@inject( Element )
@customElement( 'chart' )
export class ChartElement {

	static get CHART_TYPES() {
		return CHART_TYPES;
	}

	@bindable type    = ChartElement.CHART_TYPES.LINE;
	@bindable data    = null;
	@bindable options = null;

	rootElement   = null;
	canvasElement = null;

	constructor( element ) {
		this.rootElement = element;
	}

	update() {
		this.chartjs.update();
	}

	attached() {		
		this.canvasElement = this.rootElement.querySelector('canvas');
		this.chartjs = new Chart( this.canvasElement, {
			type:    this.type,
			data:    this.data,
			options: this.options
		});
	}

	detached() {
		this.chartjs.destroy();
	}

}