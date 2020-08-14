export class CompanyInfo {
    // Name:string;
    // Logo:string;
    // Services:string[];
    constructor(public Name:string, 
        public Logo:string,
         public Services:string[],
         public Captail?:number,public EstablishDate?:Date){
        // this.Name=name;
        // this.Logo=logo;
        // this.Services=services;
    }
}
