import React from 'react'

export default function Card({title, number, iconBg}) {
    return (
        <div className="card">
            <div className="card-body p-3">
                <div className="row">
                    <div className="col-8">
                        <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">{title}</p>
                            <h5 className="font-weight-bolder">
                                {number}
                            </h5>
                            <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+55%</span>
                                since yesterday
                            </p>
                        </div>
                    </div>
                    <div className="col-4 text-end">
                        <div className={`icon icon-shape bg-gradient-${iconBg} shadow-${iconBg} text-center rounded-circle`}>
                            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
