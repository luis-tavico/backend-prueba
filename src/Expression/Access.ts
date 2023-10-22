import { Expression } from "../Abstract/Expression";
import { Return } from "../Abstract/Return";
import { Environment } from "../Symbol/Environment";

export class Access extends Expression {

    constructor(line: number, column: number, private value: string, private type: number) {
        super(line, column);
    }

    public execute(environment: Environment): Return {

        const value = environment.getVariable(this.value);

        if (value === null || value === undefined) {
            //return { value: null, type: this.type };
            return { value: this.value, type: this.type };
        } else {
            if (this.type === 1) {
                environment.updateVariable(this.value, (value.value) + 1)
                return { value: (value.value) + 1, type: this.type };
            } else if (this.type === 2) {
                environment.updateVariable(this.value, (value.value) - 1)
                return { value: (value.value) + 1, type: this.type };
            } else if (this.type == 3) {
                return { value: (value.value), type: this.type };

            } else if (this.type == 4) {
                return { value: (value.value), type: this.type };
            }
            return { value: value.value, type: value.type };
        }
    }
}