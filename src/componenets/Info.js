function Info() {
    return <div className="info">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7.7 10.5H6.3V6.3H7.7V10.5ZM7.7 4.9H6.3V3.5H7.7V4.9Z" fill="#7185AA" />
        </svg>
        <div className="text">
            <h5>1 ETH = 2031.21 ARB</h5>
            <h6>($2 030.4)</h6>
        </div>
        <div className="space"></div>
        <div className="extra">
            <img src="/assets/images/flower.png" />
            <h6>$0</h6>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.46094 6.53906C5.74219 6.84375 6.23438 6.84375 6.51562 6.53906L11.0156 2.03906C11.3203 1.75781 11.3203 1.26562 11.0156 0.984375C10.7344 0.679688 10.2422 0.679688 9.96094 0.984375L6 4.94531L2.01562 0.984375C1.73438 0.679688 1.24219 0.679688 0.960938 0.984375C0.65625 1.26562 0.65625 1.75781 0.960938 2.03906L5.46094 6.53906Z" fill="#E5E5E5" />
            </svg>
        </div>
    </div>
}

export default Info;