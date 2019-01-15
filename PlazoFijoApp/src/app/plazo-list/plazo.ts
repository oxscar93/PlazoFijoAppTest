export class Plazo{
    

    public tasa:number;
    public plazo:number;
    public banco:string;
    public id:number;

    constructor(id: number, plazo: number, tasa: number) {
            this.id = id;
            this.tasa = tasa;
            this.plazo = plazo
        }
    }

export class PlazoFijo{

    public amount: number;
    public plazoInfo: any;
    public banco:string;
    public id:number;

    constructor() {
          
        }
}

export class Ganancia{

    public amount: number;
    public diferencia:number;

    constructor(amount: number, diferencia: number) {  
        this.amount = amount;
        this.diferencia = diferencia;       
    }
}
    
    