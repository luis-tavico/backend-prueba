import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Error } from "../Errors/Error"
import { Environment } from "../Symbol/Environment";
import { Type } from "../Symbol/Type";

export class Literal extends Expression {

    constructor(line: number, column: number, private value: any, private type: number) {
        super(line, column);
    }

    public execute(environment: Environment): Return {

        if (this.type == Type.INT) {
            return { value: Number(this.value), type: Type.INT };
        }else if (this.type == Type.DOUBLE) {
            return { value: parseFloat(this.value), type: Type.DOUBLE };
        }else if (this.type == Type.DATE) {
            return { value: (new Date(this.value)).toISOString().split('T')[0], type: Type.DATE };
        }else if (this.type === Type.VARCHAR) {
            const regex = /^\"/g;
            const regex2 = /\"$/g;
            this.value = this.value.replace(regex, "").replace(regex2, "")
            let string = this.value.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\"/g, "\"").replace(/\\/g, "\\");
            return { value: string, type: Type.VARCHAR };
        }else if (this.type === Type.BOOLEAN) {
            if (this.value.toLowerCase() === 'true') {
                return { value: true, type: Type.BOOLEAN };
            }
            return { value: false, type: Type.BOOLEAN };
        }else if (this.type === Type.NEGATIVE) {
            if (this.value.type === Type.INT) {
                this.value.value = Number(this.value.value) * -1
            } else if (this.value.type === Type.DOUBLE) {
                this.value.value = parseFloat(this.value.value) * -1
            } else {
                throw new Error(this.line, this.column, 'Semantico', `No se puede negar el tipo: ${Type[this.value.type]}`);
            }
            return { value: this.value.value, type: this.value.type };
        }else if (this.type === Type.NEGATIVE) {
            const value = environment.getVariable(this.value)
            return { value: null, type: Type.NULL };
        }else if (this.type === Type.NEGATIVE) {
            return { value: null, type: Type.NULL };
        }else if (this.type === Type.NULL) {
            return { value: null, type: Type.NULL };
        }else {
            return { value: null, type: Type.NULL };
        }

    }
}