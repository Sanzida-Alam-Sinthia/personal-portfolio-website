import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/webdev.JPG'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Memory.JPG'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/Chairish.JPG'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Memory Creation Photography || Photographers Portfolio and Service Website"
              description="It is a photographers portfolio and service website.In this project, sser can log-in with Google and Firebase sign-in with Firebase Authentication and Photography Services are shown in different categories and detailed information provided in show details page. Logged in user can add a review and add new service. All information are stored in MongoDB and shown in website."
              link="https://github.com/Sanzida-Alam-Sinthia/photography-service-client-repo"
              liveLink="https://photography-service-client.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="Chairish Furniture || Furniture ReSelling Website"
              description="Chairish Furniture is furniture reselling website which is build with react.js. Google and Firebase sign-in with Firebase Authentication, User order information saved in MongoDB. Different roles and routes are implemented for Admin, Seller, and User."
              link="https://github.com/Sanzida-Alam-Sinthia/chairish-furniture-client-repo"
              liveLink="https://resell-assignment-client.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Learn WebDev.com || Online Learning Website"
              description="It is a basic e-learning site which build in React. It has  features like login, signup as a part of authentication. Apart from that It offeres different type of courses and user can see the details of the courses. Additionally, can also download the course details."
              link="https://github.com/Sanzida-Alam-Sinthia/LearnWebDev-client-repo"
              liveLink="https://learnng-platform-assignment.web.app/"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col> */}
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
