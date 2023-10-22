import { Type } from "./Type";

export class Symbol {
    public name: string;
    public type: Type;
    public value: any;

    constructor(name: string, type: Type, value: any) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}