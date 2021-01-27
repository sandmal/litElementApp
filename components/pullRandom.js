import { LitElement, html } from 'lit-element';

export class PullRandom extends LitElement {
	static get properties() {
		return {
			_staticList: { type: Array },
		};
	}

	constructor() {
		super();
		this._staticList = [];
	}

	setStaticList(list) {
		this._staticList = list;
	}

	getStaticList() {
		return this._staticList;
	}

	render() {
		return console.log(this.getStaticList());
	}
}

customElements.define('pull-list', PullRandom);
