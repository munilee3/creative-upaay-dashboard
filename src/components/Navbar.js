const Navbar = () => (
        <nav style={{display: "flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
            <div style={{display:"flex", alignItems:"center", backgroundColor:"rgba(245, 245, 245, 1)", padding:"10px 16px", borderRadius:"6px", width: "417px"}}>
                <img src="/images/search-normal.svg" alt="search-icon" style={{marginRight:"16px"}} />
                <input placeholder="Search for anything..." style={{border:"none", backgroundColor: "rgba(245, 245, 245, 1)"}} />
            </div>
            <div style={{display: "flex", alignItems:"center", justifyContent:"space-between", width:"350px"}}>
                <ul style={{listStyle:"none", paddingLeft:"0px", display: "flex", alignItems:"center", gap:"24px"}}>
                    <li>
                        <img src="/images/calendar-2.svg" alt="calendor" />
                    </li>
                    <li>
                        <img src="/images/message-question.svg" alt="calendor" />
                    </li>
                    <li>
                        <img src="/images/notification.svg" alt="calendor" />
                    </li>
                </ul>
                <div style={{display:"flex", alignItems: "center"}}>
                    <p style={{textAlign:"end", fontSize:"16px",marginBottom:"0px",  marginRight:"22px"}}>Palak Jain <br/>
                    <span style={{color:"rgba(120, 116, 134, 1)", fontSize:"14px", fontWeight:"400"}}>Rajathan, India</span>
                    </p>
                    <img src="/images/image 1.svg" alt="profile-icon" style={{marginRight:"10px", borderRadius:"30px"}}/>
                    <img src="/images/arrow-down.svg" alt="down-arrow" />
                </div>
            </div>
        </nav>
    )

export default Navbar