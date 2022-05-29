import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import work from '../../assets/img/work.png'
// core components

function  Completeex3() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-lg-center">
            <Col lg="10" md="12">
     {/* <img style = {{width:'100%'}}  alt='Img not found' src={ work }/> */}
          
        <h1>Work Opportunities</h1>
        <p>WordsRWeapons – A Different Kind Of Writing Company</p>
        <p>Hi, this is the CEO of WordsRWeapons here explaining what you are about to get into if you decide you’d like to work with us.</p>
        <p>First of all, let me tell you what I believe.</p>
        <p>I believe that writers aren’t made, they are born – born with a love for the written word and the effect it can engender in a reader.</p> 
        <p>I also believe that writers are incredibly underpaid for the work they do, but the laws of supply and demand make educating clients on why they should be paying what you’re worth a difficult job at best.<img alt="not found" src={work}></img></p>
        <p>I believe that businesses aren’t people, that people are people, and as such a business should be transparent to the people that do business with them. In other words, honesty first; honesty being complete transparency to the folks that we pay as well as with the folks that pay us.</p>
        <p>I also believe that no single person in a company is more important than anyone else. That means that no one should be getting paid more just because they are a manager – they should be paid in proportion to the value of the work they produce.</p>
        <p>Finally, I believe that cooperation is better than competition. A company grows stronger if people are working together towards a common goal, and if they know that others are their to help them along the way when things get tough.</p>
        <span color="dark "> All of what I believe has gone into creating WordsRWeapons, a company that is effectively owned by the people that work for it, insomuch as they directly benefit from the value they contribut.</span>
        <p>Our rates are low because that’s what companies want right now, and that’s how we plan on taking over the marketplace before we can transform it. The plan is to create a company that commands higher rates – but we’re going to have to pay our dues first. So how can we grow and demand great content from our writers while still admittedly paying low rates?</p>

        <p>It’s simple, you only take on the jobs you want that best fit your schedule.

We have long-term relationships with our clients, who want regular work from us. We KNOW we don’t pay the best rates, but the work is always there, regardless of your availability.</p>
        <p>So what we do is give you assignments based on your availability. If you’ve got other projects that pay more, we don’t care. Heck, I’m happy for you.

But no writer is busy 100% of the time. If you are, you’re not looking for work.</p>
        <p>I should know, I built this company as a freelance writer. No matter how good you are, if you are looking for work that means you want more money. So, as a writer, you have two options. You can continue to hunt for higher-paying work, or you can do quicker, easier-to-get, lower-paying gigs.</p>
         <p>That’s where we come in. If you’ve got a dead week and you’ve put your networking time in to find more work, but there’s just nothing available, you update your calendar that you’re available for work. I assign you work based on that availability. If you don’t like the assignment, you don’t have to do it. If something better comes along, as long as you give me a fair and decent head’s up, I just get a different writer to get it done.</p>
         <p>The majority of our content might at most take a 1/2 hour to write. You might have time for 5 or 6 articles a week, in addition to all of the higher-paying gigs that are available. Maybe you are good enough that you can take one of my 1/2 hour projects and do it in 15 minutes. Better for you, better for me.</p>
         <p>This way you can spend more time working instead of hunting, and we’re not keeping you away from better-paying gigs. At the same time, we get great writers at really low prices, and our clients win as well.</p>

 <p>If all of this sounds appealing to you, great. Simply send fill out the short form below, including a cover letter, your resume, and at least two (2) published writing samples so we can get an idea of who you are as a writer. After that, we’ll take it from there.</p>
        
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Completeex3;