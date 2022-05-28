import React, {useState} from 'react';
import * as emailjs from 'emailjs-com';
import './styles.css';


function Contact () {
    const [send,setSend]=useState(false);
    const SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID= process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID= process.env.REACT_APP_USER_ID;
  
function sendEmail(e){
e.preventDefault();
console.log(process.env)
emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,USER_ID)
.then((result)=>{setSend(true);},
(error) => {console.log('error sending email' + error)});
e.target.reset();
}

return(
    <div>
       
       <div class="container">
        <div class="content">




            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h4>Hours</h4>
                        </div>
                        <div class="row">
                            <div class="card-body">
                                <div class="col-12 hours">
                                    <ul>
                                        <li>Mon 12:00pm - 5:00pm</li>
                                        <li>Tues 2:00pm - 7:00pm</li>
                                        <li>Wed 2:00pm - 7:00pm</li>
                                        <li>Thurs 2:00pm - 7:00pm</li>
                                        <li>Fri 2:00pm - 7:00pm</li>
                                        <li>Sat 12:00pm - 7:00pm</li>
                                        <li>Sun 12:00pm - 3:00pm</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h4>Address</h4>
                        </div>
                        <div class="row">
                            <div class="card-body">
                                <div class="col-12">
                                    <a href="https://goo.gl/maps/RnntkCeCz755Nwyk9">1029 Findley Dr
Pittsburgh, PA, 15221
</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header">
                            <h4>Phone</h4>
                        </div>
                        <div class="row">
                            <div class="card-body">
                                <div class="col-12">
                                    <a href="tel:412-879-1989">412-879-1989</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h4>Drop us a line</h4>
                        </div>
                        <div class="row">
                            <div class="card-body">
                                <div class="col-12">
                                    <form onSubmit={(e)=>sendEmail(e)}>
                                        <div class="form-group row">
                                            <label for="firstName" class="col-md-2 col-form-label">First Name</label>
                                            <div class="col-md-10"><input id="firstName" type="text" name="firstName"
                                                    placeholder="First Name" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="lastName" class="col-md-2 col-form-label">Last Name</label>
                                            <div class="col-md-10"><input id="lastName" type="text" name="lastName"
                                                    placeholder="Last Name" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="areaCode" class="col-md-2 col-form-label">Contact Tel.</label>
                                            <div class="col-5 col-md-3"><input type="tel" id="areaCode" name="areaCode"
                                                    placeholder="Area code" class="form-control" />
                                            </div> <label for="telNum" class="col-md-2 col-form-label">Phone</label>
                                            <div class="col-5"><input id="telNum" name="telNum" placeholder="Tel. number"
                                                    class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-md-2 col-form-label">Email</label>
                                            <div class="col-md-10"><input id="email" type="email" name="email"
                                                    placeholder="Email" class="form-control" />
                                            </div>
                                        </div>
                                  
                                        <div class="form-group row"><label for="feedback"
                                                class="col-md-2  col-form-label">Comment</label>
                                            <div class="col-md-10"><textarea class="form-control" id="comment"
                                                    name="comment" rows="8"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-md-2 col-md-10">
                                                <button type="submit" class="btn btn-primary">Send</button>
                                            </div>
                                        </div>

                                    </form>
                                    {send ? (<div style={{backgroundColor:"red",color:"white", margin:"auto", width:"15%", padding:"10px", borderRadius:"15px"}}><div style={{margin:"auto"}}>Email sent!</div></div>):(<></>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>
);
}

export default Contact;