import './Reviews.css'
import nkar1 from '../pictures/peoples/mini1.png';
import nkar2 from '../pictures/peoples/mini2.png';
import nkar3 from '../pictures/peoples/mini3.png';
import nkar4 from '../pictures/peoples/mini4.png';

export default function Reviews() {
    const baza = [nkar1, nkar2, nkar3, nkar4];

    return (
        <div className='reviews'>
            <div className="box">
                <h3>Reviews</h3>
                <div className="item">
                    {
                        baza.map((elem, index) => {
                            return (
                                <div className="container">
                                    <img src={elem} alt="" />
                                    <span>Name</span>
                                    <p>
                                        Lorem Ipsum has been the industry'
                                        <br />
                                        sstandard dummy text ever since
                                        <br />
                                        the 1500s
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

