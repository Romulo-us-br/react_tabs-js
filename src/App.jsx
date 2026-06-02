import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import tabsFromServer from './tabsFromServer.json'



export const App = () => {

  const visibleTabs = getPreparedTabs(tabsFromServer);
  return (

    <div className="section">
      <h1 className="title">Selected tab is Tab 1</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active" data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink">
                Tab 1
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink">
                Tab 2
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Some text 1
        </div>
      </div>
    </div>
  )
}