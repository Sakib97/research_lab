
import { useLocation } from 'react-router-dom';
import styles from '../css/Home.module.css'
import { useEffect } from 'react';
import ev from '../assets/ev1.jpg';
import zdd from '../assets/zdd1.jpg';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();
    // console log location
    

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`Element with id '${location.hash}' not found on the page.`);
            }
        }
    }, [location]);
    

    return (
        <div style={{
            width: "100%",
            padding: "20px",
            // backgroundColor: "#f8f9fa",
        }} className='container'>
            <div id='projects'>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Projects</span>
            </div>
            <br />

            <div id='ongoing-projects'>
                <span style={{ fontSize: '22px' }}>Ongoing Projects</span>
                <br /> <br />

                <div>
                    <span style={{ color: 'grey' }}>Project 1</span>
                    <br />

                    <div className={styles.projectContainer}>


                        <div>
                            <a href="http://casr.aust.edu/enhancing-autonomous-vehicle-performance-through-adaptive-fpga-acceleration-and-reinforcement-learning-for-dynamic-environments/" target="_blank" rel="noopener noreferrer">
                                <span style={{ fontWeight: "bold", color: 'black', fontSize: '18px' }}>
                                    Enhancing Autonomous Vehicle Performance Through Adaptive
                                    FPGA Acceleration and Reinforcement Learning for Dynamic
                                    Environments</span>
                            </a>

                            <br />
                            The expected outcomes of this research project include improved safety, adaptability, efficiency and user experience in AV systems.
                            <ul>
                                <li>The integration of sensor data and reinforcement learning within the FPGA is expected to lead to improved real-time decision-making for AVs.</li>
                                <li>The dynamic selection and configuration of FPGA hardware accelerators are anticipated to optimize resource utilization and improve task-specific performance.</li>
                                <li>The system’s ability to respond to changing environmental conditions such as traffic congestion and weather is expected to enhance the vehicle’s adaptability and safety.</li>
                                <li>Over time, the reinforcement learning agent should continuously improve its decision-making abilities, leading to more efficient and safer autonomous driving.</li>
                                <li>By dynamically optimizing hardware resources and decision-making, the method should lead to increased operational efficiency for AVs.</li>
                            </ul>
                        </div>

                        <div>
                            <img className={styles.projectImage}
                                src={ev} alt="Project 1" />
                        </div>
                    </div>

                    <div className={styles.projectPaperContainer}>
                        <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                            Associated Research Papers
                        </span>

                        <div className={styles.projectPaper}>
                            <a href="https://ieeexplore.ieee.org/document/11022006" target="_blank" rel="noopener noreferrer">
                                <span style={{ fontWeight: "bold", color: 'black', fontSize: '18px' }}>
                                    Traffic Light Detection for Autonomous Vehicles in
                                    Diverse Environments Through Transfer Learning</span>
                            </a>
                            <br />

                            <span style={{ fontSize: '13px', color: 'grey' }} >December 2024</span>
                            <br />
                            <span style={{ fontSize: '13px', color: 'grey' }}>
                                2024 27th International Conference on Computer and Information Technology (ICCIT) <br />
                                Cox's Bazar, Bangladesh
                            </span>


                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <br /><br />

            <div id='completed-projects'>
                <span style={{ fontSize: '22px' }}>Completed Projects</span>
                <br /> <br />
                <div>
                    <span style={{ color: 'grey' }}>Project 2</span>
                    <br />
                    <div className={styles.projectContainer}>
                        <div>
                            <a href="http://casr.aust.edu/post-silicon-hardware-trojan-detection-using-physical-unclonable-function/" target="_blank" rel="noopener noreferrer">
                                <span style={{ fontWeight: "bold", color: 'black', fontSize: '18px' }}>
                                    Post-silicon Hardware Trojan Detection Using Physical Unclonable Function
                                </span>

                            </a>
                            <br />
                            Outcomes of this research project:
                            <ul>
                                <li>Trojan inserted circuit operation remains unaltered though it has Trojans in it. The problem arises when Trojans trigger any payload. How many Trojan gates in a large circuit (millions of gates) can be identified against elevated process variation determines the detection sensitivity. Higher detection sensitivity means a tiny Trojan with a few Trojan gates can be detected. The expected outcome of our proposed method is to deliver heightened detection sensitivity so that a small Trojan in a large circuit can be detected.</li>
                                <li>The overall outcome depends on PUF uniqueness, ML efficiency in extracting the process variation information, and measurement accuracy.</li>
                            </ul>
                        </div>

                        <div>
                            <img className={styles.projectImage}
                                src={zdd} alt="Project 2" />
                        </div>
                    </div>

                    <div className={styles.projectPaperContainer}>
                        <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                            Associated Research Papers
                        </span>

                        <div className={styles.projectPaper}>
                            <a href="https://ieeexplore.ieee.org/document/10973799" target="_blank" rel="noopener noreferrer">
                                <span style={{ fontWeight: "bold", color: 'black' }}>
                                    ZDD: A Zero Delay Deviation Variability-Aware
                                    Golden Free Hardware Trojan Detection Using Physical Unclonable Function
                                </span>
                            </a>
                            <br />

                            <span style={{ fontSize: '13px', color: 'grey' }} >
                                22 April 2025</span>
                            <br />

                            <span style={{ fontSize: '13px', color: 'grey' }}>
                                IEEE Transactions on Circuits and Systems I: Regular Papers </span>

                        </div>

                        <div className={styles.projectPaper}>
                            <a href="https://ieeexplore.ieee.org/document/10055021" target="_blank" rel="noopener noreferrer">
                                <span style={{ fontWeight: "bold", color: 'black' }}>
                                    An Efficient Machine Learning Approach for Hardware Trojan Detection
                                </span>
                            </a>
                            <br />

                            <span style={{ fontSize: '13px', color: 'grey' }} >
                                December 2022</span>
                            <br />

                            <span style={{ fontSize: '13px', color: 'grey' }}>
                                2022 25th International Conference on Computer and Information Technology (ICCIT) <br />
                                Cox's Bazar, Bangladesh </span>

                        </div>
                    </div>
                </div>
                <hr />
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
}

export default Home;