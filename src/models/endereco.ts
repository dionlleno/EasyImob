export class Endereco{
    private id: number;
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    private pais: string;

    constructor (id: number, cep: string, logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string, pais: string) {
        this.id = id;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }

    public getId(): number {
        return this.id;
    }
    public getCep(): string {
        return this.cep;
    }
    public getLogradouro(): string {
        return this.logradouro;
    }
    public getNumero(): string {
        return this.numero;
    }
    public getComplemento(): string {
        return this.complemento;
    }
    public getBairro(): string {
        return this.bairro;
    }
    public getCidade(): string {
        return this.cidade;
    }
    public getEstado(): string {
        return this.estado;
    }
    public getPais(): string {
        return this.pais;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setCep(cep: string): void {
        this.cep = cep;
    }
    public setLogradouro(logradouro: string): void {
        this.logradouro = logradouro;
    }
    public setNumero(numero: string): void {
        this.numero = numero;
    }
    public setComplemento(complemento: string): void {
        this.complemento = complemento;
    }
    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }
    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }
    public setEstado(estado: string): void {
        this.estado = estado;
    }
    public setPais(pais: string): void {
        this.pais = pais;
    }
}