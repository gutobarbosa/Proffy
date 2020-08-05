import express from 'express';
import routes from './routes';
import cors from 'cors';
//console.log('Hello World');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//Rotas
//https://localhost:3333/users
//https://localhost:3333/contact
// cada endereço desse é uma rota
// e o final como por exemplo, contact é o recurso acessado.

//GET: Buscar ou listar informações
//POST: Criar alguma nova informação no backend
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informacao existente


//Parametros

//Corpo da requisição (Request body): Dados para a criação
// ou atualização de um registro
//Route params: Identificar um recurso na nossa rota que eu quero atualizar ou deletar
// esse params vai aqui, por exemplo (app.get('/users/:id', (request,response))
//console.log(request.params);
//query Params: Paginação, Filtros, ordenação (console.log(request.query))

/*app.get('/', (request,response) =>{
    //  return response.send('hello world')
    //  console.log('acessou a rota');
    const users = [
      {name:'Augusto',age:'25'},
      {name:'Bruno',age:'24'},
      {name:'Isabella',age:'25'},
    ]
  
    return response.json({ message:'Hello World'});
  
  });

app.post('/users', (request,response) =>{
  //  return response.send('hello world')
  //  console.log('acessou a rota');

 console.log(request.body);

  const users = [
    {name:'Augusto',age:'25'},
    {name:'Bruno',age:'24'},
    {name:'Isabella',age:'25'},
  ]

  return response.json(users);

});

//www.minhaapi.com.br:3333
// A nossa sera
//localhost:3333*/
app.listen(3333);

// Oque a instalacao do knex faz ?
// SELECT * FROM users
//knex('users).select('*') 