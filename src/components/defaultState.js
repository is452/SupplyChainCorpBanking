
export const defaultState = {
    editMode: false,
    lang: 'en',
    history: [],
    provider: {
      companyName: 'CompanyName Ltd',
      name: 'FirstName LastName',
      role: 'Director',
      addressLine1: '9000 House Name',
      addressLine2: 'City',
      addressLine3: 'PostCode',
      addressLine4: 'Country',
      companyRegNo: '10203040',
      companyVatNo: '100200300',
      billingBankAccountIban: 'Iban',
      billingBankAccountBic: 'Bic',
      billingBankAccountNo: 'Account no.',
      billingBankAccountSortCode: 'Sort code',
    },
    customer: {
      companyName: 'CompanyName Ltd',
      name: 'FirstName LastName',
      role: 'Director',
      addressLine1: '9000 House Name',
      addressLine2: 'City',
      addressLine3: 'PostCode',
      addressLine4: 'Country',
      companyRegNo: '10203040',
      companyVatNo: '100200300',
    },
    invoiceMeta: {
      invoiceDate: '05/11/2017',
      invoiceSeries: 'EXP-GB-',
      invoiceNo: '10001',
      currency: '£',
      brandName: 'Company',
      brandSubName: 'Name',
      vatRate: '20',
    },
    invoiceEntries: [
      {
        dateProvided: '04/11/2017',
        description: 'Consultation',
        qty: '1',
        qtyType: 'h',
        rate: '200',
        total: '200',
      }
    ]
  }