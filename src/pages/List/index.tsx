import {Box, Button, Package} from "../../components";
import {get} from "../../utilities/http";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/Layout";
import './List.scss';
import {IPackage} from "../../utilities/types";
import TotalPrice from "../../utilities/functions/TotalPrice";
import { useNavigate } from "react-router-dom";


import {setSelectedPackages} from "../../store/slices/SelectedPackages";

const List = ( ) => {
    const [list, setList] = useState<IPackage[]>([])
    const [selectedItems, setSelectedItems] = useState<any>([])
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const fetch = async () => {
        const list = await get('packages')
        setList(list)
    }

    useEffect(() => {
        fetch();
    }, [])

    const onSelectPackage = (value: IPackage) => {
        console.log(value, 'selectedItems')
        setSelectedItems([...selectedItems, value]);
    }

    const nextStep = () => {
        dispatch(setSelectedPackages(selectedItems))
        navigate("/detail");
    }


    const BoxActions = () => {
        return <div className="box__actions">
            <span>Seçilen Paket Tutarı: {TotalPrice(selectedItems)}</span>
            <Button onClick={nextStep} htmlType="button">Continue</Button>
        </div>
    }


    return (
        <Layout>
            <div className="list-page">
                <Box foot={<BoxActions />}>
                    <div className="box__content">
                        {list && list?.map((item: any, key: number) => {
                            return <Package name={item?.name}
                                            details={item?.details}
                                            tags={item?.tags}
                                            amount={item?.amount}
                                            currency={item?.currency}
                                            id={item?.id}
                                            key={`package-${key}`}
                                            onClick={() => onSelectPackage(item)}
                            />
                        }) }
                    </div>
                </Box>
            </div>
        </Layout>
    )
}

export default List;
