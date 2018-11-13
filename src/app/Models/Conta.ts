import { TotalControleLancamento } from "./total-controle-lancamento";
import { ListaControleLancamento } from "./lista-controle-lancamento";

export class Conta{
    public indice: string;
    public tamanhoPagina: string;
    public totalElements: string;
    public totalControleLancamento: TotalControleLancamento;
    public listaControleLancamento: ListaControleLancamento[];

}
