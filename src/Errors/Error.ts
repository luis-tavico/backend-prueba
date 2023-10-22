export class Error {
    constructor(private line: number, private column: number, private type: string, private message: string) {
    }
}