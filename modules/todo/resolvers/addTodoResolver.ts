import { GraphQLResolver } from 'pulumi-appsync-modules';
import TodoDatasource from '../datasources/TodoDatasource';
import fakeTodo from '../__fixtures__/fakeTodo';

export default new GraphQLResolver('add-todo-resolver', {
  dataSource: TodoDatasource.name,
  type: 'Mutation',
  field: 'addTodo',
  requestTemplate: `{
    "version": "2017-02-28",
    "payload": {}
}`,
  responseTemplate: JSON.stringify(fakeTodo()),
});
