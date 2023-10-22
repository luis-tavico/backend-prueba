import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Error } from "../Errors/Error"
import { Environment } from "../Symbol/Environment";
import { Type } from "../Symbol/Type";

export enum RelationalOption {
    EQUAL,        //0
    NOT_EQUAL,    //1
    LESS_THAN,    //2
    LESS_EQUAL,   //3
    GREATER_THAN, //4
    GREATER_EQUAL //5
}

export class Relational extends Expression {

    constructor( line: number, column: number, private left: Expression, private type: RelationalOption, private right: Expression) {
        super(line, column);
    }

    public getLeftValue(environment : Environment) {
        return this.left.execute(environment);
    }

    public getType() {
        return this.type;
    }

    public getRightValue(environment : Environment) {
        return this.right.execute(environment);
    }
    
    public execute(environment : Environment): Return {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result: Return;

        if (this.type === RelationalOption.EQUAL) {
            result = { value: (leftValue.value == rightValue.value), type: Type.BOOLEAN };
        }else if (this.type === RelationalOption.NOT_EQUAL) {
            result = { value: (leftValue.value != rightValue.value), type: Type.BOOLEAN };
        } else if (this.type === RelationalOption.LESS_THAN) {
            result = { value: (leftValue.value < rightValue.value), type: Type.BOOLEAN };
        } else if (this.type === RelationalOption.LESS_EQUAL) {
            result = { value: (leftValue.value <= rightValue.value), type: Type.BOOLEAN };
        } else if (this.type === RelationalOption.GREATER_THAN) {
            result = { value: (leftValue.value > rightValue.value), type: Type.BOOLEAN };
        } else if (this.type === RelationalOption.GREATER_EQUAL) {
            result = { value: (leftValue.value >= rightValue.value), type: Type.BOOLEAN };
        } else {
            result = { value: false, type: Type.BOOLEAN };
        }
        return result;
    }
}