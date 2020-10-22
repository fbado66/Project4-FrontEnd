import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StatementFooter = (props) => {
    console.log(props)


    return (
      <div >
        <Row>
          <Col>
            <div className ='blm'> We embrace a world where everyone belongs, and stand with #BlackLivesMatter. </div>
          </Col>
          <Col>
            <div className = 'statement-content'>We reject racism or bigotry of any kind. But now is a time for action rather than words. 
              So we’d like to share with you, Project Lighthouse, a groundbreaking initiative launching in
              the United States to uncover, measure, and overcome discrimination when booking or hosting on DuckBnb.</div>
            </Col>
        </Row>  
      </div>
    );
  };
  
  export default StatementFooter;