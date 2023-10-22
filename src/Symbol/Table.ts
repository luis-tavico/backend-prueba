import { Return } from "../Abstract/Return";

export class Table {
    public name: string;
    public columns : Return[];
    public data: { [key: string]: any }[];

    constructor(name: string, columns: Return[]) {
        this.name = name;
        this.columns = columns;
        this.data = [];
    }

}