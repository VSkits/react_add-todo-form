import React from 'react';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

type Props = {
  todoInfo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => {
  return (
    <article
      className={`TodoInfo ${todoInfo.completed && 'TodoInfo--completed'}`}
    >
      <h2 className="TodoInfo__title">{todoInfo.title}</h2>
      <UserInfo user={todoInfo.user} />
    </article>
  );
};
