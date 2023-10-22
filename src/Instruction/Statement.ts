import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Error } from '../Errors/Error'
import { errors } from '../Errors/Errors'
import { Literal } from "../Expression/Literal";
import { Environment } from '../Symbol/Environment';
import { Type } from "../Symbol/Type";

export class Statement extends Instruction {

    /*
    private type: number;
    private name: string;
    private value: Expression;
    */

    //constructor(line: number, column: number, name: string, type: number, value: Expression) {
    constructor(line: number, column: number, private variables: any[]) {
        super(line, column);
        
        /*
        this.type = type;
        this.name = name;
        this.value = value;
        */
    }

    public execute(environment: Environment) {

        for (const variable of this.variables) {
            if (variable.value == undefined ) {
                variable.value = new Literal(this.line, this.column, '', variable.type);
            }
            const val = variable.value.execute(environment)
            if (val.type == variable.type) {
                let statement = environment.saveVariable(variable.name,  val.type, val.value);
                if (!statement) {
                    throw errors.push(new Error(this.line, this.column, 'Semantico', `Declaracion: Variable '${variable.name}' ya esta declarada.`));
                }
            } else {
                errors.push(new Error(this.line, this.column, 'Semantico', `Declaracion: El tipo '${Type[val.type]}' no se puede asignar al tipo '${Type[variable.type]}'`));
            }

        }

        /*
        const val = this.value.execute(environment)

        if (val.type == this.type) {
            let statement = environment.saveVariable(this.name, val.value, val.type)
            if (!statement) {
                throw errors.push(new Error(this.line, this.column, 'Semantico', `Declaracion: Variable '${this.name}' ya esta declarada.`));
            }
        } else {
            errors.push(new Error(this.line, this.column, 'Semantico', `Declaracion: El tipo '${Type[val.type]}' no se puede asignar al tipo '${Type[this.type]}'`));
        }
        */

    }
}