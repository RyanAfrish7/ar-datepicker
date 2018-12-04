import { LitElement, html } from "@polymer/lit-element"; 

/**
* @polymer
* @extends HTMLElement
*/
export class Datepicker extends LitElement {
    render() {
        return html`
            <p>I will be a datepicker one day</p>
        `;
    }
}

customElements.define("ar-datepicker", Datepicker);
