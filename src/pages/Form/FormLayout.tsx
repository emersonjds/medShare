import Breadcrumb from '../../components/Breadcrumb';

import Chair from '../../images/items/cadeira.png'
import Andador from '../../images/items/andador.png'
import Muleta from '../../images/items/muleta.png'
import Tipoia from '../../images/items/tipoia.png'

const maintenanceItems = [
  {
    id: 1,
    name: 'Cadeira de Rodas',
    image: Chair,
    quantity: 5,
    status: 'Aguardando Peça',
    responsible: 'Henrique Mello',
    deliveryTime: 5,
  },
  {
    id: 2,
    name: 'Andador',
    image: Andador,
    quantity: 8,
    status: 'Em Manutenção',
    responsible: 'Rodrigo Silva',
    deliveryTime: 3,
  },
  {
    id: 3,
    name: 'Muleta',
    image: Muleta,
    quantity: 2,
    status: 'Em Manutenção',
    responsible: 'Rodrigo Silva',
    deliveryTime: 2,
  },
  {
    id: 5,
    name: 'Tipoia',
    image: Tipoia,
    quantity: 1,
    status: 'Em Manutenção',
    responsible: 'Rodrigo Silva',
    deliveryTime: 2,
  }
]


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
            {
              maintenanceItems.map((item) => {
                return (
                  <>
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                      <div className="flex-shrink-0">
                        <img
                          style={{
                            height: '60px',
                            width: '60px',
                          }}
                          src={item.image} alt="Brand" />
                      </div>
                      <p className="hidden text-black dark:text-white sm:block">{item.name}</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">{item.quantity}</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className={`${item.status === 'Em Manutenção' ? 'text-meta-3' : 'text-meta-6'}
                      `} > {item.status}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-black dark:text-white">{item.responsible}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-1">{item.deliveryTime}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
