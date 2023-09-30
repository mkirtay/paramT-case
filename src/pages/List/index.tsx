import {Box, Button, Package} from "../../components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './List.scss';
import {IPackage} from "../../utilities/types";
import TotalPrice from "../../utilities/functions/TotalPrice";
import { useNavigate } from "react-router-dom";
import { allPackagesAction } from "../../store/slices/AllPackages/actions"
import { selectedPackageAction } from "../../store/slices/SelectedPackages2/actions"

interface IPackagesStore {
    allPackages: {
        packages: IPackage[]
    }
}

const List = ( ) => {
    const getPackages = useSelector((state: IPackagesStore) => state?.allPackages?.packages)

    const [selectedItems, setSelectedItems] = useState<IPackage[]>([])
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getAllPackages = async () => {
        await dispatch(allPackagesAction())
    }

    useEffect(() => {
        getAllPackages()
    }, [])

    const onSelectPackage = (value: IPackage) => {
        setSelectedItems([...selectedItems, value]);
    }

    const nextStep = async () => {
        const req = await dispatch(selectedPackageAction(selectedItems))

        if (req?.meta?.requestStatus === 'fulfilled') {
            navigate('/detail')
        }
    }


    const BoxActions = () => {
        return <div className="box__actions">
            <span>Seçilen Paket Tutarı: {TotalPrice(selectedItems)}</span>
            <Button onClick={nextStep} htmlType="button">Continue</Button>
        </div>
    }


    return (
        <div className="list-page">
            <Box foot={<BoxActions />}>
                <div className="box__content">
                    {getPackages && getPackages?.map((item: IPackage, key: number) => {
                        return <Package name={item?.name}
                                        details={item?.details}
                                        tags={item?.tags}
                                        amount={item?.amount}
                                        currency={item?.currency}
                                        id={item?.id}
                                        key={`list-package-${key}`}
                                        onClick={() => onSelectPackage(item)}
                        />
                    }) }
                </div>
            </Box>
        </div>
    )
}

export default List;
