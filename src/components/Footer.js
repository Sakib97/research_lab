const Footer = () => {
    return ( 
    <div className="container">
        <hr />
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ fontSize: '14px', color: 'grey' }}>
                © {new Date().getFullYear()} AUST ECE Research Group. All rights reserved.
            </span>
            <br />
            <span style={{ fontSize: '14px', color: 'grey' }}>
                Ahsanullah University of Science and Technology, Dhaka, Bangladesh
            </span>
        </div>

    </div> );
}
 
export default Footer;
