import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProdutos (){
	return (
		<>
			<div>
            <h1>Adicionar Produto</h1>
            <div>
                <form>
                    <fieldset>
                            <legend>Informações do Produto</legend>
                            <input type="hidden" name="id"/>
                        <div>
                            <label htmlFor="idProduto">Nome do produto</label>
                            <input type="text" name = "nome" id="idProd"/>
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição</label>
                            <input type="text" name = "desc" id="idDesc"/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço do produto</label>
                            <input type="text" name = "preco" id="idPreco"/>
                        </div>
                        <button>Adicionar</button>
                        <button>Cancelar</button>
                    </fieldset>
                </form>
            </div>
        </div>
		</>
	)
					
}