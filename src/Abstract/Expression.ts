
import { Environment } from "../Symbol/Environment";
import { Type } from "../Symbol/Type";
import { types } from '../Util/Types';
import { Return } from "./Return";

export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment): Return;

    public dominantType(type_1: Type, type_2: Type): Type {
        return types[type_1][type_2];
    }
    
}