import {FC} from "react";
import {Form} from "antd";
import {Button, PackageItem} from "../index";
import { IPackage } from "../../utilities/types";
import './Basket.scss';

interface IBasket {
    title: string,
    data?: IPackage[],
    setSelectedIndex?: Function,
    disable?: boolean,
    onFinish?: Function,
}
const Basket:FC<IBasket> = ({ title, data, setSelectedIndex, disable, onFinish }) => {
    return (
        <div className="basket">
            <span className="box__title">{title}</span>
            { data?.map((item: IPackage, key: number) => {
                return <PackageItem disabled={disable} data={item} setSelectedIndex={setSelectedIndex} />
            }) }
            <Form.Item>
                { onFinish ? <Button onClick={() => onFinish()} htmlType="button" full>Continue</Button> : <Button  htmlType="submit" full>Payment</Button> }
            </Form.Item>
        </div>
    )
}

export default Basket;
