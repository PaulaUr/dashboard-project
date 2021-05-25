export class Categories {
    public id: number;
    public title: string;
    public list: string[];

    constructor(id: number, title: string ,list: string[]){
        this.id = id;
        this.title = title;
        this.list = list;

    }
}
export class CategorySelected {
    public category: string;
    public itemCategory: string;
    public checked: boolean;

    constructor(category: string, itemCategory: string ,checked:boolean){
        this.category = category;
        this.itemCategory = itemCategory;
        this.checked = checked;

    }
}
