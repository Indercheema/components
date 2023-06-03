
function Header() {
  return (
    <header>
    <div className="container flexbox">
        <div className="title">
            <h1>Web Development</h1>
        </div>
        <nav className="navmenu">
            <ul>
                <li className="mobile-menu"><i class="fa-solid fa-bars"></i></li>
                <li className="menu underline"><a href="index.html">Courses</a></li>
                <li className="menu"><a href="#row">Apply</a></li>
                <li className="menu"><a href="about.html">About us</a></li>
                <li className="menu"><a href="about.html">My Account</a></li>
            </ul>
        </nav>
    </div>
</header>
  )
}

export default Header