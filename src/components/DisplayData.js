import React from 'react';


class DisplayData extends React.Component{

    listOfSubmissions = () =>{
    
        return this.state.submittedData.map(data =>{
          return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div> 
        })
      }

      render(){
        //   debugger
          return (
            <div>love</div>
          )
          
      }
}

export default DisplayData