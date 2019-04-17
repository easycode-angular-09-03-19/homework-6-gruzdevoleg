export interface User {
  id: number;
  name: string;
  userName: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  company: {
    name: string;
    bs: string;
    catchPhrase: string;
  }
  phone: string;
  email: string;
  website: string;
}