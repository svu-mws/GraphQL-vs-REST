const {Seeder} = require("mongoose-data-seed");

const User = require("../backend/Models/User");

const data = [
    {
        name: "Ahmad",
        email: "ahmad.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
        name: "Mhd",
        email: "mhd.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        name: "Mahmoud",
        email: "mahmoud.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/68.jpg"
    }
];

class UsersSeeder extends Seeder {
    async shouldRun() {
        return User.countDocuments()
            .exec()
            .then(count => count === 0);
    }

    async run() {
        return User.create(data);
    }
}

module.exports = UsersSeeder;
