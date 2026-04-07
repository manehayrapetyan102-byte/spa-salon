import './Header.css'; // ՄԻացնել Css_ին;

export default function Header() {
  return (
    <header>
        <div className="box sb">
            <p>Logo</p>
            <ul className='x'>
                <li>Home</li>
                <li>About us</li>
                <li>Product</li>
                <li>Reviews</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </div>
    </header>
  )
}
