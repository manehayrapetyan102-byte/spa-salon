import './About.css';

export default function About() {
    const x = new Array(5).fill();
    // let k = 'Sofi';

    return (
        <div className='about x'>
            <div className="box fcs">
                <h3>About us</h3>
                <div className="carcas">
                    <div className="images sb">
                        {
                            x.map((elem, index) => {
                                return (
                                    <div className="detal" key={index} style={{ backgroundPositionX: `${index * 25}%` }}></div>
                                )
                            })
                        }
                    </div>
                    <div className="info">
                        <h3>Skin care is important for everyone</h3>
                        <p>Skin care is a part of the treatment of wound healing, radiation therapy andsome medications. Skin care or skincare is a range of practices that support skin integrity, enhance its appearance, andrelieve skin conditions.</p>
                        <p>hey can include nutrition, avoidanceof excessive sun exposure and appropriate use of emollients. Skin care is a routine daily procedure in many settings, such as skin that is either too dry or too moist, and prevention of dermatitsand prevention of skin injuries.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
