import {useState} from "react";
import {Form} from "antd";
import {useSelector} from "react-redux";
import {Box, Basket, PaymentBox, SuccessModal} from "../../components";
import Layout from "../../components/Layout";
import isFormValid from "../../utilities/functions/IsFormValid";
import TotalPrice from "../../utilities/functions/TotalPrice";
import {IPackage} from "../../utilities/types";
import {post} from "../../utilities/http";
import '../Detail/Detail.scss';


const Payment = () => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

    const [form] = Form.useForm();
    const selectedPackages = useSelector((state: any) => state.selectedPackages.selectedItems)

    const onFinish = async (values: any) => {

        const getIdPackages = await selectedPackages.map((item: IPackage) => {
            return item.id
        })
        if (!isFormValid(form)) {
            console.log(form.getFieldsValue(), 'valss')
            const req = await post('signup', {
                ...values,
                packagesIds: getIdPackages,
                totalAmount: TotalPrice(selectedPackages),
            })
            setShowSuccessModal(true)

            console.log(req, 'req')
        }
    }

    console.log(selectedPackages, 'selectedpackages')
    return (
        <Layout>
            {!showSuccessModal ? <Form form={form} onFinish={onFinish}>
                <div className="detail-page">
                    <PaymentBox textAreaTitle="Kart"
                                parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio, semper id mauris nec, ornare luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec interdum justo pulvinar nec. Aenean quam mauris, fermentum eu iaculis non, egestas a lorem.Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at egestas ut, dapibus et turpis. Duis non enim sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id pharetra purus blandit vitae. Etiam ut lobortis tortor, sed efficitur tortor. Duis facilisis quam sem, quis pulvinar erat aliquet sit amet. Aliquam velit orci, pellentesque eget varius finibus, sodales quis dolor."/>
                    <Box className="box--basket">
                        <Basket disable={true}
                                title="Sepetteki Paketler"
                                data={selectedPackages}/>
                    </Box>
                </div>
            </Form> : <SuccessModal isShowModal={showSuccessModal} setIsShowModal={setShowSuccessModal}/>}
        </Layout>
    )
}

export default Payment;
