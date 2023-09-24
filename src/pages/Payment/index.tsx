import {useEffect, useState} from "react";
import {Form} from "antd";
import {useSelector} from "react-redux";
import {Box, Basket, PaymentBox, SuccessModal} from "../../components";
import isFormValid from "../../utilities/functions/IsFormValid";
import TotalPrice from "../../utilities/functions/TotalPrice";
import {IPackage, IPayment, ISelectedPackages} from "../../utilities/types";
import {get, post} from "../../utilities/http";
import '../Detail/Detail.scss';
import {Navigate} from "react-router-dom";


const Payment = () => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [agreementHtml, setAgreementHtml] = useState<string>('');

    const [form] = Form.useForm();
    const selectedPackages = useSelector((state: ISelectedPackages) => state.selectedPackages.selectedItems)

    const fetch = async () => {
        const agreement = await get('payment')
        setAgreementHtml(decodeURIComponent(agreement.content))
    }

    useEffect(() => {
        fetch()
    }, [])

    const onFinish = async (values: IPayment) => {
        const getIdPackages = await selectedPackages.map((item: IPackage) => {
            return item.id
        })

        if (!isFormValid(form)) {
            const req = await post('payment', {
                ...values,
                packagesIds: getIdPackages,
                totalAmount: TotalPrice(selectedPackages),
            })

            req && setShowSuccessModal(true)
        }
    }

    return (
        selectedPackages.length >= 1 ? <>
            {!showSuccessModal ? <Form form={form} onFinish={onFinish}>
                <div className="detail-page">
                    <PaymentBox textAreaTitle="Sözleşme"
                                description={agreementHtml}
                    />
                    <Box className="box--basket">
                        <Basket disable={true}
                                title="Sepetteki Paketler"
                                data={selectedPackages}/>
                    </Box>
                </div>
            </Form> : <SuccessModal isShowModal={showSuccessModal} setIsShowModal={setShowSuccessModal}/>}
        </> : <Navigate to="/list"/>
    )
}

export default Payment;
