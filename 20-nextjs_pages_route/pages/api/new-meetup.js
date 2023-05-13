//api/new-meetup
import {MongoClient} from 'mongodb'
const handler = async (req, res) => {
    
    
    if (req.method === 'POST') {
        try {

            const data = req.body;
            const client = await MongoClient.connect('mongodb+srv://<USER>:<PASSWORD>@cluster0.jtf5g.mongodb.net/meetups?retryWrites=true&w=majority');
            const db = client.db();
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(data);
            client.close();
            res.status(201).json({message:'Meetup inserted!'})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
        
    }

};

export default handler;