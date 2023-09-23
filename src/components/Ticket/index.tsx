import {FC} from "react";
import './Ticket.scss';
interface ITicket {
    text: string
}
const Ticket:FC<ITicket> = ({ text }) => (
    <div className="ticket">
        <span>{text}</span>
    </div>
)


export default Ticket;
