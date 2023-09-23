import React, {FC} from "react";
import classNames from "classnames";
import './Box.scss';

interface IBox {
    className?: string,
    children: React.ReactNode,
    foot?: React.ReactNode
}

const Box: FC<IBox> = ({className, foot, children}) => <div className={classNames('box', className) }>
    {children}
    {foot}
</div>

export default Box;
