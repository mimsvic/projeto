import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// Definindo o componente PowerBIEmbed
const PowerBIEmbed = () => (
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl w-full md:w-880">
    <h2 className="font-semibold text-xl mb-4">Power BI Report</h2>
    <iframe
      src="https://app.powerbi.com/reportEmbed?reportId=3d5eae63-d5bb-4c31-bd62-cb84f1ed5009&autoAuth=true&ctid=2f42e1f7-25a1-47b0-94f3-1a0429e4571e"
      width="100%"
      height="600"
      frameBorder="0"
      allowFullScreen
      title="Power BI Embed"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className={`mt-24 ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <PowerBIEmbed /> {/* Aqui você usa o componente PowerBIEmbed */}
      {/* Outros componentes ou conteúdo podem ser adicionados aqui */}
    </div>
  );
};

export default Ecommerce;
