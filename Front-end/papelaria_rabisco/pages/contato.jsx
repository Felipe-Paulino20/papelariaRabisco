import Titulo from '@/components/Titulo';
import Headerb from '../components/Headerb';
import Cardlistfunc from '@/components/Cardlistfunc';
import { useState, useEffect } from 'react';
import { getFuncionarios } from '@/services/apiReqRes';

export default function Contato() {
  const [funcionarios, setFuncionarios] = useState([]);

  async function buscaFuncionario() {
    try {
      const data = await getFuncionarios();
      console.log(data);
      setFuncionarios(data);
    } catch (error) {
      console.error("Erro ao buscar funcionários: " + error);
    }
  }

  useEffect(() => {
    buscaFuncionario();
  }, []);

  return (
    <>
      <Headerb />
      <Titulo texto="Entre em contato conosco!" />
      <Cardlistfunc funcionarios={funcionarios} />
    </>
  );
}
