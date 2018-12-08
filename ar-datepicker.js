import { LitElement, html } from "@polymer/lit-element"; 
import { style } from "./ar-datepicker-css";
import { classMap } from "lit-html/directives/class-map";
import { guard } from "lit-html/directives/guard";

// some basic utilities
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
const computeFirstDateOfWeek = (date) => new Date(date.valueOf() - date.getDay() * MILLISECONDS_IN_A_DAY);

/**
* @polymer
* @extends HTMLElement
*/
export class Datepicker extends LitElement {
    static get properties() {
        return {
            month: { type: Number },
            year: { type: Number },
        }
    }

    constructor() {
        super();
        this.month = 12;
        this.year = 2018;
    }

    renderStyle() {
        return style;
    }

    render() {
        const date = new Date(this.year, this.month - 1);
        const calendar = this.getCalendarForMonth(this.month, this.year);

        return html`
            <style>
                :host {
                    display: block;
                    width: 320px;
                }

                #grid {
                    display: grid;
                    grid-template-columns: repeat(7, [col] calc(100% / 7)) ;
                }

                #month-and-year {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                #month, #year {
                    display: inline-block;
                }
            </style>
            ${this.renderStyle()}
            <div id="month-and-year">
                <div id="month">${date.toLocaleString(undefined, {month: "long"})}</div>
                <div id="year">${date.toLocaleString(undefined, {year: "numeric"})}</div>
            </div>
            <div id="grid">
                ${calendar.slice(undefined, 7).map(date => html`<div class="days-of-the-week">${date.toLocaleString(undefined, {weekday: "short"})}</div>`)}
                ${calendar.map(date => this.renderDateElement(date))}
            </div>
        `;
    }

    renderDateElement(date) {
        return html`
            <div class="date ${classMap({
                "secondary": date.getMonth() !== this.month - 1,
                "today": Math.floor(date.valueOf() / MILLISECONDS_IN_A_DAY) === Math.floor(new Date().valueOf() / MILLISECONDS_IN_A_DAY),
            })}">${date.getDate()}</div>
        `;
    }

    getCalendarForMonth(month, year) {
        const firstDateOfMonth = new Date(year, month - 1);
        const lastDateOfMonth = new Date(year, month, 0);

        const endDate = new Date(computeFirstDateOfWeek(lastDateOfMonth).valueOf() + 7 * MILLISECONDS_IN_A_DAY);

        const calendar = [];

        for(let date = computeFirstDateOfWeek(firstDateOfMonth); date < endDate; date = new Date(date.valueOf() + MILLISECONDS_IN_A_DAY)) {
            calendar.push(date);
        }

        return calendar;
    }
}

customElements.define("ar-datepicker", Datepicker);
