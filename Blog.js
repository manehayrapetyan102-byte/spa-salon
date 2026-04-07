import './Blog.css'
import nkar1 from '../pictures/peoples/woman1.png';
import nkar2 from '../pictures/peoples/woman2.png';
import nkar3 from '../pictures/peoples/woman3.png';

export default function Blog() {
    const baza = [nkar1, nkar2, nkar3];
    // const baza = new Array(3).fill('nkar1','nkar2','nkar3')

    return (
        <div className='blog'>
            <div className="box">
                <h3>Blog</h3>
                <div className="item">
                    {
                        baza.map((elem, index) => {
                            return (
                                <div className="container">
                                    <img src={elem} alt="" />
                                    <span>Post 1 Headline</span>
                                    <p>
                                        It has roots in a piece of classical
                                        <br />
                                        Latin literature from 45 BC
                                    </p>
                                    <p>Sat, march 28, 2024</p>
                                    <button>Read More</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

