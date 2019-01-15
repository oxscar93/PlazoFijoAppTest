export class BancoTasa{
    
    public banco:string;
    public plazo30:string;
    public plazo60:string;
    public plazo90:string;
    public plazo365:string;

    constructor(banco: string, plazo30: string, plazo60: string, plazo90: string, plazo365: string) {
            this.banco = banco;
            this.plazo30 = plazo30;
            this.plazo60 = plazo60;
            this.plazo90 = plazo90;
            this.plazo365 = plazo365;
        }
    }
    
    