import React, { Component, Fragment } from 'react';

import {
  Container,
  Sidebar,
  Content,
  Center,
} from './styles';

import RepositoryList from '../../Components/RepositoryList';
import Issues from '../../Components/Issues';
import Header from '../../Components/Header';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    issue: 'all',
    currentRepository: null,
    repositoryError: false,
    loading: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { repositories, repositoryInput } = this.state;

    if (repositoryInput === '') {
      this.setState({ repositoryError: true });
      return;
    }

    try {
      this.setState({ loading: true });
      const { data } = await api.get(`/repos/${repositoryInput}`);
      this.setState(() => ({
        repositories:
        [...repositories, data],
        repositoryInput: '',
        repositoryError: false,
      }));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSelectRepository = (repository) => {
    const { repositories } = this.state;

    const currentRepository = repositories.find(repo => repo.id === repository.id);
    if (repository) {
      this.setState({ currentRepository });
    }
  }

  handleSelectIssueState = (e) => {
    this.setState({ issue: e.target.value });
  }

  render() {
    const {
      repositories,
      repositoryInput,
      currentRepository,
      repositoryError,
      loading,
      issue,
    } = this.state;
    return (
      <Container>
        <Sidebar withError={repositoryError}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Novo repositório"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-plus" />}
            </button>
          </form>
          <hr />
          <RepositoryList
            repositories={repositories}
            onSelectRepository={this.handleSelectRepository}
          />
        </Sidebar>
        <Content>
          { currentRepository ? (
            <Fragment>
              <Header repository={currentRepository} onSelect={this.handleSelectIssueState} />
              <Issues repository={currentRepository} state={issue} />
            </Fragment>
          )
            : (
              <Center>
                <p>
                  Selecione um repositório para mais informações
                </p>
              </Center>
            )
        }
        </Content>
      </Container>
    );
  }
}
