const conn = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.params;

        const [count] = await conn('incidents').count();

        const incidents = await conn('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id' )
            .limit(5)
            .offset(( page - 1 ) * 5)
            .select([
                'incidents.*', 
                'ongs.nome', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.cidade', 
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async store(request, response){
        const { titulo, descricao, valor } = request.body;
        const ong_id = request.headers.authorization;

        const result = await conn('incidents').insert({
            titulo,
            descricao,
            valor,
            ong_id
        });
        const id = result[0];

        return response.json({ id });
    },

    async destroy(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await conn('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.' });
        }
        
        await conn('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}