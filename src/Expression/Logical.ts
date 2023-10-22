import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Error } from "../Errors/Error"
import { Environment } from "../Symbol/Environment";
import { Type } from "../Symbol/Type";

export enum LogicalOption {
    AND,
    OR,
    NOT
}

export class Logical extends Expression {

    constructor( line: number, column: number, private left: Expression, private type: LogicalOption, private right: Expression) {
        super(line, column);
    }

    public execute(environment : Environment): Return {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result: Return;

        if (this.type === LogicalOption.AND) {
            result = { value: (leftValue.value && rightValue.value), type: Type.BOOLEAN };
        }else if (this.type === LogicalOption.OR) {
            result = { value: (leftValue.value || rightValue.value), type: Type.BOOLEAN };
        }else if (this.type === LogicalOption.NOT) {
            result = { value: (!leftValue.value), type: Type.BOOLEAN };
        }  else {
            result = { value: false, type: Type.BOOLEAN };
        }
        return result;
    }
}