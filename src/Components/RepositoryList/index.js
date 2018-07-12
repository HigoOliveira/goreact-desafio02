import React from 'react';
import PropTypes from 'prop-types';
import { Repository } from './styles';

const emptyList = () => (
  <p>
    Adicione um repositório a sua lista.
  </p>);

const RepositoryList = ({ repositories, onSelectRepository }) => (
  <Repository>
    {repositories.length >= 1
      ? repositories.map(repo => (
        <li
          key={repo.id}
          onClick={() => { onSelectRepository(repo); }}
        >
          <img src={repo.owner.avatar_url} alt={repo.name} />
          <div>
            <strong>
              {repo.name}
            </strong>
            <small>
              {repo.owner.login}
            </small>
          </div>
          <i className="fa fa-angle-right" />
        </li>
      ))
      : emptyList()
    }
  </Repository>
);

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
      }),
    }),
  ).isRequired,
  onSelectRepository: PropTypes.func.isRequired,
};

export default RepositoryList;
