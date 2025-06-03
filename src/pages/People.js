import styles from '../css/People.module.css';
import propic from '../assets/propic2.png';
import drsharif from '../assets/drsharif.jpeg';
import alamin from '../assets/dralamin.jpeg';
import mahfuz from '../assets/mahfuz.jpeg';
import reasad from '../assets/reasad.png';
import seum from '../assets/seum.png';
const People = () => {
    return (
        <div style={{
            width: "100%",
            padding: "20px",
            // backgroundColor: "#f8f9fa",
        }} className='container'>

            <div>
                <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Our Team</span>
            </div>
            <br />
            <div>
                <span style={{ color: 'grey' }}>Faculty Members</span>
                <br />
                <br />
                <div className={styles.memberSection} >
                    
                    <div className={styles.peopleContainer} >
                        <img src={drsharif} alt="freepic"
                            className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Dr. Fakir Sharif Hossain</span>
                        <span className={styles.designation}>Associate Professor, Department of EEE, AUST, Bangladesh</span>
                    </div>

                    <div className={styles.peopleContainer}>
                        <img src={alamin} alt="Faculty Member" 
                        className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Dr. Rashed Al Amin</span>
                        <span className={styles.designation}>Associate Researcher & Lecturer, 
                            Embedded Systems, University of Seigen, Germany
                        </span>
                    </div>

                    <div className={styles.peopleContainer}>
                        <img src={reasad} alt="Faculty Member" 
                        className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Reasad Zaman</span>
                        <span className={styles.designation}>
                            Lecturer, Department of CSE, AUST, Bangladesh</span>
                    </div>

                    <div className={styles.peopleContainer}>
                        <img src={seum} alt="Faculty Member" 
                        className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Ashek Seum</span>
                        <span className={styles.designation}>
                            Lecturer, Department of CSE, AUST, Bangladesh</span>
                    </div>
                </div>
            </div>
<hr />
            <div>
                <span style={{ color: 'grey' }}>Research Assistant</span>
                <br />
                <br />
                <div className={styles.memberSection} >
                    
                    <div className={styles.peopleContainer} >
                        <img src={mahfuz} alt="Student Member"
                            className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Mahfuzur Rahman</span>
                        <span className={styles.designation}>Department of EEE, AUST, Bangladesh</span>
                    </div>

                    <div className={styles.peopleContainer} >
                        <img src={propic} alt="Student Member"
                            className={styles.profilePic} />
                        <span style={{ fontWeight: 'bold' }}>Arafat Miah</span>
                        <span className={styles.designation}>Department of EEE, AUST, Bangladesh</span>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default People;