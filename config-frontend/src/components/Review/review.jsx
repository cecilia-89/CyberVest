import './review.scss'

const Review = () => {
    return ( 
        <section className="review">
            <div>
                <div>
                    <p>
                        <strong>&#10075;</strong>
                        Cybervest takes the crown for best unmatched robo-advisory excellence in 2023
                        <strong>&#10076;</strong>
                    </p>
                    <div>
                        <h2>CBNC</h2>
                        <img src="https://res.cloudinary.com/dqdtnitie/image/upload/v1705778443/cnbc-icon_jdetuf.svg" alt="" />
                    </div>
                </div>

                <div className='comments'>
                    <div>
                        <p>The automated rebalancing feature of this robo-advisor takes the stress out of maintaining a diversified portfolio.</p>
                        <div data-client>
                            <img src="" alt="" />
                            <div>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>The automated rebalancing feature of this robo-advisor takes the stress out of maintaining a diversified portfolio.</p>
                        <div data-client>
                            <img src="" alt="" />
                            <div>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>The automated rebalancing feature of this robo-advisor takes the stress out of maintaining a diversified portfolio.</p>
                        <div data-client>
                            <img src="" alt="" />
                            <div>
                                <p>John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Review;