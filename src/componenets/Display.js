function Display(props) {
    const { type } = props;
    return <div className="display">
        <div className="desc">
            <h4>-$10 921.69</h4>
            <h3>You {type}</h3>
        </div>

        <div className="data">
            <h1>10</h1>
            <div className="space"></div>
            {type == "buy" && <a className="min">min</a>}
            <div className="wallet">
                <img src="/assets/images/eth.png" />
                <p className="name">ETH</p>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46094 6.53906C5.74219 6.84375 6.23438 6.84375 6.51562 6.53906L11.0156 2.03906C11.3203 1.75781 11.3203 1.26562 11.0156 0.984375C10.7344 0.679688 10.2422 0.679688 9.96094 0.984375L6 4.94531L2.01562 0.984375C1.73438 0.679688 1.24219 0.679688 0.960938 0.984375C0.65625 1.26562 0.65625 1.75781 0.960938 2.03906L5.46094 6.53906Z" fill="#E5E5E5" />
                </svg>
            </div>
        </div>
    </div>
}

export default Display;