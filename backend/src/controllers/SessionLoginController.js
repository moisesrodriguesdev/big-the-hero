const conn = require('../database/connection');

module.exports = {
    async store(request, response){
        const { id } =  request.body;

        const ong = await conn('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this is ID' });
        }

        return response.json(ong);
    }
};