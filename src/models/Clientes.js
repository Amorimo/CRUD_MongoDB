/**
 * Modelo de dados para construção das coleções("Tabelas")
 * Clientes
 */

// Importação dos recursos do framework mangoose
const{model,Schema}=require ('mongoose')

// Criação da estrutura da coleção clientes
const clientesSchema=new Schema({
    nomeCliente: {
        type:String
    },
    foneCliente:{
        type:String
    },
    cpf:{
        type:String,
        unique:true,
        index:true
    },
    dataCadastro:{
        type:Date,
        default:Date.now
    }
},{versionKey:false})// Não versionar os dados armazenados

// Exportar para o main o modelo de dados
// Obs: Clientes será o nome da coleção
module.exports=model('Clientes',clientesSchema)