import {Form} from "antd";
import {FC} from "react";
import {Box, Input, MaskInput, TextArea} from "../../index";
import '../DetailBox.scss';

interface IDetailBox {
    textAreaTitle: string,
    parag: string,
}

const DetailBox:FC<IDetailBox> = ({textAreaTitle, parag}) => {

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
                                }
                            ]}
                        >
                            <MaskInput mask="000" placeholder="CVV" label="CVV" />
                        </Form.Item>
                    </div>
                </div>
                <div className="detail-box__description">
                    <span className="box__title">{textAreaTitle}</span>
                    <TextArea value={parag} />
                </div>
            </div>
        </Box>
    )
}

export default DetailBox;
