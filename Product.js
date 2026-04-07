import './Product.css';
import jpit1 from '../pictures/all/1.png';
import jpit2 from '../pictures/all/2.png';
import jpit3 from '../pictures/all/3.png';
import jpit4 from '../pictures/all/4.png';
import jpit5 from '../pictures/all/5.png';
import jpit6 from '../pictures/all/6.png';
import jpit7 from '../pictures/all/7.png';
import jpit8 from '../pictures/all/8.png';

export default function Product() {
    const baza = [jpit1, jpit2, jpit3, jpit4, jpit5, jpit6, jpit7, jpit8];
    // 
    return (
        <div className='product'>
            <div className="box">
                <h3>Products</h3>
                <div className="carcas">
                    {
                        baza.map((elem, index) => {
                            return (
                                <div className="block">
                                    <img src={elem} alt="" />
                                    <span>Lorem Ipsum</span>
                                    <p>
                                        Lorem Ipsum is not
                                        <br />
                                        simply random text
                                    </p>
                                    <span>50$</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
