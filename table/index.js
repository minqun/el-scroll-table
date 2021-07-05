import ElTable from './src/table';
import './src/bar.scss';
/* istanbul ignore next */
ElTable.install = function (Vue) {
  Vue.component(ElTable.name, ElTable);
};

export default ElTable;
