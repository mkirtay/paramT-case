import {Modal} from 'antd';
import {FC} from "react";
import './SuccessModal.scss';
interface ISuccessModal {
    isShowModal: boolean,
    setIsShowModal: Function,
}

const SuccessModal:FC<ISuccessModal> = ({isShowModal, setIsShowModal}) => {
    return (
        <div>
            <Modal closeIcon={<i className="icon-cross"></i>}
                   open={isShowModal}
                   onCancel={() => setIsShowModal(false)}
                   footer={false}>
                <i className="icon-border-check"></i>
                <span className="ant-modal__title">Başarıyla Tamamlandı!</span>
            </Modal>
        </div>
    )
}

export default SuccessModal;
