import React from "react";

const Contactus = () => {
  return (
    <div>
      <div className="contactform">
        <div className="flex-co">
          <h1>We Are Waiting !</h1>
              </div>
              <div className="flex-co">
         <p className="c"> Have questions about pricing, plans, or our Awesome Product? Fill out
          the form and a sales representative will be in touch shortly.</p>
          </div>
          <br /><br /><br />
         <div className="flex-co">
        <form action="#">
            <div className="form1">
          <p className='formcontent'>Name</p><br />
          <input  type="text" placeholder='Enter name here' name="" id="" /><br />
          <p className='formcontent'>Email</p><br />
          <input className= '' type="text" placeholder='Your Email' name="" id=""/><br />
          <p className='formcontent' >Phone</p><br />
          <input type="number" className='' placeholder='Your Phone number' name="" id="" /><br />
          <p className='formcontent'>Company Name</p><br />
          <input type="text"className='' placeholder='Enter your Company name' name="" id="" /><br />
          <p className='formcontent'>Company Domain</p><br />
          <input type="text" className='' placeholder='Business Category' name="" id="" /><br />
          <div className="flex-co">
          <div className="submit-div">
          <input className='btn-submit'type="submit" value="Submit" /><br />
          </div>
          </div>
          </div>
        </form>
        </div>
          </div>
      
    </div>
  );
};

export default Contactus;
