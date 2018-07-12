import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { IssueList, Loading } from './styles';

export default class Issues extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      full_name: PropTypes.string,
    }).isRequired,
    state: PropTypes.string.isRequired,
  }

  state = {
    issues: [],
    loading: false,
  }

  componentDidMount() {
    this.loadIssue();
  }

  componentDidUpdate(prevProps) {
    const { state, repository } = this.props;
    if (prevProps.state !== state || prevProps.repository.id !== repository.id) {
      this.loadIssue();
    }
  }

  async loadIssue() {
    const { repository, state } = this.props;
    if (repository) {
      const { full_name } = repository;
      try {
        this.setState(() => ({ loading: true }));
        const { data } = await api.get(`repos/${full_name}/issues?state=${state}`);
        this.setState({
          issues: data,
          loading: false,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  render() {
    const { issues, loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Loading>
            <i className="fa fa-spinner fa-pulse" />
          </Loading>
        ) : null}
        <IssueList>
          {issues.map(issue => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  {issue.title}
                </strong>
                <small>
                  {issue.user.login}
                </small>
                <a target="_blank" rel="noopener noreferrer" href={issue.html_url}>
                  <i className="fa fa-external-link" />
                  <span>
                    ABRIR ISSUE
                  </span>
                </a>
              </div>
            </li>))
          }
        </IssueList>
      </Fragment>
    );
  }
}
