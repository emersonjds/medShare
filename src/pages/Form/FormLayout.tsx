import Breadcrumb from '../../components/Breadcrumb';

import Chair from '../../images/items/cadeira.png'
import Andador from '../../images/items/andador.png'
import Muleta from '../../images/items/muleta.png'
import Bola from '../../images/items/bola.jpeg'
import Tipoia from '../../images/items/tipoia.png'


const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="Status de Manutenção" />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Items em Manuteção
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Nome
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Quantidade
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Tecnico Responsavel
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Dias para entrega
              </h5>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">

            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img
                  style={{
                    height: '60px',
                    width: '60px',
                  }}
                  src={Chair} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">Cadeira de Rodas</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">5</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-6"> Aguardando Peça</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">Henrique Mello</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-1">5</p>
            </div>

          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={Andador} alt="Brand" style={{
                  height: '60px',
                  width: '60px',
                }} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                Andador
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">8</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">Em Manutenção</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">Rodrigo Silva</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-1">2</p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={Muleta} alt="Brand"
                  style={{
                    height: '60px',
                    width: '60px',
                  }}
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">Muleta</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">3</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">Em Manutenção</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"> Clara Pires</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-1">3</p>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={Tipoia} alt="Brand"
                  style={{
                    height: '60px',
                    width: '60px',
                  }}
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                Tipoia
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">2</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">Em Manutenção</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">Gregório Marques</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-1">1</p>
            </div>
          </div>


        </div>

      </div>

    </>
  );
};

export default FormLayout;
