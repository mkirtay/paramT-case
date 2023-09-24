import {Form} from "antd";
import {FC} from "react";
import {Box, Input, MaskInput} from "../../index";
import '../DetailBox.scss';

interface IDetailBox {
    textAreaTitle: string,
    description: string
}

const DetailBox:FC<IDetailBox> = ({textAreaTitle, description}) => {
    return (
        <Box className="detail-box">
            <div className="box__content">
                <div className="detail-box__head">
                    <span className="box__title">Kart Bilgileri</span>
                    <div className="form">
                        <Form.Item
                            name="cardHolderName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your card holder name!",
                                }
                            ]}
                        >
                            <Input label="Name Surname"/>
                        </Form.Item>
                        <Form.Item
                            name="cardNumber"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your card number!",
                                }
                            ]}
                        >
                            <MaskInput mask='0000 0000 0000 0000' label="Card Number" />
                        </Form.Item>
                        <Form.Item
                            name="expireDate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your expire date!",
                                }
                            ]}
                        >
                            <MaskInput mask="00/00" label="Expire Date" />
                        </Form.Item>
                        <Form.Item
                            name="cvv"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your cvv!",
                                }
                            ]}
                        >
                            <Input maxLength={3} type="password" label="CVV"/>
                        </Form.Item>
                    </div>
                </div>
                <div className="detail-box__description">
                    <span className="box__title">{textAreaTitle}</span>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </Box>
    )
}

export default DetailBox;
