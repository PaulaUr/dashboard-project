export class Gender {
  public id: number;
  public typeOfData: string;
  public quantity: number | string;
  public gender: string;
  public icon?: string;
  public src?: string;
  public description: string;

  constructor(
    id: number,
    quantity: number | string,
    gender: string,
    typeOfData: string,
    icon: string,
    description: string,
    src: string
  ) {
    this.id = id;
    this.quantity = quantity;
    this.gender = gender;
    this.typeOfData = typeOfData;
    this.icon = icon;
    this.src = src;
    this.description = description;
  }
}
export class Age {
  public gender: string;
  public data: DataAge[];

  constructor(
    gender: string,
    data: DataAge[]
  ) {
    this.gender = gender;
    this.data = data;
  }
}

export class DataAge {
  public id: number;
  public typeOfData: string;
  public quantity: number | string;
  public gender: string;
  public label: string;
  public checked?: boolean;

  constructor(
    id: number,
    quantity: number | string,
    gender: string,
    typeOfData: string,
    label: string,
    checked: boolean
  ) {
    this.id = id;
    this.quantity = quantity;
    this.gender = gender;
    this.typeOfData = typeOfData;
    this.label = label;
    this.checked = checked;
  }
}

export interface ListGenderModified {
    id: number;
    typeOfData: string;
    quantity: number | string;
    gender: string;
    icon?: string;
    src?: string;
    description: string;
    checked?: boolean;
  }
  export interface ListAgeModified {
    gender: string,
    data: DataAge[]
  }
