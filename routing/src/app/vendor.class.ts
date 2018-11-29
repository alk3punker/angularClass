export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    IsPreapproved: boolean;
    Phone: string;
    Email: string;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdatedBy: string;

    constructor () {
        this.Id = 0;
        this.IsPreapproved = false;
        this.Active = false;
    }
}
