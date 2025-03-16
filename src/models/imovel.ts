import { Endereco } from './endereco';
export class Imovel {

    private id: number;
    private area: number;
    private quantBanheiros: number;
    private quantQuartos: number;
    private quantSuites: number;
    private situacao: string;
    private valorTotal: number;
    private valorIptu: number;
    private valorComissao: number;
    private quantAndares: number;
    private possuiGaragem: boolean;
    private possuiVagaGaragem: boolean;
    private possuiElevador: boolean;
    private possuiPiscina: boolean;
    private possuiAreaLazer: boolean;
    private valorCondominio: number;
    private dataCadastro: string;
    private dataAtualizacao: string;
    private endereco: Endereco;

    constructor (id: number, area: number, quantBanheiros: number, quantQuartos: number, quantSuites: number, situacao: string, valorTotal: number, valorIptu: number, valorComissao: number, quantAndares: number, possuiGaragem: boolean, possuiVagaGaragem: boolean, possuiElevador: boolean, possuiPiscina: boolean, possuiAreaLazer: boolean, valorCondominio: number, dataCadastro: string, dataAtualizacao: string, endereco: Endereco) {
        this.id = id;
        this.area = area;
        this.quantBanheiros = quantBanheiros;
        this.quantQuartos = quantQuartos;
        this.quantSuites = quantSuites;
        this.situacao = situacao;
        this.valorTotal = valorTotal;
        this.valorIptu = valorIptu;
        this.valorComissao = valorComissao;
        this.quantAndares = quantAndares;
        this.possuiGaragem = possuiGaragem;
        this.possuiVagaGaragem = possuiVagaGaragem;
        this.possuiElevador = possuiElevador;
        this.possuiPiscina = possuiPiscina;
        this.possuiAreaLazer = possuiAreaLazer;
        this.valorCondominio = valorCondominio;
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao;
        this.endereco = endereco;
    }

    public getId(): number {
        return this.id;
    }
    public getArea(): number {
        return this.area;
    }
    public getQuantBanheiros(): number {
        return this.quantBanheiros;
    }
    public getQuantQuartos(): number {
        return this.quantQuartos;
    }
    public getQuantSuites(): number {
        return this.quantSuites;
    }
    public getSituacao(): string {
        return this.situacao;
    }
    public getValorTotal(): number {
        return this.valorTotal;
    }
    public getValorIptu(): number {
        return this.valorIptu;
    }
    public getValorComissao(): number {
        return this.valorComissao;
    }
    public getQuantAndares(): number {
        return this.quantAndares;
    }
    public getPossuiGaragem(): boolean {
        return this.possuiGaragem;
    }
    public getPossuiVagaGaragem(): boolean {
        return this.possuiVagaGaragem;
    }
    public getPossuiElevador(): boolean {
        return this.possuiElevador;
    }
    public getPossuiPiscina(): boolean {
        return this.possuiPiscina;
    }
    public getPossuiAreaLazer(): boolean {
        return this.possuiAreaLazer;
    }
    public getValorCondominio(): number {
        return this.valorCondominio;
    }
    public getDataCadastro(): string {
        return this.dataCadastro;
    }
    public getDataAtualizacao(): string {
        return this.dataAtualizacao;
    }
    public getEndereco(): Endereco {
        return this.endereco;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setArea(area: number): void {
        this.area = area;
    }
    public setQuantBanheiros(quantBanheiros: number): void {
        this.quantBanheiros = quantBanheiros;
    }
    public setQuantQuartos(quantQuartos: number): void {
        this.quantQuartos = quantQuartos;
    }
    public setQuantSuites(quantSuites: number): void {
        this.quantSuites = quantSuites;
    }
    public setSituacao(situacao: string): void {
        this.situacao = situacao;
    }
    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }
    public setValorIptu(valorIptu: number): void {
        this.valorIptu = valorIptu;
    }
    public setValorComissao(valorComissao: number): void {
        this.valorComissao = valorComissao;
    }
    public setQuantAndares(quantAndares: number): void {
        this.quantAndares = quantAndares;
    }
    public setPossuiGaragem(possuiGaragem: boolean): void {
        this.possuiGaragem = possuiGaragem;
    }
    public setPossuiVagaGaragem(possuiVagaGaragem: boolean): void {
        this.possuiVagaGaragem = possuiVagaGaragem;
    }
    public setPossuiElevador(possuiElevador: boolean): void {
        this.possuiElevador = possuiElevador;
    }
    public setPossuiPiscina(possuiPiscina: boolean): void {
        this.possuiPiscina = possuiPiscina;
    }
    public setPossuiAreaLazer(possuiAreaLazer: boolean): void {
        this.possuiAreaLazer = possuiAreaLazer;
    }
    public setValorCondominio(valorCondominio: number): void {
        this.valorCondominio = valorCondominio;
    }
    public setDataCadastro(dataCadastro: string): void {
        this.dataCadastro = dataCadastro;
    }
    public setDataAtualizacao(dataAtualizacao: string): void {
        this.dataAtualizacao = dataAtualizacao;
    }
    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }
}