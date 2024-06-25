import CardProdutos from "./CardProdutos"

export default function CardList(props) {
    const { produtos } = props
    console.log(produtos)
    return (
        <div className="container my-5 w-5">
            <div className="row g-5">
                
                {produtos.map((produto, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <CardProdutos
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            quantidade={produto.quantidade}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}