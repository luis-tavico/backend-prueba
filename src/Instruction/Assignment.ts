import { Expression } from '../Abstract/Expression';
import { Instruction } from '../Abstract/Instruction';
import { Error } from '../Errors/Error'
import { errors } from '../Errors/Errors'
import { Environment } from '../Symbol/Environment';
import { Type } from '../Symbol/Type';

export class Assignment extends Instruction {
    constructor(line: number, column: number, private id: string, private value: Expression) {
        super(line, column)        
    }

    public getId() {
        return this.id;
    }

    public getValue(environment : Environment) {
        return this.value.execute(environment);
    }

    public execute(environment: Environment) {
        const search_variable: any = environment.getVariable(this.id)
        if (search_variable) {
            const value = this.value.execute(environment);
            if (search_variable.type == value.type) {
                environment.updateVariable(this.id, value.value)
            } else {
                errors.push(new Error(this.line, this.column, 'Semantico', `Asignacion: No se puede asignar la variable de tipo ${Type[search_variable.type]} a ${Type[value.type]}`))
            }
        } else {
            errors.push(new Error(this.line, this.column, 'Semantico', `Asignacion: No se encuentra declarada la variable '${this.id}'`))
        }
    }

}