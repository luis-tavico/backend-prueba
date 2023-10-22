import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Expression } from '../Abstract/Expression';

export class RenameColumn extends Instruction {

  constructor(line: number, column: number, private name_table: String, private name_column: String, private new_name_column: Expression) {
    super(line, column);
  }

  public execute(environment: Environment) {
    const new_name_column = this.new_name_column.execute(environment);
    environment.renameColumn(this.name_table.toString(), this.name_column.toString(), new_name_column);
  }

}