import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Resume - Sanzida Alam Sinthia.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experiences</h3>
            <Resumecontent
              title="Software Beta Tester"
              date="Mar 2021 - Present"
              content={[
                'at MASTER WiZR (Oslo, Norway)',
                'Remote, Contractual Basis',
                'Submit easy-to-reproduce bug reports',
                'Feedback regarding improvements of the software.',
              ]}
            />
            <Resumecontent
              title="Student Tutor"
              date="Feb 2021 - Jan 2022"
              content={[
                'at BRAC University (Dhaka, Bangladesh)',
                'Worked in two different department Mathematics and Natural Sciences (MNS) and Computer Science and Engineering (CSE)',
                'Took classes were taught to ensure a thorough comprehension of every topic.',
                'Examining quiz and assignment scripts',
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Lead [Girlscript Surat]"
              date="March 2020 - present"
              content={[
                'As a Part of Community, we arrange lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff.',
              ]}
            />
            <Resumecontent
              title="Microsoft Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                'Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.',
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering"
              date="2018 - 2021"
              content={[
                `CGPA: 3.79/4.00 `,
                'I was complete my Bachelor in Science degree fron BRAC University',
              ]}
            />
            {/* 
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Top 40 of IngineousHunt contest winner and get 16GB pandrive.`,
                `2nd rank in college elocution competition.`,
              ]}
            /> */}
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  )
}

export default Resume
