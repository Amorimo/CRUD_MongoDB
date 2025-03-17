/**
 * Processo principal
 * Estudo do vanco de dados MongoDB(CRUD)
 * @author Matheus Amorim
 */

// Importação do módulo de conexão
const {conectar,desconectar}=require('./database.js')

// Importação do módulo de dados do modelo
const clienteModel=require('./src/models/Clientes.js')

// Função para cadastrar um nobo cliente
// ATENÇÃO! Para trabalhar com banco de dados usar sempre async-await e try-catch
const salvarCliente=async(nomeCli,foneCli,cpfCli)=>{
    try {
        // Setar a estrutura de dados com os valores
        // Obs: Usar o mesmos nomes da estrutura
        const novoCliente=new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        })
        // A linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

// ------------------------------------------------------------------------------
const iniciarSistema=async()=>{
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------")
    await conectar()
    // CRUD Create (Inserção no banco de dados)
    await salvarCliente("Bill Gates", "99999-1234", "12345678900")
    await desconectar()
}
iniciarSistema()