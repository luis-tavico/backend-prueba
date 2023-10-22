import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Field } from '../Expression/Field';

export class Add extends Instruction {

  constructor(line: number, column: number, private name: String, private columns: Field[]) {
    super(line, column);
  }

  public execute(environment: Environment) {
    environment.addColumn(this.name.toString(), this.columns);
  }

}