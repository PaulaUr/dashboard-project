export class Data {
    public id: number;
    public quantity: number | string;
    public icon?: string;
    public src?: string;
    public description: string;

    constructor(id: number, quantity: number | string, icon: string, description: string, src: string){
        this.id = id;
        this.quantity = quantity;
        this.icon = icon;
        this.src = src;
        this.description = description;
    }
}