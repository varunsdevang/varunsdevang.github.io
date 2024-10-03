function loadContent(page) {
    const contentArea = document.getElementById('dynamic-content');
    
    let content = '';

    if (page === 'gallery') {
        content = `
        <div class="photo-gallery">
        <div class="photo-frame"><img src="./pics/varun.jpg" alt="Photo 1"></div>
        <div class="photo-frame"><img src="./pics/pic1.jpg" alt="Photo 2"></div>
        <div class="photo-frame"><img src="./pics/pic2.jpeg" alt="Photo 3"></div>
        <div class="photo-frame"><img src="./pics/pic3.jpeg" alt="Photo 4"></div>
        <div class="photo-frame"><img src="./pics/pic4.jpeg" alt="Photo 5"></div>
        <div class="photo-frame"><img src="./pics/pic5.jpeg" alt="Photo 6"></div>
        <div class="photo-frame"><img src="./pics/pic6.jpeg" alt="Photo 6"></div>
    </div>`;
    } else if (page === 'projects') {
        content = `
            <section id="projects" class="work-experience">
                <h2>Projects</h2>
                <br />
                <div class="work-card">
                    <div class="work-card-content">
                        <h3>Human Following Robot</h3>
                        <ul>
                            <li>Developed a sophisticated human-following capability for a holonomic robot equipped with an RGB-D camera.</li>
                            <li>Leveraged advanced machine learning models such as YOLO-v7 for object detection, SuperPoint for feature extraction, and a PID controller for precise movement.</li>
                            <li>Integrated computer vision and control systems for real-time human tracking in dynamic environments.</li>
                        </ul>
                    </div>
                </div>

                <div class="work-card">
                    <div class="work-card-content">
                        <h3>Quote Classification and Interpretation</h3>
                        <ul>
                            <li>Fine-tuned Transformer models like BERT, GPT-2, and T5 for multi-label classification of quotes.</li>
                            <li>Explored prompting techniques on T5 and Gemma models to enhance quote interpretation.</li>
                            <li>Improved model accuracy and efficiency through extensive analysis of results.</li>
                        </ul>
                    </div>
                </div>

                <div class="work-card">
                    <div class="work-card-content">
                        <h3>Stock Exchange Application</h3>
                        <ul>
                            <li>Prototyped a stock trading application in Python to experiment with distributed systems concepts.</li>
                            <li>Implemented multithreading and leader elections for a realistic trading simulation.</li>
                            <li>Tested algorithms for fault tolerance and system optimization.</li>
                        </ul>
                    </div>
                </div>

                <div class="work-card">
                    <div class="work-card-content">
                        <h3>Optimizing Machine Learning Models for Predictive Analysis</h3>
                        <ul>
                            <li>Developed custom machine learning models, including Neural Networks, Random Forests, and K-Nearest Neighbors.</li>
                            <li>Applied hyper-parameter tuning and optimization to maximize model performance.</li>
                            <li>Generated F1 Score graphs for data-driven decision making.</li>
                        </ul>
                    </div>
                </div>
            </section>
`;
    } else if (page === 'academics') {
        content = `
            <section class="education">
                <h2>Education</h2>
                <br/>
                <div class="card">
                    <a href="https://www.cics.umass.edu/"><img src="pics/umass_logo.png" alt="UMass Amherst" class="school-logo"></a>
                    <div class="card-content">
                        <h3>MS in Computer Science, University of Massachusetts, Amherst</h3>
                        <p><strong>GPA: </strong> 4.0</p>
                        <p><strong>Coursework: </strong> Distributed Systems, Software Engineering, Reinforcement Learning, Internet Security, Advanced NLP, and Robotics</p>
                    </div>
                </div>
            
                <div class="card">
                    <a href="https://pes.edu/"><img src="/pics/pes_logo.png" alt="PES University" class="school-logo"></a>
                    <div class="card-content">
                        <h3>B.Tech in Computer Science and Engineering, PES University, Bengaluru, India</h3>
                        <p><strong>GPA: </strong> 8.31/10</p>
                        <p><strong>Coursework: </strong> Data Structures, Computer Networks, Cloud Computing, etc.</p>
                    </div>
                </div>
    </section>`;
    } else if (page === 'experience') {
        content = `
            <section class="work-experience">
                <h2>Work Experience</h2>
                <br/>
                <div class="work-card">
                    <img src="https://www.eagleview.com/wp-content/themes/eagleview_new/assets/svg/svgs/eagleview_logo-color.svg" alt="Eagleview" class="company-logo">
                    <div class="work-card-content">
                        <h3>Software Development Engineer - I, Eagleview, Bengaluru</h3>
                        <ul>
                            <li>Developed and maintained Assess services, an online drone imagery tool for property assessment.</li>
                            <li>Implemented scalable Go REST and GRPC microservices for handling geospatial data, images, and large binary data with authentication and access control.</li>
                            <li>Reduced latency by 50% with GRPC stream APIs for large binary data transfers, conducted load testing, and fixed critical bugs.</li>
                            <li>Integrated AWS Batch, reducing container load by 15% and cutting AWS costs significantly. Delivered critical release APIs in C# within a week.</li>
                            <li>Designed an event-based internal notification platform using AWS SNS and SQS, handling over 1000 concurrent requests.</li>
                            <li>Replaced outdated tech with AWS Step Functions and Lambda, reducing cycle time by 60%.</li>
                            <li>Translated MATLAB code to Python, increasing scalability and reducing latency by over 60%. Proposed OpenTelemetry integration for serverless architecture tracing.</li>
                        </ul>
                    </div>
                </div>
            
                <div class="work-card">
                    <img src="https://www.eagleview.com/wp-content/themes/eagleview_new/assets/svg/svgs/eagleview_logo-color.svg" alt="Eagleview" class="company-logo">
                    <div class="work-card-content">
                        <h3>Software Development Engineer Intern, Eagleview, Bengaluru</h3>
                        <ul>
                            <li>Programmed scalable Go microservices, improved API documentation, and proposed ELK stack integration for system tracing.</li>
                            <li>Prototyped a Deployment Dashboard using Jenkins, HTML, CSS, JavaScript, and AWS S3 to monitor multi-environment deployments.</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }

    contentArea.innerHTML = content; // Replace the content dynamically
}
