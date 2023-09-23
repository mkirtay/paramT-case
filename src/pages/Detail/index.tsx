import {Box, Basket, DetailBox} from "../../components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import './Detail.scss';


const List = ( ) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const selectedPackages = useSelector((state:any) => state.selectedPackages.selectedItems)
    const navigate = useNavigate();

    const nextStep = () => {
        navigate("/payment");
    }

    return (
        <Layout>
            <div className="detail-page">
                <DetailBox textAreaTitle="Detay Açıklama"
                           data={selectedPackages}
                           selectedIndex={selectedIndex}
                           parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio, semper id mauris nec, ornare luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec interdum justo pulvinar nec. Aenean quam mauris, fermentum eu iaculis non, egestas a lorem.Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at egestas ut, dapibus et turpis. Duis non enim sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id pharetra purus blandit vitae. Etiam ut lobortis tortor, sed efficitur tortor. Duis facilisis quam sem, quis pulvinar erat aliquet sit amet. Aliquam velit orci, pellentesque eget varius finibus, sodales quis dolor." />
                <Box className="box--basket">
                    <Basket title="Sepetteki Paketler"
                            data={selectedPackages}
                            setSelectedIndex={setSelectedIndex}
                            onFinish={nextStep}
                    />
                </Box>
            </div>
        </Layout>
    )
}

export default List;
