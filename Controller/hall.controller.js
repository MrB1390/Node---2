

const rooms = [
  {
    room_id: 1,
    room_name: "chera",
    room_seats: 50,
    room_status: "available",
    amentities: "Ac,Projector,cushions,speakers",
    price_perhrs: 2000,
  },
  {
    room_id: 2,
    room_name: "chola",
    room_seats: 100,
    room_status: "available",
    amentities: "Ac,Projector,cushions,speakers,LCD Screen",
    price_perhrs: 4000,
  },
  {
    room_id: 3,
    room_name: "pandya",
    room_seats: 150,
    room_status: "not-available",
    amentities: "Ac,Projector,cushions,speakers,LED screen",
    price_perhrs: 8000,
  },
  {
    room_id: 4,
    room_name: "R.Chola",
    room_seats: 200,
    room_status: "available",
    amentities: "Ac,Projector,cushions,speakers,3D screen",
    price_perhrs: 10000,
  },
];

const bookingRoom = [];

export const getRoomDetails = (req,res) => {
      const data = rooms;
      res.status(200).send(data);
}

export const createRoom = (req,res) => {
   try {
       const {room_seats,room_status,amentities,price_perhrs,room_name} = req.body;
       const room_check = rooms.filter((e) => e.room_name === room_name);
       if(room_check.length > 0){
        return res.status(400).json({
            message: "Room name Already Exists"
        })
       }
       const roomData = {
            id: rooms.length+1,
            room_name: room_name,
            room_seats: room_seats,
            room_status: room_status,
            amentities: amentities,
            price_perhrs: price_perhrs
       }
       rooms.push(roomData)
       res.status(200).json({message: "Room created Successfully", Room: roomData})
   } catch (error) {
       res.status(500).json({
        message: "Error adding Room",
       })
   }

}

export const bookRoom = (req,res) => {
    try {
        const {customer_name, date, start_time,end_time, roomId,room_name} = req.body;
        const checkRoom = rooms.filter((e) => e.room_status === "available" && e.room_id == roomId);
        if(!checkRoom.length){
            return res.status(400).json({
                message: "Room not available"
            })
        }else{
            const bookDate = bookingRoom.filter((e)=>e.booked_date === date);
            if(bookDate.length > 0){
                return res.status(400).json({
                    message: "Date not available"
                })
            } else {
                const booking = {
                   customer_name,
                   start_time,
                   end_time,
                   room_name,
                   roomId,
                   Date: date,
                   booking_id: bookingRoom.length+1,
                   booked_date: date,
                   status: "booked"
                }
               bookingRoom.push(booking);
               res.status(200).json({message: "Booked Successfully", Room: booking})
            }

        }
    } catch (error) {
        res.status(500).json({
            message: "Error booking Room",
           })
    }
}

export const bookedRoom = (req,res) => {

    try {
        const data = bookingRoom;
        res.status(200).json({message:"Fetched Succesfully", booked: data})
    } catch (error) {
        res.status(500).json({
            message: "Error Fetching Room details",
           })
    }
   
}

export const customerData = (req,res) => {
    try {
        const customer =  bookingRoom.map((item) => {
            return {
                customer_name: item.customer_name,
                start_time:item.start_time,
                end_time:item.end_time,
                room_name:item.room_name,
        }
        })
        res.status(200).json({
            message:"Fetched Customer Details",
            data: customer
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Fetching Customer details",
           })
    }
}

export const bookCount = (req,res) =>{
    try {
        const {customer_name} = req.params;
        const customerbook = bookingRoom.filter((e) =>  e.customer_name === customer_name);
        if(!customerbook.length){
            res.status(404).json({
                message: "Customer not Found",
               })
        }
        res.status(200).json({
            message: "fetched",
            customer_name,
            book_count: customerbook.length,
            bookings: customerbook
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Fetching Booking details",
           })
    }
}