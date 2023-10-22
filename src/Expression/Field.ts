import { Expression } from '../Abstract/Expression';
import { Return } from '../Abstract/Return';
import { Environment } from '../Symbol/Environment';
import { Type } from '../Symbol/Type';

export class Field extends Expression {

  constructor(line: number, column: number, private name: String, private type: Type) {
    super(line, column);
  }

  public execute(environment: Environment): Return {
    return {value: this.name, type: this.type};
  }

}