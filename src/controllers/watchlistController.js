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

const removeFromWatchlist = async (req,res) => {
    const item = await prisma.watchlistItem.findUnique({
        where : {
            id: req.params.id
        },
    });
    if(!item){
        return res.status(400).json({error:"Item not found"});
    }

    if(item.userId !== req.user.id){
        return res.status(401).json({error:"Not allowed to delete this item"});
    }

    await prisma.watchlistItem.delete({
        where: {id: req.params.id},
    });

    res.status(200).json({
        status:"Success",
        messsage:"Item is removed successfully",
    });
};

const updateIttemInWatchlist = async(req,res) => {
    const {status, rating} = req.body;
    const item = await prisma.watchlistItem.findUnique({
        where : {
            id: req.params.id
        },
    });

    if(!item){
        return res.status(400).json({error:"Item not found"});
    }

    if(item.userId !== req.user.id){
        return res.status(401).json({error:"Not allowed to update this item"});
    }

    const updateData = {};
    if(status !== undefined) updateData.status = status.toUpperCase();
    if(rating !== undefined) updateData.rating = rating;

    const updateItem = await prisma.watchlistItem.update({
        where: {id:req.params.id},
        data:updateData,
    })

    res.status(200).json({
        status:"Success",
        messsage:"Item is removed successfully",
        data: updateItem,
    });
}

export {addToWatchlist, removeFromWatchlist, updateIttemInWatchlist};