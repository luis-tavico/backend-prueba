export class Singleton {

    private static instance: Singleton

    private consola: string = ""
    private errores: any[] = []
    
    constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public addConsole(data: string) {
        this.consola += data
    }
    public getConsole(): string {
        return this.consola
    }
    public cleanConsole(): void {
        this.consola = ''
    }


    public addErrors(data: any) {
        this.errores.push(data)
    }
    public getErrors(): any[] {
        return this.errores
    }
    public cleanErrors(): void {
        this.errores = []
    }

}