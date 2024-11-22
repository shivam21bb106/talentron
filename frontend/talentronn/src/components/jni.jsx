import React from 'react';
import '../styles/jni.css';
const Jni = () => {
   const boxes = [
      {
         title: "Full Stack Development",
         bgColor: '#EAF7FF',
         borderColor: '#006CBB',
         imgSrc: '/images/int.png',
      },
      {
         title: "Front-end Development",
         bgColor: '#FFEAEB',
         borderColor: '#FF2934',
         imgSrc: '/images/funt.png',
      },
      {
         title: "Data Engineering",
         bgColor: '#FFF2E8',
         borderColor: '#FF7008',
         imgSrc: '/images/g9.png',
      },
      {
         title: "Software Testing",
         bgColor: '##F6FFCB',
         borderColor: '#9BAA58',
         imgSrc: '/images/ol.png',
      }
   ];
   const blueBoxes = [
      {
         title: "Front-End Technologies",
         imgSrc: '/images/rectangle1000.png',
         content: [
            "HTML5, CSS3, JavaScript",
            "Responsive web design",
            "Front-end frameworks (e.g., React / Next.js)"
         ]
      },
      {
         title: "Back-end Technologies",
         imgSrc: '/images/rectangle1001.png',
         content: [
            "Server-side programming languages (e.g. Node.js / Python)",
            "Database management systems (e.g., MySQL / PostgreSQL)",
            "Server-side frameworks (e.g., Express.js / Django)",
            "Restful APIs"
         ]
      },
      {
         title: "Deployment and Hosting",
         imgSrc: '/images/rectangle1002.png',
         content: [
            "Cloud platforms (e.g., AWS, Azure)",
            "Containerization (e.g., Docker)",
            "Server-side frameworks (e.g., Express.js / Django)",
            "Restful APIs"
         ]
      }
   ];
   const engineeringTools = [
      "Version Control (GIT)",
      "Package managers (e.g., npm, yarn)",
      "Build tools (e.g., Webpack, Gulp)",
      "Task runners (e.g., Grunt)"
   ];
   const authentication = [
      "OAuth and JWT"
   ];
   const projectManagement = [
      "Jira / Git"
   ];
   const softSkills = [
      "Jira / Git"
   ];
   return (
      <div className="Jni">
         <div className="jni-main-box row">
            {boxes.map((box, index) => (
               <div 
                  key={index} 
                  className="jni-box col" 
                  style={{ backgroundColor: box.bgColor, border: `1px solid ${box.borderColor}` }}
               >
                  <img src={box.imgSrc} alt={`${box.title}`} />
                  <div className='tyu'>{box.title.split(' ')[0]}<p>{box.title.split(' ')[1]}</p></div>
                  <img src='/images/eart.png' className="eart" />
               </div>
            ))}
         </div>
         <div className="blue">
            <div className="blue-box row gx-2">
               {blueBoxes.map((box, index) => (
                  <div key={index} className="blue-box-main col">
                     <img src={box.imgSrc} alt={box.title} />
                     <span style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '700', color: '#575757', marginLeft: '22px', marginTop: '15px' }}>
                        {box.title}
                     </span>
                     {box.content.map((item, i) => (
                        <p key={i} style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', margin: '10px', padding: '0px', color: '#868686', marginLeft: '22px' }}>
                           <img src='/images/newbluetick.png' alt="tick" /> {item}
                        </p>
                     ))}
                     <a href="#" className="register-button">
                        Register now <img src='/images/white-arrow.png' style={{ marginLeft: '8px' }} alt="arrow" />
                     </a>
                  </div>
               ))}
               <div className="blue-box-main dew col">
                  <div className="inner-blue-main1">
                     <span style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '700', color: '#575757' }}>Engineering Tools</span>
                     {engineeringTools.map((tool, index) => (
                        <p key={index} style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', margin: '0px', padding: '0px', color: '#868686' }}>
                           <img src='/images/newbluetick.png' alt="tick" /> {tool}
                        </p>
                     ))}
                  </div>
                  <div className="inner-blue-main2">
                     <span style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '700', color: '#575757' }}>Authentication</span>
                     {authentication.map((auth, index) => (
                        <p key={index} style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', margin: '0px', padding: '0px', color: '#868686' }}>
                           <img src='/images/newbluetick.png' alt="tick" /> {auth}
                        </p>
                     ))}
                  </div>
                  <div className="inner-blue-main3">
                     <span style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '700', color: '#575757' }}>Project Management</span>
                     {projectManagement.map((pm, index) => (
                        <p key={index} style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', margin: '0px', padding: '0px', color: '#868686' }}>
                           <img src='/images/newbluetick.png' alt="tick" /> {pm}
                        </p>
                     ))}
                  </div>
                  <div className="inner-blue-main4">
                     <span style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '700', color: '#575757' }}>Soft Skills</span>
                     {softSkills.map((skill, index) => (
                        <p key={index} style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600', margin: '0px', padding: '0px', color: '#868686' }}>
                           <img src='/images/newbluetick.png' alt="tick" /> {skill}
                        </p>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Jni;
