import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const userId = "13c70754-0e06-4f5e-a2a2-857f6c9113a2";

const movies = [
    {
        title: "The Dark Knight",
        overview: "Batman faces the Joker in a battle for Gotham's soul.",
        releaseYear: 2008,
        genres: ["Action", "Crime", "Drama"],
        runtime: 152,
        posterUrl: "https://example.com/darkknight.jpg",
        createdBy: userId,
    },
    {
        title: "Stranger Things",
        overview: "Kids uncover supernatural mysteries in their small town.",
        releaseYear: 2016,
        genres: ["Sci-Fi", "Drama", "Horror"],
        runtime: 50,
        posterUrl: "https://example.com/strangerthings.jpg",
        createdBy: userId,
    },
    {
        title: "Game of Thrones",
        overview: "Noble families fight for control over the Iron Throne.",
        releaseYear: 2011,
        genres: ["Fantasy", "Drama"],
        runtime: 57,
        posterUrl: "https://example.com/got.jpg",
        createdBy: userId,
    },
    {
        title: "Money Heist",
        overview: "A group executes the biggest heist in history.",
        releaseYear: 2017,
        genres: ["Crime", "Thriller"],
        runtime: 45,
        posterUrl: "https://example.com/moneyheist.jpg",
        createdBy: userId,
    },
    {
        title: "Squid Game",
        overview: "People compete in deadly games for money.",
        releaseYear: 2021,
        genres: ["Thriller", "Drama"],
        runtime: 55,
        posterUrl: "https://example.com/squidgame.jpg",
        createdBy: userId,
    },
    {
        title: "The Big Bang Theory",
        overview: "Scientists navigate life, love, and friendship.",
        releaseYear: 2007,
        genres: ["Comedy"],
        runtime: 22,
        posterUrl: "https://example.com/bbt.jpg",
        createdBy: userId,
    },
    {
        title: "Friends",
        overview: "Follows the lives of six friends in New York.",
        releaseYear: 1994,
        genres: ["Comedy", "Romance"],
        runtime: 22,
        posterUrl: "https://example.com/friends.jpg",
        createdBy: userId,
    },
    {
        title: "The Devil Wears Prada",
        overview: "A young woman works for a demanding fashion editor.",
        releaseYear: 2006,
        genres: ["Comedy", "Drama"],
        runtime: 109,
        posterUrl: "https://example.com/prada.jpg",
        createdBy: userId,
    },
    {
        title: "How to Lose a Guy in 10 Days",
        overview: "A writer and advertiser engage in a dating experiment.",
        releaseYear: 2003,
        genres: ["Romance", "Comedy"],
        runtime: 116,
        posterUrl: "https://example.com/loseguy.jpg",
        createdBy: userId,
    },
    {
        title: "Dhurandhar",
        overview: "A story of ambition, power, and struggle.",
        releaseYear: 2024,
        genres: ["Drama"],
        runtime: 120,
        posterUrl: "https://example.com/dhurandhar.jpg",
        createdBy: userId,
    },
    {
        title: "Sita Ramam",
        overview: "A soldier's love story unfolds through letters.",
        releaseYear: 2022,
        genres: ["Romance", "Drama"],
        runtime: 163,
        posterUrl: "https://example.com/sitaramam.jpg",
        createdBy: userId,
    },
    {
        title: "Haq",
        overview: "A story about justice and identity.",
        releaseYear: 2020,
        genres: ["Drama"],
        runtime: 110,
        posterUrl: "https://example.com/haq.jpg",
        createdBy: userId,
    },
    {
        title: "Girlfriend",
        overview: "A romantic tale of love and misunderstandings.",
        releaseYear: 2019,
        genres: ["Romance"],
        runtime: 105,
        posterUrl: "https://example.com/girlfriend.jpg",
        createdBy: userId,
    },
    {
        title: "Boong",
        overview: "A young boy goes on a journey to find his father.",
        releaseYear: 2024,
        genres: ["Drama"],
        runtime: 95,
        posterUrl: "https://example.com/boong.jpg",
        createdBy: userId,
    },
    {
        title: "Vincenzo",
        overview: "A mafia lawyer returns to Korea for justice.",
        releaseYear: 2021,
        genres: ["Crime", "Drama"],
        runtime: 80,
        posterUrl: "https://example.com/vincenzo.jpg",
        createdBy: userId,
    },
    {
        title: "Twinkling Watermelon",
        overview: "A boy travels back in time through music.",
        releaseYear: 2023,
        genres: ["Drama", "Fantasy"],
        runtime: 70,
        posterUrl: "https://example.com/watermelon.jpg",
        createdBy: userId,
    },
    {
        title: "Alchemy of Souls",
        overview: "Magic users swap souls in a mystical world.",
        releaseYear: 2022,
        genres: ["Fantasy", "Romance"],
        runtime: 75,
        posterUrl: "https://example.com/alchemy.jpg",
        createdBy: userId,
    },
    {
        title: "Penthouse",
        overview: "Residents of a luxury building hide dark secrets.",
        releaseYear: 2020,
        genres: ["Drama", "Thriller"],
        runtime: 70,
        posterUrl: "https://example.com/penthouse.jpg",
        createdBy: userId,
    },
    {
        title: "Interstellar",
        overview: "Explorers travel through a wormhole in space.",
        releaseYear: 2014,
        genres: ["Sci-Fi", "Drama"],
        runtime: 169,
        posterUrl: "https://example.com/interstellar.jpg",
        createdBy: userId,
    },
    {
        title: "Inception",
        overview: "A thief enters dreams to steal secrets.",
        releaseYear: 2010,
        genres: ["Sci-Fi", "Action"],
        runtime: 148,
        posterUrl: "https://example.com/inception.jpg",
        createdBy: userId,
    }
];

const main = async () => {
    console.log("Seeding movies...");
    for (const movie of movies){
        await prisma.movie.create({
            data:movie,
        });
        console.log(`create movie: ${movie.title}`);
    }

    console.log("Seeding completed");
};

main().catch((err) => {
    console.error(err);
    process.exit(1);
}).finally(async() => {
    await prisma.$disconnect();
});
