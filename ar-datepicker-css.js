import { html } from "@polymer/lit-element"; 

export const style = html`
    <style>
        #month-and-year {
            margin: 18px 0;
            user-select: none;
        }

        #month, #year {
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.2em;
            margin: 0 14px;
            text-transform: uppercase;
        }

        .days-of-the-week {
            color: rgba(0, 0, 0, 0.54);
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.02em;
            margin: 20px 0;
            text-align: center;
            text-transform: uppercase;
            user-select: none;
        }

        .date {
            font-size: 16px;
            font-weight: 300;
            margin: 14px 0;
            text-align: center;
            user-select: none;
        }

        .date.today {
            font-weight: 400;
            font-style: italic;
        }

        .date.secondary {
            color: rgba(0, 0, 0, 0.42);
        }
    </style>
`;