import {Box, Ticket, TextArea} from "../index";
import {FC, useEffect, useState} from "react";
import './DetailBox.scss';
import {IPackage} from "../../utilities/types";

interface IDetailBox {
    textAreaTitle: string,
    parag: string,
    selectedIndex: number,
    data: IPackage[]
}

const DetailBox:FC<IDetailBox> = ({textAreaTitle, parag, data, selectedIndex}) => {
    const [detailPageData, setDetailPageData] = useState<IPackage>(data[0])

    useEffect(() => {
        setTimeout(() => {
            setDetailPageData(data[0])
        }, 10)
    }, [])

    useEffect(() => {
        const newData : IPackage | undefined = data?.find((item: IPackage) => item.id === selectedIndex)
        newData && setDetailPageData(newData)
    }, [selectedIndex])

    return (
        <Box className="detail-box">
            <div className="box__content">
                <div className="detail-box__head">
                    <span className="box__title">{detailPageData?.name} | <strong>{detailPageData?.amount}{detailPageData?.currency}</strong></span>
                    <img className="header__logo" src="images/image-2.png" alt="Detail Img"/>
                </div>
                <div className="detail-box__description">
                    <div className="detail-box__description__head">
                        <span className="box__title">{textAreaTitle}</span>
                        <div>
                            { detailPageData?.tags.map((item:string, key: number) => {
                                return <Ticket key={`detaik-box-ticket-${key}`} text={item}></Ticket>
                            }) }
                        </div>
                    </div>
                    <TextArea value={parag} />
                </div>
            </div>
        </Box>
    )
}

export default DetailBox;
