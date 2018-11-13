import { DadosDomicilioBancario } from "./dados-domicilio-bancario";
import { DadosAnaliticoLancamentoFinanceiroCliente } from "./dados-analitico-lancamento-financeiro-cliente";

export class LancamentoContaCorrenteCliente{
    public numeroRemessaBanco:string;
    public dadosAnaliticoLancamentoFinanceiroCliente:DadosAnaliticoLancamentoFinanceiroCliente[];
    public nomeSituacaoRemessa:string;
    public dadosDomicilioBancario:DadosDomicilioBancario;
    public nomeTipoOperacao:string;
}