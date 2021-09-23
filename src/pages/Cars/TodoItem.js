import styled from "styled-components";
import useInput from "../App/useInput";
import {
  FaRegCircle,
  FaCheckCircle,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";

const TodoContent = styled.div`
  margin-left: 20px;
  margin-top: -3px;
  ${(props) => props.isDone === true && `text-decoration: line-through;`}
`;

const TodoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  color: #2878f6;
  svg {
    margin-right: 40px;
  }
`;
const BtnIcon = styled.span`
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 1.2em;
  svg {
    height: 100%;
  }
`;
const CheckIcon = styled(BtnIcon)`
  color: #eb05ff;
`;
const UpdateInput = styled.input`
  border: none;
  border-bottom: solid 2px #2878f6;
  background: #041856;
  color: #ffffff;
  padding: 5px;
  margin-left: 20px;
  font-size: 20px;
  outline: none;
`;
const UpdateBtn = styled.button`
  border: solid 2px #2878f6;
  background: #041856;
  color: #ffffff;
  padding: 5px 15px;
  margin: 10px;
`;
export default function TodoItem({
  todo,
  handleEdit,
  handleUpdateTodo,
  handleDeleteTodo,
  handleTroggleCheck,
}) {
  const { value, setValue, handleChange } = useInput();
  const handleTroggleClick = () => {
    handleTroggleCheck(todo.id);
  };
  const handleEditClick = () => {
    setValue(todo.content);
    handleEdit(todo.id);
  };
  const handleUpdateClick = () => {
    handleUpdateTodo(todo.id, value);
  };
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <TodoCard data-todo-id={todo.id}>
      <h1>yoyoyo~~Hello hello</h1>
      <CheckIcon onClick={handleTroggleClick}>
        {todo.isDone ? <FaCheckCircle /> : <FaRegCircle />}
      </CheckIcon>
      {todo.isUpdate ? (
        <UpdateInput defaultValue={todo.content} onChange={handleChange} />
      ) : (
        <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      )}

      <TodoBtn>
        {todo.isUpdate ? (
          <UpdateBtn onClick={handleUpdateClick}>更新</UpdateBtn>
        ) : (
          <BtnIcon onClick={handleEditClick}>
            <FaRegEdit />
          </BtnIcon>
        )}

        <BtnIcon onClick={handleDeleteClick}>
          <FaRegTrashAlt />
        </BtnIcon>
      </TodoBtn>
    </TodoCard>
  );
}
