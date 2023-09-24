import React, {FC, useRef, useState} from "react";
import classNames from 'classnames'
import {Ticket} from "../index";
import './Package.scss';

import {IPackage} from "../../utilities/types";

const Package:FC<IPackage> = ({ imagePath = '/images/image.png', name, details, tags, amount, currency, id, onClick, ...props }) => {
    const ref = useRef(null);
    const [selected, setSelected] = useState(false)

    const onSelectPackage = () => {
        setSelected(!selected)
        onClick()
    }

    return (
        <div ref={ref} className={classNames('package', { 'package--selected': selected })} onClick={onSelectPackage}>
            <img className="package__image" src={imagePath} alt="Package Image"/>
            <div className="package__content">
                <div className="package__content__head">
                    <span className="package__strong">{name}</span>
                    <span className="package__strong">{amount}{currency}</span>
                </div>
                <div className="package__content__body">
                    { details.map((item: string, key: number) => {
                        return (
                            <span key={`body-${key}`}>{item}</span>
                        )
                    }) }
                </div>
                <div className="package__content__foot">
                    { tags.map((item: string, index: number) => {
                        return (
                            <Ticket text={item} key={`ticket-${index}`} />
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Package;
