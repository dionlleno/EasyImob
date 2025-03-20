import { TextInput } from "react-native";

export class Anotacao{
    
    private id: number
    private titulo: string;
    private conteudo: string;
    private dataCadastro: string;
    private dataAtualizacao: string;

    constructor(id: number, titulo: string, conteudo: string, dataCadastro: string, dataAtualizacao:string){
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao; 
    }

    public getId(): number{
        return this.id;
    }
    public getTitulo(): string{
        return this.titulo;
    }
    public getConteudo(): string{
        return this.conteudo;
    }
    public getDataCadastro(): string{
        return this.dataCadastro;
    }
    public getDataAtualizacao(): string{
        return this.dataAtualizacao;
    }
    public setId(id: number): void{
        this.id = id;
    }
    public setTitulo(titulo: string): void{
        this.titulo = titulo;
    }
    public setConteudo(conteudo: string): void{
        this.conteudo = conteudo;
    }
    public setDataCadastro(dataCadastro: string): void{
        this.dataCadastro = dataCadastro;
    }
    public setDataAtualizacao(dataAtualizacao: string): void{
        this.dataAtualizacao = dataAtualizacao;
    }
}