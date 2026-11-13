/* B.Tech final-year major project ideas, grouped by branch.
   To add a project: copy one { ... } block inside the right branch and edit it.
   Fields: t = title, a = area, d = short description, k = tools / technologies */
window.SKYFORGE_PROJECTS = {
  cse: {
    name: 'Computer Science (CSE)',
    short: 'CSE',
    blurb: 'AI, machine learning, cloud, DevOps, cybersecurity and full-stack applications.',
    items: [
      { t: 'AI Resume Screener and Mock Interview Bot', a: 'Agentic AI', d: 'Ranks resumes against a job description and runs a practice interview that asks follow-up questions and gives feedback.', k: ['Python', 'LLM APIs', 'RAG', 'FastAPI', 'React'] },
      { t: 'College Help-Desk Chatbot using RAG', a: 'Generative AI', d: 'Answers student questions about syllabus, fees, exams and rules using the college’s own documents as the source.', k: ['Python', 'LangChain', 'Vector DB', 'Streamlit'] },
      { t: 'Multi-Agent Customer Support System', a: 'Agentic AI', d: 'Several AI agents split the work: one classifies the ticket, one looks up order data with tools and one drafts the reply.', k: ['Python', 'Agents & tool calling', 'SQL', 'FastAPI'] },
      { t: 'Smart Attendance using Face Recognition', a: 'Computer Vision', d: 'Marks classroom attendance from a camera feed and generates daily and monthly reports for faculty.', k: ['Python', 'OpenCV', 'face_recognition', 'Flask', 'MySQL'] },
      { t: 'Fake News Detection using NLP', a: 'Machine Learning', d: 'Classifies news articles and social posts as reliable or misleading using a fine-tuned transformer model.', k: ['Python', 'Transformers', 'scikit-learn', 'Flask'] },
      { t: 'Crop Disease Detection from Leaf Images', a: 'Deep Learning', d: 'Farmers upload a leaf photo and the app identifies the disease and suggests a remedy.', k: ['Python', 'TensorFlow / Keras', 'CNN', 'Flutter'] },
      { t: 'Phishing Website Detection Browser Extension', a: 'Cybersecurity', d: 'Checks URLs in real time with an ML model and warns the user before a suspicious page opens.', k: ['Python', 'ML', 'JavaScript', 'Chrome Extension'] },
      { t: 'Online Exam Proctoring System', a: 'Full Stack + AI', d: 'Runs online tests while detecting tab switching, multiple faces and absence from the webcam.', k: ['React', 'Node.js', 'OpenCV', 'MongoDB'] },
      { t: 'Real-Time Sign Language to Text', a: 'Computer Vision', d: 'Converts hand gestures from a webcam into text and speech to help hearing-impaired users communicate.', k: ['Python', 'MediaPipe', 'LSTM', 'OpenCV'] },
      { t: 'Blockchain-Based Certificate Verification', a: 'Blockchain', d: 'Colleges issue tamper-proof digital certificates that employers can verify instantly with a QR code.', k: ['Solidity', 'Ethereum testnet', 'React', 'IPFS'] },
      { t: 'Cloud-Native App with Full CI/CD Pipeline', a: 'DevOps & Cloud', d: 'A containerised web app that is automatically tested, built and deployed to AWS on every Git push, with monitoring.', k: ['Docker', 'GitHub Actions', 'AWS', 'Terraform', 'Prometheus'] },
      { t: 'Kubernetes Auto-Scaling and Monitoring Dashboard', a: 'DevOps & Cloud', d: 'Deploys a microservice app on Kubernetes that scales with load and shows live health metrics on a dashboard.', k: ['Kubernetes', 'Helm', 'Grafana', 'Prometheus'] }
    ]
  },
  ece: {
    name: 'Electronics & Communication (ECE)',
    short: 'ECE',
    blurb: 'IoT, embedded systems, VLSI, communication and edge AI.',
    items: [
      { t: 'IoT Smart Energy Meter with Cloud Dashboard', a: 'IoT', d: 'Measures household power use in real time and shows usage, cost and alerts on a web dashboard.', k: ['ESP32', 'Current sensor', 'MQTT', 'Cloud dashboard'] },
      { t: 'Vehicle Accident Detection and Alert System', a: 'Embedded Systems', d: 'Detects a crash and sends the GPS location to emergency contacts automatically.', k: ['Arduino / ESP32', 'Accelerometer', 'GPS', 'GSM'] },
      { t: 'Wearable Health Monitoring Band', a: 'IoT / Biomedical', d: 'Tracks heart rate, SpO2 and body temperature and sends alerts to a phone when readings are abnormal.', k: ['ESP32', 'MAX30102', 'BLE', 'Mobile app'] },
      { t: 'Smart Helmet for Mine Workers', a: 'IoT / Safety', d: 'Monitors toxic gases, temperature and falls, and alerts the control room over long-range radio.', k: ['Microcontroller', 'Gas sensors', 'LoRa'] },
      { t: 'License Plate Recognition on Raspberry Pi', a: 'Edge AI', d: 'Reads vehicle number plates at a gate and logs entry and exit times without a cloud connection.', k: ['Raspberry Pi', 'OpenCV', 'YOLO', 'OCR'] },
      { t: 'LoRa-Based Smart Agriculture Monitoring', a: 'IoT / Communication', d: 'Remote field nodes send soil moisture and weather data over LoRa and control irrigation automatically.', k: ['LoRa', 'Soil sensors', 'ESP32', 'Dashboard'] },
      { t: '32-bit RISC-V Processor Design in Verilog', a: 'VLSI', d: 'Designs, simulates and verifies a pipelined RISC-V core and runs test programs on it.', k: ['Verilog', 'ModelSim / Vivado', 'FPGA'] },
      { t: 'FPGA-Based Real-Time Image Edge Detection', a: 'VLSI / DSP', d: 'Implements Sobel edge detection in hardware and compares its speed with a software version.', k: ['Verilog', 'Xilinx FPGA', 'Vivado'] },
      { t: 'Gesture-Controlled Wheelchair', a: 'Embedded / Assistive', d: 'Lets a user steer a wheelchair with hand tilt, with obstacle detection for safety.', k: ['Arduino', 'MPU6050', 'Ultrasonic sensor', 'Motor driver'] },
      { t: 'IoT Smart Parking System', a: 'IoT', d: 'Shows free parking slots in real time on a mobile app and allows advance booking.', k: ['ESP32', 'IR / ultrasonic sensors', 'Firebase', 'Mobile app'] },
      { t: 'Voice-Controlled Home Automation', a: 'IoT', d: 'Controls lights, fans and appliances by voice and phone, with energy usage tracking.', k: ['ESP32', 'Relays', 'Voice assistant', 'MQTT'] }
    ]
  },
  eee: {
    name: 'Electrical & Electronics (EEE)',
    short: 'EEE',
    blurb: 'Electric vehicles, renewable energy, smart grid, power electronics and drives.',
    items: [
      { t: 'Solar-Powered EV Charging Station with MPPT', a: 'Renewable Energy / EV', d: 'Charges an EV battery from solar panels using a maximum power point tracking controller.', k: ['MATLAB / Simulink', 'DC-DC converter', 'MPPT', 'Microcontroller'] },
      { t: 'Battery Management System for Electric Vehicles', a: 'EV Technology', d: 'Monitors cell voltage, current and temperature, estimates state of charge and balances cells.', k: ['Arduino / STM32', 'Li-ion cells', 'SOC estimation'] },
      { t: 'Smart Grid Load Forecasting using Machine Learning', a: 'Smart Grid', d: 'Predicts electricity demand from past load and weather data to help plan generation.', k: ['Python', 'LSTM', 'Pandas', 'scikit-learn'] },
      { t: 'IoT-Based Transformer Health Monitoring', a: 'Power Systems / IoT', d: 'Tracks oil temperature, load current and oil level and alerts the utility before a failure.', k: ['ESP32', 'Sensors', 'Cloud dashboard'] },
      { t: 'Transmission Line Fault Detection using ANN', a: 'Power Systems', d: 'Detects and classifies faults on a simulated transmission line using a neural network.', k: ['MATLAB / Simulink', 'Neural network'] },
      { t: 'Wireless Power Transfer for EV Charging', a: 'Power Electronics', d: 'Charges a small vehicle model through inductive coupling without a cable.', k: ['Resonant inverter', 'Coils', 'Simulink'] },
      { t: 'BLDC Motor Speed Control for Electric Vehicles', a: 'Electric Drives', d: 'Designs and simulates closed-loop speed control of a BLDC motor, then tests it on hardware.', k: ['MATLAB / Simulink', 'PID control', 'Motor driver'] },
      { t: 'Hybrid Solar–Wind Power System with Smart Controller', a: 'Renewable Energy', d: 'Combines solar and wind sources and switches between them and a battery for continuous supply.', k: ['Simulink', 'Microcontroller', 'Battery storage'] },
      { t: 'Automatic Power Factor Correction Unit', a: 'Power Systems', d: 'Measures power factor and switches capacitor banks automatically to improve it.', k: ['Microcontroller', 'Capacitor bank', 'Relays'] },
      { t: 'Smart Energy Meter with Theft Detection', a: 'Smart Grid / IoT', d: 'Detects meter tampering and power theft and reports usage remotely to the utility.', k: ['ESP32', 'GSM / Wi-Fi', 'Current sensors'] },
      { t: 'Grid-Connected Solar PV Inverter Simulation', a: 'Power Electronics', d: 'Models a single-phase grid-tied inverter with synchronisation and harmonic analysis.', k: ['MATLAB / Simulink', 'PLL', 'PWM'] }
    ]
  },
  civil: {
    name: 'Civil Engineering',
    short: 'Civil',
    blurb: 'Structural design, concrete technology, transportation, water resources and GIS.',
    items: [
      { t: 'Design and Analysis of a G+10 Residential Building', a: 'Structural Engineering', d: 'Models, analyses and designs a multi-storey building for gravity, wind and seismic loads.', k: ['ETABS / STAAD Pro', 'AutoCAD', 'IS codes'] },
      { t: 'Seismic Analysis of Buildings with and without Shear Walls', a: 'Structural Engineering', d: 'Compares storey drift, displacement and base shear to find the best shear wall position.', k: ['ETABS', 'IS 1893'] },
      { t: 'Partial Replacement of Cement with Fly Ash and GGBS', a: 'Concrete Technology', d: 'Tests compressive and split tensile strength of concrete mixes with industrial by-products.', k: ['Lab testing', 'Mix design', 'IS 10262'] },
      { t: 'Use of Plastic Waste in Bituminous Roads', a: 'Transportation', d: 'Studies how shredded plastic affects the strength and durability of road bitumen.', k: ['Marshall stability test', 'Lab testing'] },
      { t: 'Self-Healing Concrete using Bacteria', a: 'Concrete Technology', d: 'Evaluates how bacteria-based additives seal cracks and recover strength in concrete.', k: ['Lab testing', 'Microscopy', 'Strength tests'] },
      { t: 'Pervious Concrete for Urban Stormwater Management', a: 'Concrete / Water', d: 'Designs a porous concrete mix and measures its permeability and strength for pavements.', k: ['Mix design', 'Permeability test'] },
      { t: 'GIS-Based Flood Risk Mapping', a: 'Water Resources / GIS', d: 'Maps flood-prone zones of a city using elevation, rainfall and land-use data.', k: ['QGIS', 'DEM data', 'Remote sensing'] },
      { t: 'Rainwater Harvesting System Design for a Campus', a: 'Water Resources', d: 'Calculates catchment yield and designs storage and recharge structures for the campus.', k: ['AutoCAD', 'Hydrology calculations'] },
      { t: 'Traffic Study and Intersection Redesign', a: 'Transportation', d: 'Surveys traffic at a busy junction and proposes a signal or layout design to reduce delay.', k: ['Traffic survey', 'Webster method', 'AutoCAD'] },
      { t: 'BIM Model and Project Scheduling of a Building', a: 'Construction Management', d: 'Builds a 3D BIM model, estimates quantities and creates a construction schedule.', k: ['Revit', 'MS Project / Primavera'] },
      { t: 'Sewage Treatment Plant Design for a Small Town', a: 'Environmental Engineering', d: 'Designs treatment units based on population forecast and wastewater characteristics.', k: ['Design calculations', 'AutoCAD', 'CPHEEO manual'] }
    ]
  },
  mech: {
    name: 'Mechanical Engineering',
    short: 'Mech',
    blurb: 'Design, manufacturing, thermal engineering, EV, robotics and CFD.',
    items: [
      { t: 'Design and Analysis of an Electric Vehicle Chassis', a: 'Design / EV', d: 'Models a lightweight chassis and checks stress, deformation and vibration under load.', k: ['SolidWorks / CATIA', 'ANSYS'] },
      { t: 'Regenerative Braking System for Electric Vehicles', a: 'Automobile / EV', d: 'Recovers energy during braking and stores it back in the battery, with efficiency testing.', k: ['Prototype', 'Motor-generator', 'Simulink'] },
      { t: 'Waste Heat Recovery from IC Engine using TEG', a: 'Thermal Engineering', d: 'Converts exhaust heat into electricity using thermoelectric generators and measures the output.', k: ['Thermoelectric modules', 'Engine test rig'] },
      { t: 'Performance and Emission Study of Biodiesel Blends', a: 'Thermal / IC Engines', d: 'Tests engine performance and emissions with biodiesel blends compared with diesel.', k: ['CI engine test rig', 'Gas analyser'] },
      { t: 'CFD Analysis of Car Aerodynamics', a: 'CFD', d: 'Simulates airflow over a car body to reduce drag and compares design changes.', k: ['ANSYS Fluent', 'SolidWorks'] },
      { t: '3D-Printed Prosthetic Hand', a: 'Design / Biomedical', d: 'Designs and prints a low-cost prosthetic hand with finger movement controlled by servos.', k: ['Fusion 360', '3D printing', 'Arduino', 'Servos'] },
      { t: 'Pick-and-Place Robotic Arm', a: 'Robotics', d: 'Builds a 4–5 axis robotic arm that picks and sorts objects, with optional camera-based sorting.', k: ['Arduino', 'Servo motors', 'OpenCV', 'CAD'] },
      { t: 'Solar-Powered Automatic Grass Cutter', a: 'Design & Fabrication', d: 'Fabricates a solar-powered grass cutter with obstacle avoidance.', k: ['Fabrication', 'Solar panel', 'Microcontroller'] },
      { t: 'Automatic Pneumatic Punching Machine', a: 'Manufacturing', d: 'Designs and fabricates a pneumatic punching machine for sheet metal with an automatic cycle.', k: ['Pneumatics', 'Fabrication', 'Control circuit'] },
      { t: 'Solar Dryer for Agricultural Products', a: 'Renewable Energy', d: 'Builds a solar dryer and compares drying time and quality with open sun drying.', k: ['Fabrication', 'Temperature sensors', 'Thermal analysis'] },
      { t: 'Predictive Maintenance using Vibration Analysis', a: 'Industry 4.0', d: 'Collects machine vibration data and uses ML to predict bearing faults before breakdown.', k: ['Accelerometer', 'ESP32', 'Python', 'Machine learning'] }
    ]
  }
};
