import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Expression } from '../Abstract/Expression';

export class DropColumn extends Instruction {

  constructor(line: number, column: number, private name_table: String, private name_column: Expression) {
    super(line, column);
  }

  public execute(environment: Environment) {
    const name_column = this.name_column.execute(environment);
    environment.dropColumn(this.name_table.toString(), name_column);
  }

}