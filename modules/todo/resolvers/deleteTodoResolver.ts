import { GraphQLResolver } from 'pulumi-appsync-modules';
import TodoDatasource from '../datasources/TodoDatasource';

export default new GraphQLResolver('delete-todo-resolver', {
  dataSource: TodoDatasource.name,
  type: 'Mutation',
  field: 'deleteTodo',
  requestTemplate: `{
    "version": "2017-02-28",
    "payload": {}
}`,
  responseTemplate: JSON.stringify(true),
});
