import React from "react";
import ReactToPrint from "react-to-print";
import './style.css';

class VehiclePrint extends React.Component{

        render(){
        return(
            <div className='main-canvus'>
                <div className='form-title'>
                Application for Vehical Reservation 
                </div>
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                    <label>Date: ....................</label>
                </div>
                <div class="grid-item">
                <label>Vehicle No: ....................</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>

                <div class="grid-container01">
                <div class="grid-item">
                </div>
                
                <div class="grid-item">
                <label> Drive the vehicle for the benefit of the Department/Faculty at ......................  on ........................... as described below</label>
                <div className='form-para'>
                    Purpose : <label className='form-details'>...........................................</label>
                </div>
                <div className='form-para'>
                    Route From : <label className='form-details'>...........................................</label> To: <label className='form-details'>...........................................</label>
                </div>
                <div className='form-para'>
                    Return From : <label className='form-details'>...........................................</label> To: <label className='form-details'>...........................................</label>
                </div>
                <div className='form-para'>
                    Expected Time (Hr) : <label className='form-details'>...........................................</label>
                </div>
                <div className='form-para'>
                    Expected Distance (km) : <label className='form-details'>...........................................</label>
                </div>

                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item-box">
                    
                    <label className='form-para'>Ask the officer in charge of the vehicle for proper instructions</label><br/>
                    <label className='form-para'>Bill eka danna ona account eka :..............................</label><br/>
                    <label className='form-para'>Project Number :.....................................</label>
                </div>
                <div class="grid-item">
                <label>Officers on duty for the relevant journey :</label><br/>
                <label>...............................</label><br/>
                <label>...............................</label><br/>
                <label>...............................</label><br/>
                </div> 
                <div class="grid-item">
                </div>
                </div>

                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                    <label>........................................</label><br/>
                    <label>Applicant</label>
                </div>
                <div class="grid-item">
                <label>........................................</label><br/>
                    <label>HOD</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>

                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>
                <hr/><br/>

                <label className='form-para'> I recommend reserving vehicle number ..............................</label>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                    <label>........................................</label><br/>
                    <label>Clack</label>
                </div>
                <div class="grid-item">
                <label>........................................</label><br/>
                    <label>A R </label>
                </div> 
                <div class="grid-item">
                </div>
                </div>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>
                <hr/><br/><br/>

                <label className='form-para'><strong>(Gallen pitathata yana vahana)</strong></label><br/><br/>
                
                <label className='form-para'>I recommend reserving the above vehicle</label>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
    
                </div>
                <div class="grid-item">
                <label>........................................</label><br/>
                    <label>DEAN</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>

                <label className='form-para'>I recommend reserving the above vehicle</label>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
    
                </div>
                <div class="grid-item">
                <label>........................................</label><br/>
                    <label>VC</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>

                <label className='form-para'>(Applications not completed properly will be rejected)</label>
                <hr/><br/>

                <label className='form-para'>Drive the vehicle for the benefit of the Department/Faculty at ........  on ............... as described below</label><br/>
                
                <label className='form-para'>The following parts should be certified by the officer authorized to use the vehicle mentioned here and handed over to the security officer at the main gate.</label>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                    <label>........................................</label><br/>
                    <label>Driver</label>
                </div>
                <div class="grid-item">
                <label>........................................</label><br/>
                    <label>XXXXXXX </label>
                </div> 
                <div class="grid-item">
                </div>
                </div>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div>
                <div class="grid-item">
                <label>Date: ....................</label>
                </div> 
                <div class="grid-item">
                </div>
                </div>
                <hr/><br/><br/>

                <label className='form-para'>This section must be filled in by the officer authorized to use the vehicle and the number of kilometers mentioned here should also be mentioned in the driving record book</label><br/><br/>
                
                <label className='form-para'>(01). The number of kilometers recorded in the meter of the vehicle at the exit of the main gate:<label className='form-details'>...........................................</label></label><br/><br/>
                
                <label className='form-para'>(02). The number of kilometers recorded in the meter of the vehicle when returning to the main gate: <label className='form-details'>...........................................</label></label><br/><br/>
                
                <div class="grid-container">
                <div class="grid-item">
                <label>Name: ....................</label>
                </div>
                <div class="grid-item">
                <label>Signature: ....................</label>
                </div> 
                <div class="grid-item">
                <label>Date: ....................</label>
                </div>
                </div>
                <hr/>

                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label className='form-para'>Senior Assistant Registar: </label><br/><br/>
                <label className='form-para'>Date: ....................</label>
                </div>
                <div class="grid-item">
                <br/>
                <label className='form-para'>Serial Number: ....................</label><br/>
                <label className='form-para'>Vehicle Number: ....................</label>
                </div>
                <div class="grid-item">
                </div>
                </div>

                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label className='form-para'>Jurney started time : ...................................</label><br/><br/>
                <label className='form-para'>Date: ....................</label>
                </div>
                <div class="grid-item">
                <br/>
                <label className='form-para'>Return Time : ....................</label><br/>
                <label className='form-para'>Vehicle Number: ....................</label>
                </div>
                <div class="grid-item">
                </div>
                </div>

                <label className='form-para'>If the goods were carried at the time of departure, the gate license number:<label className='form-details'>...........................................</label></label><br/><br/>
                
                <label className='form-para'>Total kilometers traveled for the journey:<label className='form-details'>...........................................</label></label><br/><br/>
                
                <div class="grid-container">
                <div class="grid-item">
                </div>
                <div class="grid-item">
                <label className='form-para'>Inspected by(.....): </label><br/><br/>
                <label className='form-para'>Signature : ....................</label><br/>
                <label className='form-para'>Date: ....................</label>
                </div>
                <div class="grid-item">
                <label className='form-para'>Inspected by(.....): </label><br/><br/>
                <label className='form-para'>Signature : ....................</label><br/>
                <label className='form-para'>Date: ....................</label>
                </div>
                <div class="grid-item">
                </div>
                </div>
                <hr/><br/>
                
                <label className='form-para'>xxxxxxxxxxxxxxxxxx</label><br/><br/>
                <label className='form-para'>.............................................</label><br/><br/>
                <label className='form-para'>Main security officer</label><br/><br/>
                
                </div> 
                <div class="grid-item">
                </div>
                </div>
                
                
            </div>
        )
    }}


class PrintForm extends React.PureComponent {
    render() {
      return (
        <div>
            <VehiclePrint ref={el => (this.componentRef = el)} />
         <button class="button button2">
          <ReactToPrint
            trigger={() => {
              
              return <a href="#"><div className='btn-print'>Print!</div></a>;

            }}
            content={() => this.componentRef}
          />
          </button>
          <hr/>
          
        </div>
      );
    }
  }

  export default PrintForm;