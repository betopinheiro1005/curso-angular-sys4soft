export class cl_operacao {
    
    // valor1 + valor2 = resultado

    public valor1: number;
    public valor2: number;
    public tipo_operacao: number;
    public resultado: number;

    public str_operacao: string;

    //============================

    constructor(){
        // criar uma operação matemática aleatória
        this.valor1 = this.GerarValorAleatorio(1,10);
        this.valor2 = this.GerarValorAleatorio(1,10);
        this.tipo_operacao = this.GerarValorAleatorio(1,4);

        switch (this.tipo_operacao) {
            // adicao
            case 1:
                this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = ';
                this.resultado = this.valor1 + this.valor2;
                break;
            // subtração    
            case 2:
                this.str_operacao = this.valor1 + " - " + this.valor2 + " = ";  
                this.resultado = this.valor1 - this.valor2;
                break;
            // multiplicação
            case 3:
                this.str_operacao = this.valor1 + " x " + this.valor2 + " = ";  
                this.resultado = this.valor1 * this.valor2;
                break;
            // divisão
            case 4:
                this.str_operacao = this.valor1 + " : " + this.valor2 + " = ";  
                this.resultado = this.valor1 / this.valor2;
                break;
            default:
                break;
        }
    }

    GerarValorAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}