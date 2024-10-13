import TabAboutDetails from '../page/Home/TabAbout';
import Tabs from '../Tabs';
import TabTecnologiaDetails from '../page/Home/TabTecnologia';
import TabContatoDetails from '../page/Home/TabContato';

const tabs = [ 
  {
    key: 'sobre',
    label: 'Sobre',
    children: <TabAboutDetails />,
  },
  {
    key: 'tecnologia',
    label: 'Tecnologias',
    children: <TabTecnologiaDetails />
  },
  {
    key: 'contato',
    label: 'Contato',
    children: <TabContatoDetails />
  }
];

const Container = () => {
    return (
      <section className="w-full min-h-[85vh] h-auto bg-darkBlue flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4"> {/* Alterado para responsividade */}
          <img 
            src="https://via.placeholder.com/300" 
            alt="Descrição da imagem" 
            className="max-w-full h-auto" 
          />
        </div>

        <div className="w-full md:w-1/2 flex items-start justify-start flex-col p-4 text-tertiary">
          <h2 className="text-4xl font-bold text-left w-full m-4">Matheus Mozart</h2>
  
          <div className="w-full min-h-[300px]">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </section>
    );
}

export default Container;
