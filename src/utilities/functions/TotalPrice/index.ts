import {IPackage} from "../../types";

const TotalPrice = (array: IPackage[]) => {
    const getPrices = array?.map((item: IPackage) => {
        return item.amount;
    })

    if (getPrices.length === 0) {
        return 0;
    }

    let getTotalPrice = getPrices?.reduce(function (previousValue:number, currentValue:number) {
        return previousValue + currentValue;
    }, 0);

    return getTotalPrice;
}

export default TotalPrice;
