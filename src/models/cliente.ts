export class Cliente {

    private id: number;
    private nome: string;
    private email: string;
    private telefone: string;
    private orçamento: number;
    private situacao: string;
    private dataContato: string;
    private dataCadastro: string;
    private dataAtualizacao: string;
    
    constructor (id: number, nome: string, email: string, telefone: string, orçamento: number, situacao: string, dataContato: string, dataCadastro: string, dataAtualizacao: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.orçamento = orçamento;
        this.situacao = situacao;
        this.dataContato = dataContato;
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao;
    }
    
    public getId(): number {
        return this.id;
    }
    public getNome(): string {
        return this.nome;
    }
    public getEmail(): string {
        return this.email;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public getOrçamento(): number {
        return this.orçamento;
    }
    public getSituacao(): string {
        return this.situacao;
    }
    public getDataContato(): string {
        return this.dataContato;
    }
    public getDataCadastro(): string {
        return this.dataCadastro;
    }
    public getDataAtualizacao(): string {
        return this.dataAtualizacao;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    public setOrçamento(orçamento: number): void {
        this.orçamento = orçamento;
    }
    public setSituacao(situacao: string): void {
        this.situacao = situacao;
    }
    public setDataContato(dataContato: string): void {
        this.dataContato = dataContato;
    }
    public setDataCadastro(dataCadastro: string): void {
        this.dataCadastro = dataCadastro;
    }
    public setDataAtualizacao(dataAtualizacao: string): void {
        this.dataAtualizacao = dataAtualizacao;
    }
}