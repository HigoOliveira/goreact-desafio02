import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header } from './styles';

const HeaderComponent = ({ repository, onSelect }) => (
  <Header>
    {repository ? (
      <Fragment>
        <div>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>
              {repository.name}
            </strong>
            <small>
              {repository.owner.login}
            </small>
          </div>
        </div>
        <div>
          <span>
            <select onChange={onSelect}>
              <option value="all">
                Todas
              </option>
              <option value="open">
                Abertas
              </option>
              <option value="closed">
                Fechadas
              </option>
            </select>
          </span>
        </div>
      </Fragment>
    )
      : (
        <div>
          <p>
           Selecione um repositório para saber mais informações
          </p>
        </div>
      )
    }
  </Header>
);

HeaderComponent.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    onwer: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }),
  onSelect: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
  repository: null,
};

export default HeaderComponent;
