export interface GetCustomers {
    customerID: string
    companyName: string
    contactName: string
    contactTitle: string
    address: string
    city: string
    region: any
    postalCode: string
    country: string
    phone: string
    fax: string
    fechaRegistro: string
  }

  export interface AddCustomer {
    changeUser: number
    changeDate: Date
    companyName: string
    contactName: string
    contactTitle: string
    address: string
    city: string
    region: string
    postalCode: string
    country: string
    phone: string
    fax: string
    customerID: string
  }
  