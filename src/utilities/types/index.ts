export interface IPackage {
    imagePath?: string,
    name: string,
    details: string[],
    tags: string[],
    amount: number,
    currency: string,
    id: number,
    onClick?: any
}


export interface IPayment {
    cardHolderName: string
    packageIds: string[],
    cardNumber: string,
    expireDate: string,
    cvv: string,
    totalAmount: number
}

export interface ISelectedPackages {
    selectedPackages: {
        selectedItems: []
    }
}
