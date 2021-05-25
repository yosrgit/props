import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import PropTypes from "prop-types"; 
import photo from "./profile.jpg"



const Profile = ({ fullName , bio , profession, age , alert }) => {


   

     return (


        <div > <div className="welcome"> <span style={{ color : "#ba74d6"}}>Wel</span>come! </div>
       <div className="my-profile">
           <Photo>hello {fullName }</Photo>          
            <br/><br/>
           <div className="file-import">

                    <input type="file" accept="image/*" id="file-input" onChange={Photo}/>

        </div>
           <br/>
           <p className="full-name" onClick={alert}> {fullName} </p>
           <br/>
           <div>{bio} 
               <p> Bio : Hi I'm {fullName} and I'm a web developer, currently taking a course at <a href="http://www.gomycode.com"> Gomycode</a>.
               <br/> <br/><br/> <span style={{ color : "black"}} >Feal free to contact me whenever you need any help! </span>
                </p> </div> <br/>
                <div>Profession :{profession}</div><br/>
                <div>Age : {age}</div><br/>

                </div>


                <footer style={{ color :"black",
                 fontSize:"20px" , 
                 textAlign:"center" , 
                 letterSpacing : "5px",
                 fontWeight :"bold",
                 fontFamily :"sans serif"}}> All rights Reserved 2021 (C) </footer>     
       </div>

     )
    


    }


    /*children props*/
    const Photo = props => {
        return ( <div> <img src={photo} id="output" alt="profile" style={{ height: "100px" ,
                                                                        width : "100px",
                                                                    boxShadow : "8px 5px 5px 2px grey"}}></img><div>{props.children}</div></div>)
       }

  


       Profile.propTypes = {
        fullName : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
        age : PropTypes.number,

    };
    Profile.defaultProps = {
        fullName: "M'sakni Yosr",
        profession : "designer",
        age: 26 ,
       };





       export default Profile ;