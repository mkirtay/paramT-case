import { LoginPage, List, DetailPage, PaymentPage } from "../../pages";

interface IRoutesList {
    path: string,
    access: boolean,
    component: () => JSX.Element
}

const routesList : IRoutesList[]  = [
    {
        path: "/login",
        component: LoginPage,
        access: false
    },
    {
        path: "/list",
        component: List,
        access: true
    },
    {
        path: "/detail",
        component: DetailPage,
        access: true
    },
    {
        path: "/payment",
        component: PaymentPage,
        access: true
    },
]

export { routesList }
