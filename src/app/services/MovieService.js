const Movie = require("../models/Movie")

class MovieService {
    async insert(data){
        try {
            const { title, director, copy_amount } = data

            const movieExists = await Movie.findByTitle(title)

            if(movieExists){
                return {
                    error: true,
                    statusCode: 400,
                    message: "Movie already exists"
                }
            }

            const movie = await Movie.create({ title, director, copy_amount })

            return {
                error: false,
                statusCode: 201,
                data: movie
            }
        } catch(err){
            return {
                error: true,
                statusCode: 500,
                message: err.message
            }
        }
    }

    async getAll(query){
        try {
            const movies = await Movie.find(query)

            if(!movies.length){
                return {
                    error: true,
                    statusCode: 404,
                    message: "No movie was found"
                }
            }
    
            return {
                error: false,
                statusCode: 200,
                data: movies
            }
        } catch(err){
            return {
                error: true,
                statusCode: 500,
                message: err.message
            }
        }
    }

    async update(id, body){
        try {
            let movie = await Movie.findOne(id)

            if(!movie){
                return {
                    error: true,
                    statusCode: 404,
                    message: "Movie not found"
                }
            }

            movie = await Movie.update(id, body)
    
            return {
                error: false,
                statusCode: 200,
                data: movie
            }
        } catch(err){
            return err
        }
    }
    
    async delete(id){
        try {
            await Movie.delete(id)

            return {
                error: false,
                statusCode: 204,
            }
        } catch(err){
            return {
                error: true,
                statusCode: 500,
                message: err.message
            }
        }

    }
}

module.exports = MovieService