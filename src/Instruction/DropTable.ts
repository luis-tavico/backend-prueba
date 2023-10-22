import { Environment } from '../Symbol/Environment';
import { Instruction } from '../Abstract/Instruction';
import { Table } from '../Symbol/Table';
import { Field } from '../Expression/Field';

export class DropTable extends Instruction {

  constructor(line: number, column: number, private name: String, private fields: Field[]) {
    super(line, column);
  }

  public execute(environment: Environment) {
    environment.dropTable(this.name.toString());
  }

}