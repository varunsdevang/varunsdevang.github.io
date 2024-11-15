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
                        <img src="./pics/Robot.png" alt="Robots">
                    </div>
                </div>

                <div class="work-card">
                    <div class="work-card-content">
                        <h3>Quote Classification and Interpretation <a href="https://github.com/varunsdevang/QuoteMI" target="_blank"><i class="fab fa-github"></i></a></h3>
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
                    <img src="./pics/umass_logo.png" alt="UMass" class="company-logo">
                    <div class="work-card-content">
                        <h3>Grader, Manning College of Information and Computer Science, UMass, Amherst</h3>
                        <p><strong>June 2024 – Nov 2024</strong></p>
                        <ul>
                            <li>Evaluated and graded assignments, projects, and exams, ensuring accurate assessment of students' understanding of software engineering principles.</li>
                            <li>Provided constructive feedback to students, helping them improve their coding practices, design techniques, and problem-solving skills.</li>
                        </ul>
                    </div>
                </div>

                <div class="work-card">
                    <img src="./pics/umass_logo.png" alt="UMass" class="company-logo">
                    <div class="work-card-content">
                        <h3>Graduate Student Researcher, <a href="https://hcr.cs.umass.edu/people.html" target="_blank">Human Centered Robotics Lab </a>, UMass, Amherst</h3>
                        <p><strong>June 2024 – Nov 2024</strong></p>
                        <ul>
                            <li>Optimized a model for frame-level fault detection in collaborative autonomous systems, processing 30 images per timestep from 5 agents in the DeepAccident dataset.</li>
                            <li>Conducted an in-depth analysis of dataset structure and identified key challenges impacting detection outcomes.</li>
                            <li> Designed and implemented a denoising-based fault detection model with Vector Quantized GANs and Graph Attention Networks as pre-training, exploring enhanced learning for fault detection in multi-agent autonomous systems.</li>
                        </ul>
                    </div>
                </div>

                <div class="work-card">
                    <img src="./pics/umass_logo.png" alt="UMass" class="company-logo">
                    <div class="work-card-content">
                        <h3>Dining Hall Supervisor (Part-Time), Auxiliary Enterprises, UMass, Amherst</h3>
                        <p><strong>Sep 2023 – Dec 2024</strong></p>
                        <ul>
                            <li>Led and motivated team members to maintain high performance and productivity, ensuring smooth operations across all work areas.</li>
                            <li>Strategically managed employee break schedules to balance workload and optimize efficiency.</li>
                            <li>Demonstrated strong attention to detail by ensuring allergens were accurately identified and communicated, fostering a safe and compliant work environment.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="work-card">
                    <img src="https://www.eagleview.com/wp-content/themes/eagleview_new/assets/svg/svgs/eagleview_logo-color.svg" alt="Eagleview" class="company-logo">
                    <div class="work-card-content">
                        <h3>Software Development Engineer - I, Eagleview, Bengaluru</h3>
                        <p><strong>Aug 2020 – Dec 2022</strong></p>
                        <ul>
                            <li>Assisted in designing and led implementation of an event-based notification service handling push, email, and iOS notifications via AWS SQS and SNS, supporting 1,000+ concurrent requests.</li>
                            <li>Gained proficiency in C# and delivered critical release APIs within one week.</li>
                            <li>Delivered 6+ Golang and Python microservices, collaborating with cross-continental agile teams.</li>
                            <li>Contributed to migrating a legacy platform to a serverless orchestrator using AWS Step Functions and Lambda, reducing service time from 3 hours to 45 minutes.</li>
                            <li>Achieved 60% latency reduction for large file downloads by implementing gRPC stream APIs.</li>
                            <li>Enhanced service performance and resolved critical bugs through regular load and performance testing.</li>
                            <li>Translated business-critical MATLAB code handling geospatial data to Python, increasing scalability and reducing latency by over 70%.</li>
                            <li>Participated in the full SDLC of <a href="https://www.eagleview.com/product/eagleview-assess/" target="_blank" >Assess</a>, an online imagery inspection tool with a $1M+ projected revenue.</li>
                            <li>Proposed OpenTelemetry integration for serverless tracing, improving logging and debugging capabilities.</li>
                            <li>Participated in code reviews to ensure clean, tested, readable and maintainable codebase to maintain 90% code coverage.</li>
                        </ul>
                    </div>
                </div>
            
                <div class="work-card">
                    <img src="https://www.eagleview.com/wp-content/themes/eagleview_new/assets/svg/svgs/eagleview_logo-color.svg" alt="Eagleview" class="company-logo">
                    <div class="work-card-content">
                        <h3>Software Development Engineer Intern, Eagleview, Bengaluru</h3>
                        <p><strong>Jan 2020 – June 2020</strong></p>
                        <ul>
                            <li>Delivered 15+ APIs for a critical process and improved API documentation, reducing cross-team dependency and cutting development time by 15%..</li>
                            <li>Presented a study on ElasticSearch-Logstash-Kibana (ELK) stack for observability, demonstrating its potential to trace points of failure within 30 minutes and deliver key analytical insights.</li>
                            <li>Proto-typed a dashboard to automate version tracking, cutting manual checks and documentation time by 50%.</li>
                        </ul>
                    </div>
                </div>

            <div class="work-card">
                <img src="/pics/pes_logo.png" alt="PES University" class="company-logo">
                <div class="work-card-content">
                <h3>Research Intern, Center for Cloud and Big Data, PES University, Bengaluru</h3>
                <p><strong>May 2018 – Aug 2018</strong></p>
                <ul>
                    <li>Researched on federated clouds using OpenStack.</li>
                    <li>Conducted a feasibility study of federated container service using Mesos in Openstack.</li>
                </ul>
            </div>
        </div>
            </section>
        `;
    }

    contentArea.innerHTML = content; // Replace the content dynamically
}
