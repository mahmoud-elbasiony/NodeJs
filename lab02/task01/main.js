const myMod= require("./module");

const BookFlight=new myMod.BookFlight()


BookFlight.addFlight(1,5,"cairo","alex");
BookFlight.addFlight(2,5,"cairo","alex");
BookFlight.addFlight(3,5,"cairo","alex");
BookFlight.addFlight(4,5,"cairo","alex");
BookFlight.addFlight(2,3,"cairo","alex");
BookFlight.addFlight(1,5,"cairo","alex");
BookFlight.modify(2,8,5)
BookFlight.modify(2,8,5)





// BookFlight.getFlight(1)
BookFlight.display()
