import {useEffect, useState} from "react";
import {Form} from "antd";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box, Basket, PaymentBox, SuccessModal} from "../../components";
import isFormValid from "../../utilities/functions/IsFormValid";
import TotalPrice from "../../utilities/functions/TotalPrice";
import {IPackage, IPayment, ISelectedPackages} from "../../utilities/types";
import {agreementAction} from "../../store/slices/Agreement/actions";
import {paymentAction} from "../../store/slices/Payment/actions";
import '../Detail/Detail.scss';

const Payment = () => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const selectedPackages = useSelector((state: ISelectedPackages) => state?.selectedPackages?.selectedItems)
    const agreementHtml = useSelector((state: any) => state?.agreement?.file)

    const getAgreement = async () => {
        await dispatch(agreementAction())
    }

    useEffect(() => {
        getAgreement()
    }, [])

    const onFinish = async (values: IPayment) => {
        const getIdPackages = await selectedPackages.map((item: IPackage) => {
            return item.id
        })

        if (!isFormValid(form)) {
            const req = await dispatch(paymentAction({
                ...values,
                packagesIds: getIdPackages,
                totalAmount: TotalPrice(selectedPackages),
            }))

            req?.payload && setShowSuccessModal(true)
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
