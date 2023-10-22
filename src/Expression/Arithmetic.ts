import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Error } from "../Errors/Error"
import { Environment } from "../Symbol/Environment";
import { Type } from "../Symbol/Type";

export enum ArithmeticOption {
    PLUS,
    MINUS,
    TIMES,
    DIVIDE,
    MODULUS
}

export class Arithmetic extends Expression {

    constructor( line: number, column: number, private left: Expression, private type: ArithmeticOption, private right: Expression) {
        super(line, column);
    }

    public execute(environment : Environment): Return {

        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result: Return;
        let dominant_type = this.dominantType(leftValue.type, rightValue.type);

        if (this.type === ArithmeticOption.PLUS) {
            if (dominant_type === Type.INT) {
                result = { value: (Number(leftValue.value) + Number(rightValue.value)), type: Type.INT };
            } else if (dominant_type === Type.DOUBLE) {
                result = { value: (parseFloat(leftValue.value) + parseFloat(rightValue.value)).toFixed(2), type: Type.DOUBLE };
            } else if (dominant_type === Type.DATE) {
                if (leftValue.type == 0) {
                    let date_result = new Date(rightValue.value);
                    date_result.setDate(date_result.getDate() + leftValue.value);
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 0) {
                    let date_result = new Date(leftValue.value);
                    date_result.setDate(date_result.getDate() + rightValue.value);
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (leftValue.type == 1) {
                    let date_result = new Date(rightValue.value);
                    date_result.setTime(date_result.getTime() + (leftValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 1) {
                    let date_result = new Date(leftValue.value);
                    date_result.setTime(date_result.getTime() + (rightValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (leftValue.type == 3) {
                    let date_result = new Date(rightValue.value);
                    //date_result.setTime(date_result.getTime() + (leftValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 3) {
                    let date_result = new Date(leftValue.value);
                    //date_result.setTime(date_result.getTime() + (rightValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else {
                    throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
                }
            } else if (dominant_type == Type.VARCHAR) {
                result = { value: (leftValue.value.toString() + rightValue.value.toString()), type: Type.VARCHAR }
            } else {
                throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
            }
        } else if (this.type == ArithmeticOption.MINUS) {
            if (dominant_type === Type.INT) {
                result = { value: (Number(leftValue.value) - Number(rightValue.value)), type: Type.INT };
            } else if (dominant_type === Type.DOUBLE) {
                result = { value: (parseFloat(leftValue.value) - parseFloat(rightValue.value)).toFixed(2), type: Type.DOUBLE };
            } else if (dominant_type === Type.DATE) {
                if (leftValue.type == 0) {
                    let date_result = new Date(rightValue.value);
                    date_result.setDate(date_result.getDate() - leftValue.value);
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 0) {
                    let date_result = new Date(leftValue.value);
                    date_result.setDate(date_result.getDate() - rightValue.value);
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (leftValue.type == 1) {
                    let date_result = new Date(rightValue.value);
                    date_result.setTime(date_result.getTime() - (leftValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 1) {
                    let date_result = new Date(leftValue.value);
                    date_result.setTime(date_result.getTime() - (rightValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (leftValue.type == 3) {
                    let date_result = new Date(rightValue.value);
                    //date_result.setTime(date_result.getTime() - (leftValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else if (rightValue.type == 3) {
                    let date_result = new Date(leftValue.value);
                    //date_result.setTime(date_result.getTime() - (rightValue.value*24*60*60*1000));
                    result = { value: date_result.toISOString().split('T')[0], type: Type.DATE }
                } else {
                    throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
                }
            } else if (dominant_type == Type.VARCHAR) {
                result = { value: (leftValue.value.toString().replace(rightValue.value.toString(), "")), type: Type.VARCHAR }
            } else {
                throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
            }
        } else if (this.type == ArithmeticOption.TIMES) {
            if (dominant_type === Type.INT) {
                result = { value: (Number(leftValue.value) * Number(rightValue.value)), type: Type.INT };
            } else if (dominant_type === Type.DOUBLE) {
                result = { value: (parseFloat(leftValue.value) * parseFloat(rightValue.value)).toFixed(2), type: Type.DOUBLE };
            } else {
                throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
            }
        } else if (this.type == ArithmeticOption.DIVIDE) {
            if (dominant_type === Type.INT) {
                result = { value: (Number(leftValue.value) / Number(rightValue.value)), type: Type.INT };
            } else if (dominant_type === Type.DOUBLE) {
                result = { value: (parseFloat(leftValue.value) / parseFloat(rightValue.value)).toFixed(2), type: Type.DOUBLE };
            } else {
                throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
            }
        } else if (this.type == ArithmeticOption.MODULUS) {
            if (dominant_type === Type.INT) {
                result = { value: (Number(leftValue.value) % Number(rightValue.value)), type: Type.INT };
            } else if (dominant_type === Type.DOUBLE) {
                result = { value: (parseFloat(leftValue.value) % parseFloat(rightValue.value)).toFixed(2), type: Type.DOUBLE };
            } else {
                throw new Error(this.line, this.column, 'Semantico', 'No se puede operar: ' + Type[leftValue.type] + ' ' + Type[rightValue.type]);
            }
        } else {
            result = { value: '', type: Type.BOOLEAN }
        }
        return result;
    }
}