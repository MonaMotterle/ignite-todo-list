import style from './TaskList.module.css';
const listOfTasks = [
  'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
]

export const TaskList = () => {
  return (
    <div>
      <header className={style.taskListHeader}>
        <p className={style.taskListCreated}>
          Tarefas criadas <span className={style.countTaskSpan}>5</span>
        </p>

        <p className={style.taskListDone}>
          Concluídas <span className={style.countTaskSpan}>2 de 5</span>
        </p>
      </header>
      <main>
        {listOfTasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </main>
    </div>
  )
}