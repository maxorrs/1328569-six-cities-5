import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SortingList from '../sorting-list';

import {SortingType} from '../../consts';


export default class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this._handleActivatedSort = this._handleActivatedSort.bind(this);
    this.onChangeOption = this.onChangeOption.bind(this);
  }

  _handleActivatedSort() {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  }

  onChangeOption(type) {
    this.props.onChangeSortingType(type);
    this._handleActivatedSort();
  }

  render() {
    const {isOpen} = this.state;
    const {currentSortingType} = this.props;

    const label = SortingType[currentSortingType];

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleActivatedSort}>
          {label}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <SortingList
          currentSortingType={currentSortingType}
          isOpen={isOpen}
          onChangeOption={this.onChangeOption} />
      </form>
    );
  }
}

Sorting.propTypes = {
  onChangeSortingType: PropTypes.func.isRequired,
  currentSortingType: PropTypes.oneOf([...Object.keys(SortingType)])
};
