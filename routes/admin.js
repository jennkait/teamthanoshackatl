module.exports = {
    getAdmin: (req, res) => {
        let event1 = "";
        let event2 = "";
        let event3 = "";
        let event1Query = "SELECT guest_name FROM guests WHERE event_ID = 1";
        let event2Query = "SELECT guest_name FROM guests WHERE event_ID = 2";
        let event3Query = "SELECT guest_name FROM guests WHERE event_ID = 3";
        connection.query(event1Query, (err, result)=>{
            if (err) {
                return res.status(500).send(err);
            }
            for(let packet in result) {
                event1+= (result[packet]["guest_name"]) + ", ";
            }
            console.log(event1);
            connection.query(event2Query, (err, result)=>{
                if (err) {
                    return res.status(500).send(err);
                }
                for(let packet in result) {
                    event2+= (result[packet]["guest_name"]) + ", ";
                }
                console.log(event2);
                connection.query(event3Query, (err, result)=>{
                    if (err) {
                        return res.status(500).send(err);
                    }
                    for(let packet in result) {
                        event3+= (result[packet]["guest_name"]) + ", ";
                    }
                    console.log(event3);
                    res.render('admin.ejs', {
                        event1,
                        event2,
                        event3
                    });
                }); 
            });
        }); 
    }
}