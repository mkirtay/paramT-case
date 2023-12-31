import {Form} from "antd";
import {Box, Input, Button} from "../../components/index";
import './Login.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { login } from "../../store/slices/Auth/actions"

interface IFormValues {
    fullName: string,
    email: string
}
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values: IFormValues) => {
        const req = await dispatch(login(values))

        if (req.payload) {
            await navigate("/list");
        }
    }

    return <div className="login-layout">
        <Box>
            <Form
                className="form"
                name="login"
                onFinish={onFinish}
            >
                <Form.Item
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input label="Name Surname"/>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}>
                    <Input label="E-mail"/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" full>Continue</Button>
                </Form.Item>
            </Form>
        </Box>
    </div>
}

export default Login;
