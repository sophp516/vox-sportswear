/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../components/Navbar/Navbar';
import './AboutUs.css'

const AboutUs = () => {
    /** put variables outside of return */


    return (
        <div>
            <Navbar />
            <div>
            <h2>Who We Are</h2>
            <h4>Mission</h4>
            <p>Outrageously high prices shouldn’t get in the way of promoting your organization or event. 
                At Vox Sportswear, our mission is to make your vision for custom gear an affordable reality.</p>
        
            <h4>History</h4>
            <p>We are a completely student owned and operated business that has been providing custom screen-printed and embroidered 
                gear to the Dartmouth community and beyond since 1994.</p>

            <h4>Why Vox</h4>
            <p>Our relationships with local wholesalers and printers allow us to guarantee lower prices 
                and quicker turnaround than any other supplier, while supporting local artists.</p>
            
            <div className='process-container'>
                <h2>Process</h2>
                <p>Real people working with you from start to finish.</p>
                
                <h4>Work with a Vox Rep</h4>
                <p>Working one-on-one with you through every step, 
                    your Vox rep will ensure top quality at an unbeatable price.</p>

                <h4>Pick Your Products</h4>
                <p>Check out our catalog and our featured products to see some of our 
                    offerings. Or let us find the perfect item for you.</p>


                <h4>Finalize Your Design</h4>
                <p>We'll work with what you have or come up with something from scratch. 
                    Our design team's eager to make your ideas a reality.</p>

                <h4>Review and Pay</h4>
                <p>Once you're happy with your order, you can pay 
                    securely through our easy online system.</p>

                <h4>Get Your Gear</h4>
                <p>Your items will arrive at your door about 
                    two weeks from when your order's finalized. Rush orders available .</p>
            
            </div>
            </div>



            <h2>Partnership</h2>
            {/** code for form: https://www.w3schools.com/react/react_forms.asp */}



        </div>
        
    )


}

export default AboutUs;

