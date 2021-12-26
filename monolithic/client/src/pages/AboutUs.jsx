import React from 'react'
import "../css/aboutUs.css"

const AboutUs = () => {

    // const classes = useStyles();

    return (
        
            <div className='about-us'>
                <h1 className='heading'>About us</h1>
                    <p className="paragraph">We are a group of sophomore year students at the Thapar Institute of Engineering and Technology. This
                        inventory management and invoicing software is a part of our Software Engineering Project. We chose this
                        project because we saw a hurdle in our process towards an automated and modern India. An automated system 
                        of exchange and inventory used by most shopkeepers either does not exist or even if it does, it seems very 
                        outdated and it feels like it was made in the 90s. We want to create a software which automates all the 
                        common requirements involved in the process and actually improve its UI/ UX to fit modern day and age.
                        {/* <br><br> */}
                        Fortunately, good inventory software can help improve your inventory management, providing clarity and 
                        efficiency to a complicated and complex system. Whether you are a smaller business trying to grow or a 
                        larger company with new concerns raised in your warehouse system due to recent expansion, inventory 
                        control software is one of the key ways to help manage your storage and shipping solutions. Software can 
                        add efficiency, accuracy, and clarified data and history to your processes. 
                    </p>
                <div className="footer">
                    <p className="rights">© 2021 Team- Zeus</p>
                </div>
                </div>  
        
    )
}

export default AboutUs;
