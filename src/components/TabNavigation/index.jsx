import { useState } from 'react';
import PropTypes from 'prop-types';

const TabNavigation = ({ tabs }) => {
  const [openTab, setOpenTab] = useState(1);
  const activeClasses = 'border-l border-t border-r rounded-t text-blue-700';
  const inactiveClasses = 'text-blue-500 hover:text-blue-700';

  return (
    <div className="p-6">
      <ul className="flex border-b">
        {tabs.map((tab, index) => (
          <li key={index} className="-mb-px mr-1">
            <button
              onClick={() => setOpenTab(index + 1)}
              className={`bg-white inline-block py-2 px-4 font-semibold ${openTab === index + 1 ? activeClasses : inactiveClasses}`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full">
        {tabs.map((tab, index) => (
          openTab === index + 1 && (
            <div key={index}>
              {tab.component}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

// Validación de props
TabNavigation.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default TabNavigation;
