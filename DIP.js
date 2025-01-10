class Database{
    connect(){
        console.log("DB connected");
    }
}

class userData{
    constructor(db){
        this.db=db;
    }

    getData(){
        this.db.connect();
        console.log("This is user data");
    }
}

const db=new Database();
const user=userData(db);
user.getData();
 