import { LitElement, html } from "@polymer/lit-element"; 
import { style } from "./ar-datepicker-css";

/**
* @polymer
* @extends HTMLElement
*/
export class Datepicker extends LitElement {
    renderStyle() {
        return style;
    }

    render() {
        return html`
            ${this.renderStyle()}
            <p>I will be a datepicker one day</p>
        `;
    }
}

customElements.define("ar-datepicker", Datepicker);
