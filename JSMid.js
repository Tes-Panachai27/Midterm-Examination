document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function () {
    var sensor = document.querySelector('#type').value;   
        if(sensor == "flow"){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
            .then(response => response.json())
            .then(data1 => {
                console.log(data1);
                const id1 = document.querySelector('#number').value;
                    if(id1 == "0"){
                    const inname = data1[0];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;                    
                    }
                    if(id1 == "1"){
                    const inname = data1[1];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;
                    }
                    if(id1 == "2"){
                    const inname = data1[2];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;                            
                    }
                    if(id1 == 3){
                    const inname = data1[0];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                    const inname1 = data1[1];
                        document.querySelector('#to2').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.type}<br> 
                        plant-site &nbsp&nbsp= ${inname1["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname1.value} ${inname1.unit}<br>LRL-URL = ${inname1.range} `   
                    const inname2 = data1[2];
                        document.querySelector('#to3').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.type}<br> 
                        plant-site &nbsp&nbsp= ${inname2["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname2.value} ${inname2.unit}<br>LRL-URL = ${inname2.range} `;
                    }
                    if(id1 > "3" ){
                        document.querySelector('#to1').innerHTML =`Invalid Sensor`;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;
                    }                    
                })
                .catch(error => {                               
                    console.log('Error:', error);
                });
                return false;
            }  
        if(sensor == "level"){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data2 => {
                console.log(data2);
                const id2 = document.querySelector('#number').value;
                    if(id2 == "0"){
                    const inname = data2[0];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;                    
                    }
                    if(id2 == "1"){
                    const inname = data2[1];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;
                    }
                    if(id2 == "2"){
                    const inname = data2[2];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;                            
                    }
                    if(id2 == 3){
                    const inname = data2[0];
                        document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                        plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                    const inname1 = data2[1];
                        document.querySelector('#to2').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.type}<br> 
                        plant-site &nbsp&nbsp= ${inname1["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname1.value} ${inname1.unit}<br>LRL-URL = ${inname1.range} `   
                    const inname2 = data2[2];
                        document.querySelector('#to3').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.type}<br> 
                        plant-site &nbsp&nbsp= ${inname2["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname2.value} ${inname2.unit}<br>LRL-URL = ${inname2.range} `;
                    }
                    if(id2 > "3" ){
                        document.querySelector('#to1').innerHTML =`Invalid Sensor`;
                        document.querySelector('#to2').innerHTML =``;
                        document.querySelector('#to3').innerHTML =``;
                    }                    
                })
                .catch(error => {                               
                    console.log('Error:', error);
                });
                return false;
            }

            if(sensor == "temperature"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                .then(response => response.json())
                .then(data3 => {
                    console.log(data3);
                    const id3 = document.querySelector('#number').value;
                        if(id3 == "0"){
                        const inname = data3[0];
                            document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                            plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                            document.querySelector('#to2').innerHTML =``;
                            document.querySelector('#to3').innerHTML =``;                    
                        }
                        if(id3 == "1"){
                        const inname = data3[1];
                            document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                            plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                            document.querySelector('#to2').innerHTML =``;
                            document.querySelector('#to3').innerHTML =``;
                        }
                        if(id3 == "2"){
                        const inname = data3[2];
                            document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                            plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                            document.querySelector('#to2').innerHTML =``;
                            document.querySelector('#to3').innerHTML =``;                            
                        }
                        if(id3 == 3){
                        const inname = data3[0];
                            document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                            plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                        const inname1 = data3[1];
                            document.querySelector('#to2').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.type}<br> 
                            plant-site &nbsp&nbsp= ${inname1["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname1.value} ${inname1.unit}<br>LRL-URL = ${inname1.range} `   
                        const inname2 = data3[2];
                            document.querySelector('#to3').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.type}<br> 
                            plant-site &nbsp&nbsp= ${inname2["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname2.value} ${inname2.unit}<br>LRL-URL = ${inname2.range} `;
                        }
                        if(id3 > "3" ){
                            document.querySelector('#to1').innerHTML =`Invalid Sensor`;
                            document.querySelector('#to2').innerHTML =``;
                            document.querySelector('#to3').innerHTML =``;
                        }                    
                    })
                    .catch(error => {                               
                        console.log('Error:', error);
                    });
                    return false;
                }
                
                if(sensor == "pressure"){
                    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                    .then(response => response.json())
                    .then(data4 => {
                        console.log(data4/-96);
                        const id4 = document.querySelector('#number').value;
                        if(id4 == "0"){
                            const inname = data4[0];
                                document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                                plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                                document.querySelector('#to2').innerHTML =``;
                                document.querySelector('#to3').innerHTML =``;                    
                            }
                            if(id4 == "1"){
                            const inname = data4[1];
                                document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                                plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                                document.querySelector('#to2').innerHTML =``;
                                document.querySelector('#to3').innerHTML =``;
                            }
                            if(id4 == "2"){
                            const inname = data4[2];
                                document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                                plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                                document.querySelector('#to2').innerHTML =``;
                                document.querySelector('#to3').innerHTML =``;                            
                            }
                            if(id4 == 3){
                            const inname = data4[0];
                                document.querySelector('#to1').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname.type}<br> 
                                plant-site &nbsp&nbsp= ${inname["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname.value} ${inname.unit}<br>LRL-URL = ${inname.range} `;
                            const inname1 = data4[1];
                                document.querySelector('#to2').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname1.type}<br> 
                                plant-site &nbsp&nbsp= ${inname1["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname1.value} ${inname1.unit}<br>LRL-URL = ${inname1.range} `   
                            const inname2 = data4[2];
                                document.querySelector('#to3').innerHTML =`sensor &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.name}<br>Type &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= ${inname2.type}<br> 
                                plant-site &nbsp&nbsp= ${inname2["plant-site"]}<br>value &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=  ${inname2.value} ${inname2.unit}<br>LRL-URL = ${inname2.range} `;
                            }
                            if(id4 > "3" ){
                                document.querySelector('#to1').innerHTML =`Invalid Sensor`;
                                document.querySelector('#to2').innerHTML =``;
                                document.querySelector('#to3').innerHTML =``;
                            }                    
                        })
                        .catch(error => {                               
                            console.log('Error:', error);
                        });
                        return false;
                    }
                          
}});

