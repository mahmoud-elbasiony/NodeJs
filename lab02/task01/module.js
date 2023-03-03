

class BookFlight{
    #flights=[]
    static id=1;

    
    
    addFlight(seatNumber,flightNumber,departure,destination) {
        if(this.checkSeat(seatNumber,flightNumber)){
            let flight={
               id: BookFlight.id++,
               seatNumber:seatNumber,
               flightNumber:flightNumber,
               departure:departure,
               destination:destination,
               date:new Date().toString()

            }
            // this.printFlight(flight)
            this.#flights.push(flight);
        }
    }
    getFlight(id){
        let flag=false;
        this.#flights.forEach((f)=>{
            if(f.id==id){
                this.printFlight(f);
                flag=true;
            }
        })
        if(!flag){
            console.log("ticket doesn't exist.")

        }
    }
    checkSeat(seat,flightNumber){
            let flag=true;
            this.#flights.forEach((flight)=>{
                // console.log(seat==flight.seatNumber && flight.flightNumber ==flightNumber)
                if(seat==flight.seatNumber && flight.flightNumber ==flightNumber){
                    console.log("sorry but this seat already reserved in this flight.");
                    flag= false;
                }
            })
            return flag;
        
    }
    modify(id,seatNum,flightNum,departure,destination){
        this.#flights.forEach((flight)=>{
            console.log(id==flight.id);
            if(id==flight.id){
                if(seatNum){
                console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
                    
                    if(this.checkSeat(seatNum,flightNum)){
                        console.log("-------------------------------");

                        flight.seatNumber=seatNum;
                        flight.flightNumber=flightNum;
                        departure?flight.departure=departure:"";
                        destination?flight.destination=destination:"";

                    }
                    
                }

            }
        })

    }
    display(){
        this.#flights.forEach(this.printFlight)
    }
    printFlight(flight){
        for(let [k,v] of Object.entries(flight)){
            console.log(`${k}: ${v}`)
        }
        console.log("=================================");

    }
}



module.exports={
    BookFlight:BookFlight,
}