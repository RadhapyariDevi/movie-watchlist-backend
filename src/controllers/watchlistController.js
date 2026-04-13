import {prisma} from "../config/db.js";

const addToWatchlist = async (req,res)=> {
    const {movieId, status, rating} = req.body;

    //verify movie exist

    const movie = await prisma.movie.findUnique({
        where: {id: movieId},
    });

    if(!movie){
        return res.status(404).json({error: "Movie not found"});
    }

    //check duplicate
    const existingInWatchlist = await prisma.watchlistItem.findUnique({
        where: 
           { userId_movieId:{
                userId:req.user.id,
                movieId:movieId,
            }
        },
    });

    if(existingInWatchlist){
        return res.status(400).json({error: "Movie already in the watchlist"});
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data: {
            userId : req.user.id,
            movieId,
            status:status || "PLANNED",
            rating,
        },
    });

    res.status(201).json({
        status: "success",
        data: {
            watchlistItem,
        },
    });

};

export {addToWatchlist};