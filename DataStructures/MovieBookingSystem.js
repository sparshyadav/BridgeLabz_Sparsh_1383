class User {
    constructor(userName, userEmail, userPhoneNumber) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPhoneNumber = userPhoneNumber;
    }
}

class Show {
    constructor(movieName, theatreName, totalSeats, ticketPrice) {
        this.movieName = movieName;
        this.theatreName = theatreName;
        this.totalSeats = totalSeats;
        this.showPrice = ticketPrice;
        this.currentlyBookedSeats = 0;
    }

    availableSeats() {
        return this.totalSeats - this.currentlyBookedSeats;
    }

    bookSeats(seats) {
        if (seats <= this.availableSeats()) {
            this.currentlyBookedSeats += seats;
            console.log(`${seats} seats successfully booked for ${this.movieName} at ${this.theatreName} for ${seats * this.showPrice}.`);
        } else {
            console.log(`Not enough seats available! Only ${this.availableSeats()} seats left.`);
        }
    }
}

class Theatre {
    constructor(theatreName) {
        this.theatreName = theatreName;
        this.theatreShows = [];
    }

    addShow(movie, totalSeats, price) {
        const show = new Show(movie.movieName, this.theatreName, totalSeats, price);
        this.theatreShows.push(show);
    }

    listShows() {
        console.log(`Shows available at ${this.theatreName}:`);
        this.theatreShows.forEach((show, idx) => {
            console.log(`${idx + 1}. Movie: ${show.movieName}, Available Seats: ${show.availableSeats()}`);
        });
    }

    book(movieName, numSeats) {
        const show = this.theatreShows.find(show => show.movieName === movieName);

        if (!show) {
            console.log(`No show found for the movie: "${movieName}"!`);
            return;
        }

        show.bookSeats(numSeats);
    }

}

class Movie {
    constructor(movieName) {
        this.movieName = movieName;
    }
}

let user1 = new User("Sparsh", "sparshyadav@gmail.com", "1234567892");

let inox = new Theatre("PVR INOX, Meerut");

let movie1 = new Movie("Pushpa 2");
let movie2 = new Movie("Avatar 2");

inox.addShow(movie1, 200, 120);
inox.addShow(movie2, 150, 90);

inox.listShows();

inox.book("Pushpa 2", 50);
inox.book("It's What's Inside", 20);

inox.listShows();

inox.book("Pushpa 2", 200);


