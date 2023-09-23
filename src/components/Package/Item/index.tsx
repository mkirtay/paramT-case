import {FC} from "react";
import classNames from 'classnames'
import './PackageItem.scss';
import {IPackage} from "../../../utilities/types";

interface IPackageItem {
    data: IPackage,
    setSelectedIndex?: Function,
    disabled?: boolean
}

const PackageItem : FC<IPackageItem> = ({ data, setSelectedIndex, disabled }) => {

    const onClick = (id:number) => {
        setSelectedIndex && setSelectedIndex(id)
    }

    return (
        <div className={classNames('package-item', {'disabled': disabled})} onClick={() => onClick(data?.id) }>
            <span className="package-item__title">{data?.name}</span>
            <span className="package-item__amount">{data?.amount}{data?.currency}</span>
        </div>
    )
}
export default PackageItem;
