export class Customer {
    constructor (nome: string, email: string, telefone: string, cpf: string, endereco: string, cidade: string, estado: string, cep: string, dataNascimento: string, dataCadastro: string, dataAtualizacao: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao;
    }
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    dataNascimento: string;
    dataCadastro: string;
    dataAtualizacao: string;

    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getTelefone() {
        return this.telefone;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    getCidade() {
        return this.cidade;
    }
    getEstado() {     
        return this.estado;
    }
    getCep() {
        return this.cep;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    getDataCadastro() {
        return this.dataCadastro;
    }
    getDataAtualizacao() {
        return this.dataAtualizacao;
    }
    setNome(nome: string) {
        this.nome = nome;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setTelefone(telefone: string) {
        this.telefone = telefone;
    }
    setCpf(cpf: string) {
        this.cpf = cpf;
    }
    setEndereco(endereco: string) {
        this.endereco = endereco;
    }
    setCidade(cidade: string) {
        this.cidade = cidade;
    }
    setEstado(estado: string) {
        this.estado = estado;
    }
    setCep(cep: string) {
        this.cep = cep;
    }
    setDataNascimento(dataNascimento: string) {
        this.dataNascimento = dataNascimento;
    }
    setDataCadastro(dataCadastro: string) {
        this.dataCadastro = dataCadastro;
    }
    setDataAtualizacao(dataAtualizacao: string) {
        this.dataAtualizacao = dataAtualizacao;
    }
}