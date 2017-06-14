const TODO_LIMIT = 100;

function getHiddenToDos(allToDos) {
  return allToDos.filter(
    toDo => toDo.isHidden()
  );
}

export function getCompletedToDos(allToDos) {
  let completedToDos = allToDos.filter(
    toDo => todo.isCompleted()
  )

  return completedToDos.slice(0, TODO_LIMIT);
}
